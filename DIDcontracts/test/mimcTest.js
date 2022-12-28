const VerifySchnorr = artifacts.require("VerifySchnorr");

contract('mimc7 test', ()=> {
    it('hello', async () => {
        const VerifySchnorr = await VerifySchnorr.deployed();
        const mimc7result = await VerifySchnorr.hash(123,123);
    })
})