import { PubKey, PrivKey, SignKeyGen } from "../crypto/sign/key.js";
import { Sign, Verify } from "../crypto/sign/sign.js";
import math from "../utils/math.js";
import mimc from "../crypto/mimc.js";
import types from "../utils/types.js";

export default class Issuer {
    #privKey = undefined;

    /**
     * 
     * @param {PubKey}  pubkey 
     * @param {PrivKey} privkey 
     */
    constructor(pubkey, privkey){
        this.pubKey   = pubkey;
        this.#privKey = privkey;
    }

    static generateIssuer(){
        const {pk, sk} = SignKeyGen();
        return new Issuer(pk, sk);
    }

    /**
     * 
     * @param {BigInt} bigIntSk   
     * @returns 
     */
    static recoverFromSk(bigIntSk){
        const pubk = new PubKey(bigIntSk);
        const prvk = new PrivKey(bigIntSk);

        return new Issuer(pubk, prvk);
    }

    /**
     * 
     * @param {*} usrAddr 
     * @param  {...any} attr 
     * 
     * @returns {infoJsonArr} [[attrJson, r, tag] ...]
     */
    issueCredential(...attr){
        const attrNum = attr.length;
        const mimc7 = new mimc.MiMC7();
        const ret = new Array(attrNum);
        let concatTag = '';

        for(let i=0; i<attrNum; i++){
            const r = math.randomFieldElement(this.pubKey.pp.prime).toString(16);
            const tmp = new Array();
            const attrHex = types.asciiToHex(JSON.stringify(attr[i]));
            const tag = mimc7.hash(this.pubKey.pk, attrHex, r)
            
            tmp.push(JSON.stringify(attr[i]), r, tag);
            concatTag += tag

            ret[i] = tmp;
        }
        console.log("concat Tag : ", concatTag);

        const sign = Sign(concatTag, this.#privKey);
        return {
            'infoJsonArr' :ret,
            'sign' :sign
        };
    }


    /**
     * 
     * @param {String} idData 
     * @param {String} data 
     * @param  {...JSON} attr 
     * 
     * 
     * @returns {bigInt Array} attr
     */
    
    issueData(idData, data, ...attr){
        const attrNum = attr.length;
        const mimc7 = new mimc.MiMC7();
        const ret = new Array(attrNum);
        let concatTag = '';

        if(idData != mimc7.hash(data)){
            return undefined;
        }

        for(let i=0; i<attrNum; i++){
            const r = math.randomFieldElement(this.pubKey.pp.prime).toString(16);
            const tmp = new Array();
            const attrHex = types.asciiToHex(JSON.stringify(attr[i]));
            const tag = mimc7.hash(idData, attrHex+r)
            
            tmp.push(JSON.stringify(attr[i]), r, tag);
            concatTag += tag

            ret[i] = tmp;
        }

        const sign = Sign(concatTag, this.#privKey);
        return {
            'infoJsonArr' :ret,
            'sign' :sign
        };
    }
}
