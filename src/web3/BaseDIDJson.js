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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.2+commit.661d1103\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"message\",\"type\":\"bytes32\"}],\"name\":\"LogDebug\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"m\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"r\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"s\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"pk\",\"type\":\"uint256\"}],\"name\":\"Verify\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"_computeMerklePath\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"_nodes\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getFeildPrimeBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getGeneratorBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getIssuerPk\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getMerklePath\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"x\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"y\",\"type\":\"bytes32\"}],\"name\":\"hash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"credential\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"r\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"s\",\"type\":\"uint256\"}],\"name\":\"issueDID\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"credential\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"r\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"s\",\"type\":\"uint256\"}],\"name\":\"revokeDID\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/BaseDID.sol\":\"BaseDID\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/BaseDID.sol\":{\"keccak256\":\"0xd08b80869ff07c34a86c27a3fd32a0366f1523fd008de45ff71b98d49cbb3e7d\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://d318a46101360d67c214e9fb52807836781dce1d9cbe38303261f745ecec77ce\",\"dweb:/ipfs/QmaF3N1KVEy9prrzUF4CSUJuqMVo1rTv87KQQPRHy7f2YY\"]},\"project:/contracts/BaseMerkleTree.sol\":{\"keccak256\":\"0xab27c6e27e71d576aff6f1905733c87f47c2434e625941d5e5c95048797b546a\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://3fd0ddec089c6aaf70aabba23bfbfc0add328611fdb96663532a866a2b7f1d02\",\"dweb:/ipfs/QmTtB6kH4PPPJLFzKn4iF4Zt2ENbFbFtRUPy4syBD836FQ\"]},\"project:/contracts/BigNumbers.sol\":{\"keccak256\":\"0x7cde807af1d267e0d8216282295bc28be926a77d0a974c194e989038ff887571\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3cf074eaf1f7672df78d73160e5d6213f4126df8bf811f0ff3b0855a9cce6592\",\"dweb:/ipfs/QmdjEgHJ7ojuDiQnQMx42zzrfUABKjopPLUNybyLUhxkZC\"]},\"project:/contracts/MiMC7.sol\":{\"keccak256\":\"0x6699f15f4ecd06e19e2263c96367069906f77d78b734833cea21e0448e07ea29\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://aa4a3451df04180559d204a9669de06fd147533a27edfa2a4051539488836497\",\"dweb:/ipfs/QmZUNUrNDPATwMPW5cDQ2qh7cMVyrW5xaGedsf5Mrex2PW\"]},\"project:/contracts/VerifySchnorr.sol\":{\"keccak256\":\"0xfebd61efc8ab80468807fffb34e7f92975a4ff2900056d5a39c681311f2d213c\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://d93b821684d76255720c1fbf62e63a0e6af104417a059da8190f726418cf372d\",\"dweb:/ipfs/QmNyN8vs5kkd6RfY5pYr676LPY6drBtqTfLy7tpeQo5Syx\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: LGPL-3.0+\npragma solidity ^0.8.2;\n\nimport \"./BaseMerkleTree.sol\";\nimport \"./VerifySchnorr.sol\";\n\nabstract contract BaseDID is BaseMerkleTree, VerifySchnorr {\n        // contract deployer's pk : 정부의 pk\n        uint256 private _issuerPk;\n\n        constructor(uint256 issuerPk, uint256 g, uint256 p, uint256 depth, uint256 hash_type)\n                BaseMerkleTree(depth, hash_type)\n                VerifySchnorr(p,g)\n        {\n                _issuerPk = issuerPk;\n        }\n\n        function issueDID (\n                uint256 credential,\n                uint256 r,\n                uint256 s\n        ) payable public {\n                require(Verify(credential, r, s, _issuerPk), \"invalid signature\");\n\n                _insert(bytes32(credential));\n                _recomputeRoot(1);\n        }\n\n        function revokeDID(\n                uint256 credential,\n                uint256 r,\n                uint256 s\n        ) payable public {\n                require(Verify(credential, r, s, _issuerPk), \"invalid signature\");\n\n                // TODO\n                // use nullifier or delete from merkleTree\n                \n        }\n\n        function getMerklePath(uint256 index) public view returns (uint256[] memory) {\n                bytes32[] memory merkle_path_bytes =  _computeMerklePath(index);\n                uint256[] memory merkle_path = new uint256[](_DEPTH);\n\n                for (uint256 i=0; i < merkle_path_bytes.length; i++) {\n                        merkle_path[i] = uint256(merkle_path_bytes[i]);\n                }\n                \n                return merkle_path;\n        }\n\n        function getIssuerPk() view public returns(uint256) {\n                return _issuerPk;\n        }\n}",
  "sourcePath": "/Users/kim/DID-dev/DIDcontracts/contracts/BaseDID.sol",
  "ast": {
    "absolutePath": "project:/contracts/BaseDID.sol",
    "exportedSymbols": {
      "BaseDID": [
        150
      ],
      "BaseMerkleTree": [
        606
      ],
      "BigNumber": [
        615
      ],
      "BigNumbers": [
        2600
      ],
      "MiMC7": [
        2615
      ],
      "VerifySchnorr": [
        2824
      ]
    },
    "id": 151,
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
        "scope": 151,
        "sourceUnit": 607,
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
        "scope": 151,
        "sourceUnit": 2825,
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
              "referencedDeclaration": 606,
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
              "referencedDeclaration": 2824,
              "src": "170:13:0"
            },
            "id": 7,
            "nodeType": "InheritanceSpecifier",
            "src": "170:13:0"
          }
        ],
        "contractDependencies": [
          606,
          2824
        ],
        "contractKind": "contract",
        "fullyImplemented": false,
        "id": 150,
        "linearizedBaseContracts": [
          150,
          2824,
          606
        ],
        "name": "BaseDID",
        "nameLocation": "143:7:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9,
            "mutability": "mutable",
            "name": "_issuerPk",
            "nameLocation": "259:9:0",
            "nodeType": "VariableDeclaration",
            "scope": 150,
            "src": "243:25:0",
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
              "src": "243:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 34,
              "nodeType": "Block",
              "src": "457:49:0",
              "statements": [
                {
                  "expression": {
                    "id": 32,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 30,
                      "name": "_issuerPk",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9,
                      "src": "475:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 31,
                      "name": "issuerPk",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "487:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "475:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33,
                  "nodeType": "ExpressionStatement",
                  "src": "475:20:0"
                }
              ]
            },
            "id": 35,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 22,
                    "name": "depth",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17,
                    "src": "396:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "id": 23,
                    "name": "hash_type",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 19,
                    "src": "403:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 24,
                "modifierName": {
                  "id": 21,
                  "name": "BaseMerkleTree",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 606,
                  "src": "381:14:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "381:32:0"
              },
              {
                "arguments": [
                  {
                    "id": 26,
                    "name": "p",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 15,
                    "src": "444:1:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "id": 27,
                    "name": "g",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13,
                    "src": "446:1:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 28,
                "modifierName": {
                  "id": 25,
                  "name": "VerifySchnorr",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2824,
                  "src": "430:13:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "430:18:0"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11,
                  "mutability": "mutable",
                  "name": "issuerPk",
                  "nameLocation": "299:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "291:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13,
                  "mutability": "mutable",
                  "name": "g",
                  "nameLocation": "317:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "309:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15,
                  "mutability": "mutable",
                  "name": "p",
                  "nameLocation": "328:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "320:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "320:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17,
                  "mutability": "mutable",
                  "name": "depth",
                  "nameLocation": "339:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "331:13:0",
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
                    "src": "331:7:0",
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
                  "name": "hash_type",
                  "nameLocation": "354:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "346:17:0",
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
                    "src": "346:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "290:74:0"
            },
            "returnParameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "457:0:0"
            },
            "scope": 150,
            "src": "279:227:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 65,
              "nodeType": "Block",
              "src": "650:176:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 46,
                            "name": "credential",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37,
                            "src": "683:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 47,
                            "name": "r",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39,
                            "src": "695:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 48,
                            "name": "s",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41,
                            "src": "698:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 49,
                            "name": "_issuerPk",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9,
                            "src": "701:9:0",
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
                          "id": 45,
                          "name": "Verify",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2805,
                          "src": "676:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256,uint256,uint256,uint256) view returns (bool)"
                          }
                        },
                        "id": 50,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "676:35:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "696e76616c6964207369676e6174757265",
                        "id": 51,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "713:19:0",
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
                      "id": 44,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "668:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 52,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "668:65:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 53,
                  "nodeType": "ExpressionStatement",
                  "src": "668:65:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 57,
                            "name": "credential",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37,
                            "src": "768:10:0",
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
                          "id": 56,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "760:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 55,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "760:7:0",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 58,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "760:19:0",
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
                      "id": 54,
                      "name": "_insert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 319,
                      "src": "752:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 59,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "752:28:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60,
                  "nodeType": "ExpressionStatement",
                  "src": "752:28:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "31",
                        "id": 62,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "813:1:0",
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
                      "id": 61,
                      "name": "_recomputeRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 373,
                      "src": "798:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (uint256) returns (bytes32)"
                      }
                    },
                    "id": 63,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "798:17:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 64,
                  "nodeType": "ExpressionStatement",
                  "src": "798:17:0"
                }
              ]
            },
            "functionSelector": "52a978f9",
            "id": 66,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "issueDID",
            "nameLocation": "525:8:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37,
                  "mutability": "mutable",
                  "name": "credential",
                  "nameLocation": "560:10:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "552:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "552:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "596:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "588:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "588:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "623:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "615:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "615:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "534:100:0"
            },
            "returnParameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "650:0:0"
            },
            "scope": 150,
            "src": "516:310:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 85,
              "nodeType": "Block",
              "src": "970:195:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 77,
                            "name": "credential",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 68,
                            "src": "1003:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 78,
                            "name": "r",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "1015:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 79,
                            "name": "s",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 72,
                            "src": "1018:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 80,
                            "name": "_issuerPk",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9,
                            "src": "1021:9:0",
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
                          "id": 76,
                          "name": "Verify",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2805,
                          "src": "996:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256,uint256,uint256,uint256) view returns (bool)"
                          }
                        },
                        "id": 81,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "996:35:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "696e76616c6964207369676e6174757265",
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1033:19:0",
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
                      "id": 75,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "988:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "988:65:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "988:65:0"
                }
              ]
            },
            "functionSelector": "5a29d527",
            "id": 86,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "revokeDID",
            "nameLocation": "845:9:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 73,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68,
                  "mutability": "mutable",
                  "name": "credential",
                  "nameLocation": "880:10:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "872:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "872:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 70,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "916:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "908:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 69,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "908:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 72,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "943:1:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "935:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "935:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "854:100:0"
            },
            "returnParameters": {
              "id": 74,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "970:0:0"
            },
            "scope": 150,
            "src": "836:329:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 140,
              "nodeType": "Block",
              "src": "1252:377:0",
              "statements": [
                {
                  "assignments": [
                    98
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 98,
                      "mutability": "mutable",
                      "name": "merkle_path_bytes",
                      "nameLocation": "1287:17:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 140,
                      "src": "1270:34:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 96,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "1270:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 97,
                        "nodeType": "ArrayTypeName",
                        "src": "1270:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 102,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 100,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 88,
                        "src": "1327:5:0",
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
                      "id": 99,
                      "name": "_computeMerklePath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 562,
                      "src": "1308:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) view returns (bytes32[] memory)"
                      }
                    },
                    "id": 101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1308:25:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1270:63:0"
                },
                {
                  "assignments": [
                    107
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 107,
                      "mutability": "mutable",
                      "name": "merkle_path",
                      "nameLocation": "1368:11:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 140,
                      "src": "1351:28:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 105,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1351:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 106,
                        "nodeType": "ArrayTypeName",
                        "src": "1351:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 113,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 111,
                        "name": "_DEPTH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 155,
                        "src": "1396:6:0",
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
                      "id": 110,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "1382:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (uint256[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 108,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1386:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 109,
                        "nodeType": "ArrayTypeName",
                        "src": "1386:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      }
                    },
                    "id": 112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1382:21:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1351:52:0"
                },
                {
                  "body": {
                    "id": 136,
                    "nodeType": "Block",
                    "src": "1475:91:0",
                    "statements": [
                      {
                        "expression": {
                          "id": 134,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 125,
                              "name": "merkle_path",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 107,
                              "src": "1501:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 127,
                            "indexExpression": {
                              "id": 126,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 115,
                              "src": "1513:1:0",
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
                            "src": "1501:14:0",
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
                                  "id": 130,
                                  "name": "merkle_path_bytes",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 98,
                                  "src": "1526:17:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                "id": 132,
                                "indexExpression": {
                                  "id": 131,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 115,
                                  "src": "1544:1:0",
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
                                "src": "1526:20:0",
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
                              "id": 129,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1518:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 128,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1518:7:0",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 133,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1518:29:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1501:46:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 135,
                        "nodeType": "ExpressionStatement",
                        "src": "1501:46:0"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 118,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 115,
                      "src": "1440:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 119,
                        "name": "merkle_path_bytes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 98,
                        "src": "1444:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "id": 120,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1444:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1440:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 137,
                  "initializationExpression": {
                    "assignments": [
                      115
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 115,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "1435:1:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 137,
                        "src": "1427:9:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 114,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1427:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 117,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 116,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1437:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1427:11:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1470:3:0",
                      "subExpression": {
                        "id": 122,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "1470:1:0",
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
                    "id": 124,
                    "nodeType": "ExpressionStatement",
                    "src": "1470:3:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "1422:144:0"
                },
                {
                  "expression": {
                    "id": 138,
                    "name": "merkle_path",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 107,
                    "src": "1607:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[] memory"
                    }
                  },
                  "functionReturnParameters": 93,
                  "id": 139,
                  "nodeType": "Return",
                  "src": "1600:18:0"
                }
              ]
            },
            "functionSelector": "6e4d6517",
            "id": 141,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getMerklePath",
            "nameLocation": "1184:13:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 88,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "1206:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 141,
                  "src": "1198:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 87,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1198:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1197:15:0"
            },
            "returnParameters": {
              "id": 93,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 141,
                  "src": "1234:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 90,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1234:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 91,
                    "nodeType": "ArrayTypeName",
                    "src": "1234:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1233:18:0"
            },
            "scope": 150,
            "src": "1175:454:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 148,
              "nodeType": "Block",
              "src": "1691:45:0",
              "statements": [
                {
                  "expression": {
                    "id": 146,
                    "name": "_issuerPk",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9,
                    "src": "1716:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 145,
                  "id": 147,
                  "nodeType": "Return",
                  "src": "1709:16:0"
                }
              ]
            },
            "functionSelector": "f5c4b64b",
            "id": 149,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getIssuerPk",
            "nameLocation": "1648:11:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 142,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1659:2:0"
            },
            "returnParameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 144,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 149,
                  "src": "1682:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1682:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1681:9:0"
            },
            "scope": 150,
            "src": "1639:97:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 151,
        "src": "125:1613:0"
      }
    ],
    "src": "38:1700:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.2+commit.661d1103.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.11",
  "updatedAt": "2023-04-20T02:56:21.634Z",
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