import Issuer from "../issuer/issuer.js"
import { SignKeyGen } from "../crypto/sign/key.js"
import mimc from "../crypto/mimc.js"

describe('test', () => {

    it('test', () => {
        const key = SignKeyGen();
        const issuer = new Issuer(key.pk, key.sk);
        console.log(issuer.issueCredential('aff00ff00', {'name':'kim'}, {'age':199}))
        
        const mimc7 = new mimc.MiMC7();
        const data = 'ffaaff00aaffaa1203012301';
        console.log('0x'+data.padStart(64,'0'));

        const id_data = mimc7.hash(data);
        console.log('id_data : ', id_data.padStart(64,'0'));

        console.log(issuer.issueData(id_data, data, 
            {'title': 'WTF !!'}, 
            {'age' : '123'}, 
            {'desc': 'boring novel !!!#!@#@!#!@#!@#!@#@!'}
        ));
        // const 
        console.log(BigInt(123312312).toString(16));
    }).timeout(3000)

    
})