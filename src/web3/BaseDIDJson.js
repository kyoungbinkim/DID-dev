export default {
  "contractName": "BaseDID",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "message",
          "type": "bytes32"
        }
      ],
      "name": "LogDebug",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "m",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "r",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "s",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pk",
          "type": "uint256"
        }
      ],
      "name": "Verify",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "_computeMerklePath",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_nodes",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getFeildPrimeBytes",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getGeneratorBytes",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "x",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "y",
          "type": "bytes32"
        }
      ],
      "name": "hash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "nullifier",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "credential",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "r",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "s",
          "type": "uint256"
        }
      ],
      "name": "issueDID",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "credential",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "r",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "s",
          "type": "uint256"
        }
      ],
      "name": "revokeDID",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getMerklePath",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getIssuerPk",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "credential",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "isValidCredential",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.2+commit.661d1103\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"message\",\"type\":\"bytes32\"}],\"name\":\"LogDebug\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"m\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"r\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"s\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"pk\",\"type\":\"uint256\"}],\"name\":\"Verify\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"_computeMerklePath\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"_nodes\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getFeildPrimeBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getGeneratorBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getIssuerPk\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getMerklePath\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"x\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"y\",\"type\":\"bytes32\"}],\"name\":\"hash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"credential\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"isValidCredential\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"credential\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"r\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"s\",\"type\":\"uint256\"}],\"name\":\"issueDID\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"nullifier\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"credential\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"r\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"s\",\"type\":\"uint256\"}],\"name\":\"revokeDID\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/BaseDID.sol\":\"BaseDID\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/BaseDID.sol\":{\"keccak256\":\"0x6a75da2e6e38bbf8a59d79a78eeb0e508ee1f9cc965424d3a0e18aba5190eeaa\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://3219d6e1b69c3740f760de53fcd8de29335d90158bd525e7313847a34609c501\",\"dweb:/ipfs/QmcSRT6Nirwm8p39gM3vyeN5dVrKLSPzFkBFXU4t1qALUV\"]},\"project:/contracts/BaseMerkleTree.sol\":{\"keccak256\":\"0x132e420d1c9cb838e89c5675ed0c38ff048f28a551a181686d5b68583ff5498f\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://720aa022e7f07f285c91425b4dfe18417e800709cd1a6dfe766d66ac67c83743\",\"dweb:/ipfs/Qmd9kaEfF4nHPun2TVPR6hzYsF2YaT85wUj6gY2DSDTSNp\"]},\"project:/contracts/BigNumbers.sol\":{\"keccak256\":\"0x7cde807af1d267e0d8216282295bc28be926a77d0a974c194e989038ff887571\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3cf074eaf1f7672df78d73160e5d6213f4126df8bf811f0ff3b0855a9cce6592\",\"dweb:/ipfs/QmdjEgHJ7ojuDiQnQMx42zzrfUABKjopPLUNybyLUhxkZC\"]},\"project:/contracts/MiMC7.sol\":{\"keccak256\":\"0x6699f15f4ecd06e19e2263c96367069906f77d78b734833cea21e0448e07ea29\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://aa4a3451df04180559d204a9669de06fd147533a27edfa2a4051539488836497\",\"dweb:/ipfs/QmZUNUrNDPATwMPW5cDQ2qh7cMVyrW5xaGedsf5Mrex2PW\"]},\"project:/contracts/VerifySchnorr.sol\":{\"keccak256\":\"0xfebd61efc8ab80468807fffb34e7f92975a4ff2900056d5a39c681311f2d213c\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://d93b821684d76255720c1fbf62e63a0e6af104417a059da8190f726418cf372d\",\"dweb:/ipfs/QmNyN8vs5kkd6RfY5pYr676LPY6drBtqTfLy7tpeQo5Syx\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: LGPL-3.0+\npragma solidity ^0.8.2;\n\nimport \"./BaseMerkleTree.sol\";\nimport \"./VerifySchnorr.sol\";\n\nabstract contract BaseDID is BaseMerkleTree, VerifySchnorr {\n\n        uint256 private _issuePk;\n        uint256 private _revokePk;\n\n        mapping(uint256 => bool) public nullifier;\n\n        constructor(uint256 issuerPk, uint256 revokePk, uint256 g, uint256 p, uint256 depth, uint256 hash_type)\n                BaseMerkleTree(depth, hash_type)\n                VerifySchnorr(p,g)\n        {\n                _issuePk = issuerPk;\n                _revokePk = revokePk;\n        }\n\n        function issueDID (\n                uint256 credential,\n                uint256 r,\n                uint256 s\n        ) payable public {\n                require(Verify(credential, r, s, _issuePk), \"invalid signature\");\n\n                _insert(bytes32(credential));\n                _recomputeRoot(1);\n        }\n\n        function revokeDID(\n                uint256 credential,\n                uint256 r,\n                uint256 s\n        ) payable public {\n                require(Verify(credential, r, s, _revokePk), \"invalid signature\");\n\n                nullifier[credential] = true;\n        }\n\n        function getMerklePath(uint256 index) public view returns (uint256[] memory) {\n                bytes32[] memory merkle_path_bytes =  _computeMerklePath(index);\n                uint256[] memory merkle_path = new uint256[](_DEPTH);\n\n                for (uint256 i=0; i < merkle_path_bytes.length; i++) {\n                        merkle_path[i] = uint256(merkle_path_bytes[i]);\n                }\n                \n                return merkle_path;\n        }\n\n        function getIssuerPk() view public returns(uint256) {\n                return _issuePk;\n        }\n\n        function isValidCredential (\n                uint256 credential,\n                uint256 index\n        ) payable public returns (bool){\n                require(uint256(_nodes[index]) == credential, 'invalid credential');\n                require(!nullifier[credential], 'nullified credential');\n\n                return true;\n        }\n}",
  "sourcePath": "/Users/kim/DID-dev/DIDcontracts/contracts/BaseDID.sol",
  "ast": {
    "absolutePath": "project:/contracts/BaseDID.sol",
    "exportedSymbols": {
      "BaseDID": [
        200
      ],
      "BaseMerkleTree": [
        656
      ],
      "BigNumber": [
        665
      ],
      "BigNumbers": [
        2650
      ],
      "MiMC7": [
        2665
      ],
      "VerifySchnorr": [
        2874
      ]
    },
    "id": 201,
    "license": "LGPL-3.0+",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "38:23:0"
      },
      {
        "absolutePath": "project:/contracts/BaseMerkleTree.sol",
        "file": "./BaseMerkleTree.sol",
        "id": 2,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 201,
        "sourceUnit": 657,
        "src": "63:30:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/VerifySchnorr.sol",
        "file": "./VerifySchnorr.sol",
        "id": 3,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 201,
        "sourceUnit": 2875,
        "src": "94:29:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 4,
              "name": "BaseMerkleTree",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 656,
              "src": "154:14:0"
            },
            "id": 5,
            "nodeType": "InheritanceSpecifier",
            "src": "154:14:0"
          },
          {
            "baseName": {
              "id": 6,
              "name": "VerifySchnorr",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2874,
              "src": "170:13:0"
            },
            "id": 7,
            "nodeType": "InheritanceSpecifier",
            "src": "170:13:0"
          }
        ],
        "contractDependencies": [
          656,
          2874
        ],
        "contractKind": "contract",
        "fullyImplemented": false,
        "id": 200,
        "linearizedBaseContracts": [
          200,
          2874,
          656
        ],
        "name": "BaseDID",
        "nameLocation": "143:7:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9,
            "mutability": "mutable",
            "name": "_issuePk",
            "nameLocation": "211:8:0",
            "nodeType": "VariableDeclaration",
            "scope": 200,
            "src": "195:24:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 8,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "195:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 11,
            "mutability": "mutable",
            "name": "_revokePk",
            "nameLocation": "245:9:0",
            "nodeType": "VariableDeclaration",
            "scope": 200,
            "src": "229:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "229:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "functionSelector": "aa07270a",
            "id": 15,
            "mutability": "mutable",
            "name": "nullifier",
            "nameLocation": "297:9:0",
            "nodeType": "VariableDeclaration",
            "scope": 200,
            "src": "265:41:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
              "typeString": "mapping(uint256 => bool)"
            },
            "typeName": {
              "id": 14,
              "keyType": {
                "id": 12,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "273:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "265:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                "typeString": "mapping(uint256 => bool)"
              },
              "valueType": {
                "id": 13,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "284:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 46,
              "nodeType": "Block",
              "src": "513:86:0",
              "statements": [
                {
                  "expression": {
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 38,
                      "name": "_issuePk",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9,
                      "src": "531:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 39,
                      "name": "issuerPk",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17,
                      "src": "542:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "531:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 41,
                  "nodeType": "ExpressionStatement",
                  "src": "531:19:0"
                },
                {
                  "expression": {
                    "id": 44,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 42,
                      "name": "_revokePk",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "568:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 43,
                      "name": "revokePk",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19,
                      "src": "580:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "568:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 45,
                  "nodeType": "ExpressionStatement",
                  "src": "568:20:0"
                }
              ]
            },
            "id": 47,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 30,
                    "name": "depth",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 25,
                    "src": "452:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "id": 31,
                    "name": "hash_type",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27,
                    "src": "459:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 32,
                "modifierName": {
                  "id": 29,
                  "name": "BaseMerkleTree",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 656,
                  "src": "437:14:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "437:32:0"
              },
              {
                "arguments": [
                  {
                    "id": 34,
                    "name": "p",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 23,
                    "src": "500:1:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "id": 35,
                    "name": "g",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21,
                    "src": "502:1:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 36,
                "modifierName": {
                  "id": 33,
                  "name": "VerifySchnorr",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2874,
                  "src": "486:13:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "486:18:0"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17,
                  "mutability": "mutable",
                  "name": "issuerPk",
                  "nameLocation": "337:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 47,
                  "src": "329:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19,
                  "mutability": "mutable",
                  "name": "revokePk",
                  "nameLocation": "355:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 47,
                  "src": "347:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "347:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21,
                  "mutability": "mutable",
                  "name": "g",
                  "nameLocation": "373:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 47,
                  "src": "365:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 23,
                  "mutability": "mutable",
                  "name": "p",
                  "nameLocation": "384:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 47,
                  "src": "376:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25,
                  "mutability": "mutable",
                  "name": "depth",
                  "nameLocation": "395:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 47,
                  "src": "387:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "387:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "mutability": "mutable",
                  "name": "hash_type",
                  "nameLocation": "410:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 47,
                  "src": "402:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "402:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "328:92:0"
            },
            "returnParameters": {
              "id": 37,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "513:0:0"
            },
            "scope": 200,
            "src": "317:282:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "743:175:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 58,
                            "name": "credential",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49,
                            "src": "776:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 59,
                            "name": "r",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 51,
                            "src": "788:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 60,
                            "name": "s",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53,
                            "src": "791:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 61,
                            "name": "_issuePk",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9,
                            "src": "794:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 57,
                          "name": "Verify",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2855,
                          "src": "769:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256,uint256,uint256,uint256) view returns (bool)"
                          }
                        },
                        "id": 62,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "769:34:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "696e76616c6964207369676e6174757265",
                        "id": 63,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "805:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_12a179e1a73f41ef8e1ba2f259a99bc53b6ace3abb110ac2ea058e42c6104e1a",
                          "typeString": "literal_string \"invalid signature\""
                        },
                        "value": "invalid signature"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_12a179e1a73f41ef8e1ba2f259a99bc53b6ace3abb110ac2ea058e42c6104e1a",
                          "typeString": "literal_string \"invalid signature\""
                        }
                      ],
                      "id": 56,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "761:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 64,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "761:64:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 65,
                  "nodeType": "ExpressionStatement",
                  "src": "761:64:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 69,
                            "name": "credential",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 49,
                            "src": "860:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 68,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "852:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 67,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "852:7:0",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 70,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "852:19:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 66,
                      "name": "_insert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 369,
                      "src": "844:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "844:28:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "844:28:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "31",
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "905:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "id": 73,
                      "name": "_recomputeRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 423,
                      "src": "890:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (uint256) returns (bytes32)"
                      }
                    },
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "890:17:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "890:17:0"
                }
              ]
            },
            "functionSelector": "52a978f9",
            "id": 78,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "issueDID",
            "nameLocation": "618:8:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 54,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49,
                  "mutability": "mutable",
                  "name": "credential",
                  "nameLocation": "653:10:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "645:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "645:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "689:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "681:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "681:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "716:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "708:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "627:100:0"
            },
            "returnParameters": {
              "id": 55,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "743:0:0"
            },
            "scope": 200,
            "src": "609:309:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 103,
              "nodeType": "Block",
              "src": "1062:141:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 89,
                            "name": "credential",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "1095:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 90,
                            "name": "r",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 82,
                            "src": "1107:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 91,
                            "name": "s",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 84,
                            "src": "1110:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 92,
                            "name": "_revokePk",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11,
                            "src": "1113:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 88,
                          "name": "Verify",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2855,
                          "src": "1088:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256,uint256,uint256,uint256) view returns (bool)"
                          }
                        },
                        "id": 93,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1088:35:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "696e76616c6964207369676e6174757265",
                        "id": 94,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1125:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_12a179e1a73f41ef8e1ba2f259a99bc53b6ace3abb110ac2ea058e42c6104e1a",
                          "typeString": "literal_string \"invalid signature\""
                        },
                        "value": "invalid signature"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_12a179e1a73f41ef8e1ba2f259a99bc53b6ace3abb110ac2ea058e42c6104e1a",
                          "typeString": "literal_string \"invalid signature\""
                        }
                      ],
                      "id": 87,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1080:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1080:65:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "1080:65:0"
                },
                {
                  "expression": {
                    "id": 101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 97,
                        "name": "nullifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "1164:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                          "typeString": "mapping(uint256 => bool)"
                        }
                      },
                      "id": 99,
                      "indexExpression": {
                        "id": 98,
                        "name": "credential",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 80,
                        "src": "1174:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1164:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1188:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1164:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 102,
                  "nodeType": "ExpressionStatement",
                  "src": "1164:28:0"
                }
              ]
            },
            "functionSelector": "5a29d527",
            "id": 104,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "revokeDID",
            "nameLocation": "937:9:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80,
                  "mutability": "mutable",
                  "name": "credential",
                  "nameLocation": "972:10:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "964:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "964:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 82,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1008:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "1000:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 81,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1000:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 84,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "1035:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "1027:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 83,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1027:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "946:100:0"
            },
            "returnParameters": {
              "id": 86,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1062:0:0"
            },
            "scope": 200,
            "src": "928:275:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 158,
              "nodeType": "Block",
              "src": "1290:377:0",
              "statements": [
                {
                  "assignments": [
                    116
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 116,
                      "mutability": "mutable",
                      "name": "merkle_path_bytes",
                      "nameLocation": "1325:17:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 158,
                      "src": "1308:34:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 114,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "1308:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 115,
                        "nodeType": "ArrayTypeName",
                        "src": "1308:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 120,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 118,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "1365:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 117,
                      "name": "_computeMerklePath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 612,
                      "src": "1346:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1346:25:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1308:63:0"
                },
                {
                  "assignments": [
                    125
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125,
                      "mutability": "mutable",
                      "name": "merkle_path",
                      "nameLocation": "1406:11:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 158,
                      "src": "1389:28:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 123,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1389:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 124,
                        "nodeType": "ArrayTypeName",
                        "src": "1389:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 131,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 129,
                        "name": "_DEPTH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 205,
                        "src": "1434:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 128,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "1420:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (uint256[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 126,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1424:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 127,
                        "nodeType": "ArrayTypeName",
                        "src": "1424:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      }
                    },
                    "id": 130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1420:21:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1389:52:0"
                },
                {
                  "body": {
                    "id": 154,
                    "nodeType": "Block",
                    "src": "1513:91:0",
                    "statements": [
                      {
                        "expression": {
                          "id": 152,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 143,
                              "name": "merkle_path",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 125,
                              "src": "1539:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 145,
                            "indexExpression": {
                              "id": 144,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 133,
                              "src": "1551:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1539:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "baseExpression": {
                                  "id": 148,
                                  "name": "merkle_path_bytes",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 116,
                                  "src": "1564:17:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                "id": 150,
                                "indexExpression": {
                                  "id": 149,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 133,
                                  "src": "1582:1:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1564:20:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "id": 147,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1556:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 146,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1556:7:0",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1556:29:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1539:46:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 153,
                        "nodeType": "ExpressionStatement",
                        "src": "1539:46:0"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 136,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 133,
                      "src": "1478:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 137,
                        "name": "merkle_path_bytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116,
                        "src": "1482:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "id": 138,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1482:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1478:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 155,
                  "initializationExpression": {
                    "assignments": [
                      133
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 133,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "1473:1:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 155,
                        "src": "1465:9:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 132,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1465:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 135,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1475:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1465:11:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1508:3:0",
                      "subExpression": {
                        "id": 140,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 133,
                        "src": "1508:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 142,
                    "nodeType": "ExpressionStatement",
                    "src": "1508:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "1460:144:0"
                },
                {
                  "expression": {
                    "id": 156,
                    "name": "merkle_path",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 125,
                    "src": "1645:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 111,
                  "id": 157,
                  "nodeType": "Return",
                  "src": "1638:18:0"
                }
              ]
            },
            "functionSelector": "6e4d6517",
            "id": 159,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getMerklePath",
            "nameLocation": "1222:13:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 106,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "1244:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 159,
                  "src": "1236:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1236:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1235:15:0"
            },
            "returnParameters": {
              "id": 111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 110,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 159,
                  "src": "1272:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 108,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1272:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 109,
                    "nodeType": "ArrayTypeName",
                    "src": "1272:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1271:18:0"
            },
            "scope": 200,
            "src": "1213:454:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 166,
              "nodeType": "Block",
              "src": "1729:44:0",
              "statements": [
                {
                  "expression": {
                    "id": 164,
                    "name": "_issuePk",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9,
                    "src": "1754:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 163,
                  "id": 165,
                  "nodeType": "Return",
                  "src": "1747:15:0"
                }
              ]
            },
            "functionSelector": "f5c4b64b",
            "id": 167,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getIssuerPk",
            "nameLocation": "1686:11:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 160,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1697:2:0"
            },
            "returnParameters": {
              "id": 163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 162,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 167,
                  "src": "1720:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 161,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1720:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1719:9:0"
            },
            "scope": 200,
            "src": "1677:96:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 198,
              "nodeType": "Block",
              "src": "1917:199:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 184,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "baseExpression": {
                                "id": 179,
                                "name": "_nodes",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 225,
                                "src": "1951:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_bytes32_$",
                                  "typeString": "mapping(uint256 => bytes32)"
                                }
                              },
                              "id": 181,
                              "indexExpression": {
                                "id": 180,
                                "name": "index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 171,
                                "src": "1958:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1951:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 178,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1943:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 177,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "1943:7:0",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1943:22:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 183,
                          "name": "credential",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 169,
                          "src": "1969:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1943:36:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "696e76616c69642063726564656e7469616c",
                        "id": 185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1981:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_baf9ab5fb0e836494114a6ec156cc296683746df2b20f96b86d2896e69f28536",
                          "typeString": "literal_string \"invalid credential\""
                        },
                        "value": "invalid credential"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_baf9ab5fb0e836494114a6ec156cc296683746df2b20f96b86d2896e69f28536",
                          "typeString": "literal_string \"invalid credential\""
                        }
                      ],
                      "id": 176,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1935:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1935:67:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 187,
                  "nodeType": "ExpressionStatement",
                  "src": "1935:67:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 192,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "2028:22:0",
                        "subExpression": {
                          "baseExpression": {
                            "id": 189,
                            "name": "nullifier",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15,
                            "src": "2029:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                              "typeString": "mapping(uint256 => bool)"
                            }
                          },
                          "id": 191,
                          "indexExpression": {
                            "id": 190,
                            "name": "credential",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 169,
                            "src": "2039:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2029:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6e756c6c69666965642063726564656e7469616c",
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2052:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c6fbdb7726aff4b68b97c6570bc0f074287c8790a50eeb33291d7bccdf86fd9d",
                          "typeString": "literal_string \"nullified credential\""
                        },
                        "value": "nullified credential"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c6fbdb7726aff4b68b97c6570bc0f074287c8790a50eeb33291d7bccdf86fd9d",
                          "typeString": "literal_string \"nullified credential\""
                        }
                      ],
                      "id": 188,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2020:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2020:55:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 195,
                  "nodeType": "ExpressionStatement",
                  "src": "2020:55:0"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2101:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 175,
                  "id": 197,
                  "nodeType": "Return",
                  "src": "2094:11:0"
                }
              ]
            },
            "functionSelector": "cc3d947e",
            "id": 199,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidCredential",
            "nameLocation": "1792:17:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 169,
                  "mutability": "mutable",
                  "name": "credential",
                  "nameLocation": "1836:10:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 199,
                  "src": "1828:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 168,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1828:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 171,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "1872:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 199,
                  "src": "1864:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 170,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1864:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1810:77:0"
            },
            "returnParameters": {
              "id": 175,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 174,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 199,
                  "src": "1912:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 173,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1912:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1911:6:0"
            },
            "scope": 200,
            "src": "1783:333:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 201,
        "src": "125:1993:0"
      }
    ],
    "src": "38:2080:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.2+commit.661d1103.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.11",
  "updatedAt": "2023-04-24T11:39:27.645Z",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}