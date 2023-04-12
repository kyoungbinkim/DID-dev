// SPDX-License-Identifier: LGPL-3.0+
pragma solidity ^0.8.2;

import "./BaseMerkleTree.sol";
import "./VerifySchnorr.sol";

abstract contract BaseDID is BaseMerkleTree, VerifySchnorr {

        // contract deployer's pk : 정부의 pk
        uint256 private _masterPk;

        // 인증된 pk list
        mapping(uint256 => bool) public pkList;

        constructor(uint256 masterPk) {
                _masterPk = masterPk;
        }

        function registerPk(
                uint256 pk,
                uint256 r,
                uint256 s
        ) 
        public payable {
                require(!pkList[pk], 'already registered');

                require(VerifySchnorr.Verify(pk, r, s, _masterPk), 'invalid signature');

                pkList[pk] = true;
        }

        function isRegisteredPk(uint256 pk) public view returns(bool) {
                return pkList[pk];
        }
}