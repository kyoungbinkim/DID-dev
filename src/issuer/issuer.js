import { PubKey, PrivKey } from "../crypto/sign/key";
import { Sign, Verify } from "../crypto/sign/sign";


class Issuer {
    #privkey = undefined;

    /**
     * 
     * @param {PubKey}  pubkey 
     * @param {PrivKey} privkey 
     */
    constructor(pubkey, privkey){
        this.pubKey   = pubkey;
        this.#privKey = privkey;
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

    
    issueCredential(usrAddr, ...attr){
        
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
        

        
    }
}