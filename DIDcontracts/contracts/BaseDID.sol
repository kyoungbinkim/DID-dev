// SPDX-License-Identifier: LGPL-3.0+
pragma solidity ^0.8.2;

import "./BaseMerkleTree.sol";
import "./VerifySchnorr.sol";

abstract contract BaseDID is BaseMerkleTree, VerifySchnorr {
        
        mapping(uint256 => bool) private _acc;

        uint256 private recentAcc;

        mapping(address => bool) private _issue_addr;
}