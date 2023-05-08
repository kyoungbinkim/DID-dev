/* global BigInt */
import CurveParam from "../curveParam.js"
import Config from "../../utils/config.js"
import {modPow, randomFieldElement} from "../../utils/math.js";
import types from "../../utils/types.js";

const Generator = CurveParam(Config.EC_TYPE).g;
const Prime     = CurveParam(Config.EC_TYPE).prime;

export class PubKey {

    /**
     * 
     * @param {BigInt} sk 
     * @param {BigInt} prime
     * @param {BigInt} generator
     */
    constructor(sk){
        this.pp = {
            prime     : Prime,
            generator : Generator,
        }
        this.pk = modPow(Generator, sk, Prime);
    }
}

export class PrivKey {
    /**
     * 
     * @param {BigInt} sk 
     */
    constructor(sk){
        this.pp = {
            prime     : Prime,
            generator : Generator,
        }
        this.sk = sk;
    }
}
/**
 * 
 * @returns {PrivKey, PubKey} 
 */
export function SignKeyGen(){
    const skBigInt = randomFieldElement(Prime);

    const sk = new PrivKey(skBigInt);
    const pk = new PubKey(skBigInt);
    return { sk, pk };
}

/**
 * 
 * prime, generator, sk : BigInt
 */
export class SchnorrSignKeys{
    constructor(sk){
        this.pp = {
            prime : Prime,
            generator : Generator
        }
        this.sk = new PrivKey(sk);
        this.pk = new PubKey(sk);
    }

    static KeyGen(){
        const {sk} = SignKeyGen();
        return new SchnorrSignKeys(sk.sk);
    }
}
