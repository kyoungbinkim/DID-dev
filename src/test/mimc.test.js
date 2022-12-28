import mimc from "../crypto/mimc.js";

describe('mimc', () => {
    const mimc7 = new mimc.MiMC7();
    it('mimc', ()=> {
        const a = '0x6d6168616d000000000000000000000000000000000000000000000000000000';
        
        console.log(mimc7.hash(a))
    })
    
})