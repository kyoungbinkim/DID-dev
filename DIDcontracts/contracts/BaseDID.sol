// SPDX-License-Identifier: LGPL-3.0+
pragma solidity ^0.8.2;

import "./BaseMerkleTree.sol";
import "./VerifySchnorr.sol";

abstract contract BaseDID is BaseMerkleTree, VerifySchnorr {

        uint256 private _issuePk;
        uint256 private _revokePk;

        mapping(uint256 => bool) public nullifier;

        constructor(uint256 issuerPk, uint256 revokePk, uint256 g, uint256 p, uint256 depth, uint256 hash_type)
                BaseMerkleTree(depth, hash_type)
                VerifySchnorr(p,g)
        {
                _issuePk = issuerPk;
                _revokePk = revokePk;
        }

        function issueDID (
                uint256 credential,
                uint256 r,
                uint256 s
        ) payable public {
                require(Verify(credential, r, s, _issuePk), "invalid signature");

                _insert(bytes32(credential));
                _recomputeRoot(1);
        }

        function revokeDID(
                uint256 credential,
                uint256 r,
                uint256 s
        ) payable public {
                require(Verify(credential, r, s, _revokePk), "invalid signature");

                nullifier[credential] = true;
        }

        function getMerklePath(uint256 index) public view returns (uint256[] memory) {
                bytes32[] memory merkle_path_bytes =  _computeMerklePath(index);
                uint256[] memory merkle_path = new uint256[](_DEPTH);

                for (uint256 i=0; i < merkle_path_bytes.length; i++) {
                        merkle_path[i] = uint256(merkle_path_bytes[i]);
                }
                
                return merkle_path;
        }

        function getIssuePk() view public returns(uint256) {
                return _issuePk;
        }

        function isValidCredential (
                uint256 credential,
                uint256 index
        ) payable public returns (bool){
                require(uint256(_nodes[index]) == credential, 'invalid credential');
                require(!nullifier[credential], 'nullified credential');

                return true;
        }
}