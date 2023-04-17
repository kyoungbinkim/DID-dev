export default abi = {"abi" :[
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
  }
]}