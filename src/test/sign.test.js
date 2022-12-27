import { PrivKey, PubKey, SignKeyGen } from "../crypto/sign/key.js";
import { Sign, Verify } from "../crypto/sign/sign.js";
import CurveParam from "../crypto/curveParam.js";
import math from "../utils/math.js";

describe("signature Test", () => {

    it("key Test", (done) => {
        const msg  = 'hi hello !! ~~~~ffffafafafafafafafasfdsafdsafdsafdsafsdafsad김경빈김경빈``````````111111111111222222222dssssssssadfsadfsadfsadfsadfsadfasdfdsafsda';
        const rand = math.randomFieldElement();

        const pk = new PubKey(rand);
        const sk = new PrivKey(rand);

        const signature = Sign(msg, sk)
        console.log('msg : ' , msg);
        console.log("sign : ", signature);

        console.log('verify : ',Verify(msg, signature, pk));

        done();
    }).timeout(1000);

    it('key gen test ', ()=> {
        const key = SignKeyGen();
        // console.log('key : ', key);
        
        const sk = key.sk;
        const pk = key.pk;
        console.log('sk : ', sk);
        console.log('pk : ', pk);
    })
})