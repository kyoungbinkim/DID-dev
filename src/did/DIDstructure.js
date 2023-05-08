
class DIDstructure {
    /**
     * 
     * @param {String} name 
     * @param {String} idNum 
     * @param {String} id 
     * @param {String} address 
     * @param {String} hashedDetailAddress 
     * @param {String} momID 
     * @param {String} dadID 
     * @param {String} spouse 
     * @param {Array} kids 
     * @param {String} pwpa 
     */
    constructor(
        name,
        idNum,
        id,
        address,
        hashedDetailAddress,
        momID,
        dadID,
        spouse,
        kids,
        pwpa
    )
    {   
        // 거주지 증명
        this.c1 = {
            "name" : name
            //TODO
        }
        this.c2 = {

        }
        this.c3 = {

        }
    }

    static didStructureFromName(name){
        // 1. DB에서 이름으로 쿼리

        // 2.
        return new DIDstructure(

        )
    }

    static didStructureFromIdNum(idNum){
        // 1. DB 쿼리

        //2.
        return new DIDstructure(

        )
    }

    makeCredential(){
        // H(c_n)
        this.c1 = ;
        this.c2 = ;
        this.c3 = ;
    }

    makeTag(){
        if(this.c1 === undefined){
            this.makeCredential();
        }
        this.tag = 
    }

    signTag(issuerSignSk){
        
        return signature;
    }

    toContractInput(){
        return {
            tag : ,
            sign : 
        }
    }
}