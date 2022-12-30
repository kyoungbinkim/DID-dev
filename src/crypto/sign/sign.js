import { PrivKey, PubKey } from "./key.js";
import Config from "../../utils/config.js";
import types from "../../utils/types.js";
import mimc from "../mimc.js";
import math, {modPow, mod} from "../../utils/math.js";

/**
 * 
 * @param {String}  m           : String
 * @param {PrivKey} PrivKey 
 * 
 * @returns
 */
export function Sign(m, privKey){
    if(typeof m !== 'string'){
        console.log('m must be string.');
        return null;
    }

    const mHexString = types.asciiToHex(m);
    const mimc7 = new mimc.MiMC7();
    let signature  = {};
    
    if(Config.SIGN_TYPE == 'SCHNORR'){
        // select rand element
        const k = math.randomFieldElement(privKey.pp.prime);

        // Gr = g^k mod p
        const r = modPow(privKey.pp.generator, k, privKey.pp.prime);

        // e = Hash(m || r)
        const e = mimc7.hash(mHexString, r.toString(16));

        // s = k - ex mod p
        const s = mod(k - types.hexToInt(e) * privKey.sk, privKey.pp.prime-1n);
        
        signature['r'] = r;
        signature['s'] = s;
        return signature;
    }
    else if(Config.SIGN_TYPE == 'ELGAMAL'){
        return undefined;
    }
}

/**
 * 
 * @param {String} m 
 * @param {sign} signature 
 * @param {PubKey} pubKey 
 */
export function Verify(m, signature, pubKey) {
    const mimc7 = new mimc.MiMC7();
    const mHexString = types.asciiToHex(m);

    if(Config.SIGN_TYPE == 'SCHNORR') {
        const e = mimc7.hash(mHexString, signature['r'].toString(16));
        console.log("Hash(m||r) : ",e);
        const tmp =
            modPow(pubKey.pp.generator, signature['s'], pubKey.pp.prime) *
            modPow(pubKey.pk, types.hexToInt(e), pubKey.pp.prime);
        const r_ = mod(
            tmp,
            pubKey.pp.prime
        );

        // console.log(r_, signature['r']);
        return r_ == signature['r'];
    }
    else if(Config.SIGN_TYPE == 'ELGAMAL'){

    }
}

/**
 * 
 * @param {String} m 
 * @param {JSON} signature 
 * @param {PubKey} pubKey 
 */
export function msgAndSignToContractFormat(m, signature, pubKey){
    const uintMsg = math.mod(BigInt('0x'+types.asciiToHex(m)), pubKey.pp.prime).toString();
    const uintR   = signature['r'].toString();
    const uintS   = signature['s'].toString();
    const uintPk  = pubKey.pk.toString();

    console.log("uintmsg :\t", uintMsg);
    console.log("uintR   :\t", uintR);
    console.log("uintS   :\t", uintS);
    console.log("uintPk  :\t", uintPk);
}