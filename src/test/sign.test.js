import { PrivKey, PubKey } from "../crypto/sign/key.js";
import { Sign, Verify } from "../crypto/sign/sign.js";
import CurveParam from "../crypto/curveParam.js";
import math from "../utils/math.js";

describe("signature Test", () => {

    it("key Test", (done) => {
        const msg  = 'hi hello !! ~~~~ffffafafafafafafafasfdsafdsafdsafdsafsdafsad김경빈김경빈';
        const rand = math.randomFieldElement();

        const pk = new PubKey(rand);
        const sk = new PrivKey(rand);

        const signature = Sign(msg, sk)
        console.log("sign : ",signature);

        console.log(Verify(msg, signature, pk));

        done();
    }).timeout(1000);
})