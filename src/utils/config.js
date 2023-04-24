/* global BigInt */

var Config = {
    
    dataBlockNum    : '530',
    dataMaxBlockNum : '530',
    maxIdLen        : 32,

    SIGN_TYPE       : 'SCHNORR',
    HASH_TYPE       : 'MIMC7',

    EC_TYPE         : 'EC_ALT_BN128',
    R1CS_GG         : 1,
    R1CS_ROM_SE     : 2,

    EC_ALT_BN128    : 1,
    EC_BLS12_381    : 2,

    testProvider    : 'http://127.0.0.1:7545',
}

const initConfig = () => {

}

export default Config;