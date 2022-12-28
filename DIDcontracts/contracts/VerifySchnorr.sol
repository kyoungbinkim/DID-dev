// SPDX-License-Identifier: LGPL-3.0+
pragma solidity ^0.8.2;

import "./BigNumbers.sol";
import "./MiMC7.sol";

// ALT_BN128
// prime     : 21888242871839275222246405745257275088548364400416034343698204186575808495617
// generator : 10398164868948269691505217409040279103932722394566360325611713252123766059173

contract VerifySchnorr {
    BigNumber p;
    BigNumber g;
    constructor(uint256 prime, uint256 generator) {
        p = BigNumbers.init(prime, false);
        g = BigNumbers.init(generator, false);
	}
    
    function hash(bytes32 x, bytes32 y) public pure returns(bytes32) {
        return MiMC7._hash(x, y);
    }

    function bytes32TOBytes(bytes32 data) internal pure returns (bytes memory){
        bytes memory ret = new bytes(32);
        for (uint8 i=0; i<32; i++){
            ret[i] = data[i];
        }

        return ret;
    }
    
    function Verify(uint256 m, uint256 r, uint256 s, uint256 pk) public view returns (bool){
        BigNumber memory _r = BigNumbers.init(abi.encodePacked(r), false);
        BigNumber memory _s = BigNumbers.init(abi.encodePacked(s), false);
        BigNumber memory _pk = BigNumbers.init(abi.encodePacked(pk), false);

        bytes32 e = hash(bytes32(m), bytes32(r));
        BigNumber memory _e = BigNumbers.init(bytes32TOBytes(e), false);

        BigNumber memory calc_r = BigNumbers.modmul (
            BigNumbers.modexp(g, _s, p),
            BigNumbers.modexp(_pk, _e, p),
            p
        );

        return BigNumbers.cmp(calc_r, _r, false) == 0;
    }
}