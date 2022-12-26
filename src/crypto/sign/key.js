/* global BigInt */
import CurveParam from "../curveParam.js"
import Config from "../../utils/config.js"
import {modPow} from "../../utils/math.js";
import types from "../../utils/types.js";

const Generator = CurveParam(Config.EC_TYPE).g;
const Prime     = CurveParam(Config.EC_TYPE).prime;

export class PubKey {

    /**
     * 
     * @param {BigInt} sk 
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
 * prime, generator, sk : BigInt
 */
export class SchnorrKey{
    constructor({prime, generator}, sk){
        this.pp = {
            prime : prime,
            generator : generator
        }
        this.sk = sk;
        this.pk = modPow(generator, sk, prime);
    }

    getSK(){
        return {
            pp : this.pp,
            sk : this.sk
        };
    }

    toJson(){
        
    }
}