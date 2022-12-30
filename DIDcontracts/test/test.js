const VerifySchnorr = artifacts.require("VerifySchnorr");

contract('mimc7 test', () => {
    
    it('getFeildPrime Test', async () => {
        const verschnorrIns = await VerifySchnorr.deployed();
        const feildPrime = await verschnorrIns.getFeildPrimeBytes.call();
        console.log('feildPrime : ', feildPrime);
    })

    it('Verify Test', async () => { 
        /*
        uintmsg :        1097109712056098591270526341936076354581781339
        uintR   :        17479856124812583265099188990182313142262755939280066041380596479399880900560
        uintS   :        20816782924984686601519281433107617400365763253647012789263695421542138559191
        uintPk  :        3231808129151423695598179367171881030196871147859860832894996716377572172410
        */
        const verschnorrIns = await VerifySchnorr.deployed();
        const verifyResult = await verschnorrIns.Verify.call(
            `1097109712056098591270526341936076354581781339`,
            `17479856124812583265099188990182313142262755939280066041380596479399880900560`,
            `20816782924984686601519281433107617400365763253647012789263695421542138559191`,
            `3231808129151423695598179367171881030196871147859860832894996716377572172410`
        );
        console.log("\nverify result : ", verifyResult);

    })


})