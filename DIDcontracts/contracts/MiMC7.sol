// Copyright (c) 2015-2020 Clearmatics Technologies Ltd
// Copyright (c) 2021-2021 Zkrypto Inc.
// SPDX-License-Identifier: LGPL-3.0+
pragma solidity ^0.8.2;

/// Reference papers:
///
/// \[AGRRT16]:
/// "MiMC: Efficient Encryption and Cryptographic Hashing with Minimal
/// Multiplicative Complexity", Martin Albrecht, Lorenzo Grassi, Christian
/// Rechberger, Arnab Roy, and Tyge Tiessen, ASIACRYPT 2016,
/// <https://eprint.iacr.org/2016/492.pdf>
///
/// "One-way compression function"
/// Section: "Miyaguchi–Preneel"
// solhint-disable-next-line max-line-length
/// <https://en.wikipedia.org/wiki/One-way_compression_function#Miyaguchi%E2%80%93Preneel>
library MiMC7
{
    function _hash(bytes32 x, bytes32 y) internal pure returns (bytes32 out) {
        // See [AGRRT16]:
        //   The round function is:
        //     F_i(a, key, rc_i) -> a^7 + key + rc
        //
        //   where:
        //     rc_0 = 0
        //     rc_1 = keccak(seed)
        //     rc_i = keccak(rc_{i-1}), for i = 2, ...
        //
        // a is initialized as x, and key is set y

        assembly {

            // solhint-disable-next-line max-line-length
            let r := 21888242871839275222246405745257275088548364400416034343698204186575808495617

            // Perform round 0 with x + y (rc = 0 in first round)
            let a := addmod(x, y, r)
            let a2 := mulmod(a, a, r)
            a := mulmod(mulmod(mulmod(a2, a2, r), a2, r), a, r)

            // Write round constant seed to pad at 0x00, where keccak256 will
            // be applied iteratively
            // solhint-disable-next-line max-line-length
            mstore(0x0, 0xAED26D6A3F5E0EA662411DDFCDE3527479DE9CEE7A56C656FF5F61DF13A39401)

            for {let j := 0} slt(j, 90) {j := add(j,1)} {

                // roundConstant = H(roundConstant);
                // Derive the (round) constants by iterative hash on the seed
                let roundConstant := keccak256(0x0, 32)
                mstore(0x0, roundConstant)

                // a = (outPermutation + roundConstant + key) ^ 7 mod r
                a := addmod(addmod(a, roundConstant, r), y, r)
                a2 := mulmod(a, a, r)
                a :=  mulmod(mulmod(mulmod(a2, a2, r), a2, r), a, r)
            }

            // In MiMC, the final round output is summed with the round key
            a := addmod(a, y, r)

            // Myjaguchi-Preneel OWCF is then applied, which adds the key and
            // message to the output of MiMC.
            out := addmod(addmod(a, x, r), y, r)
        }
    }
}