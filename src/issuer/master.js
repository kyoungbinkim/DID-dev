import Issuer from "./issuer";
import { Sign } from "../crypto/sign/sign";
import { SignKeyGen } from "../crypto/sign/key";

class Master extends Issuer {
    constructor (
        pubkey,
        privkey
    ) {
        super(pubkey, privkey)
    }

    /**
     * 
     * @param {String} pubkey 
     */
    empowerIssuer (
        pubkey
    ) {
        const sign = Sign(pubkey, this.privkey)

        // TODO  Choice  
        // 1. call smart contract from Master
        // 2. return signature and call smart contract from new Issuer
    }

    generateIssuer() {
        const {sk, pk} = SignKeyGen();
        
    }
}