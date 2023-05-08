import Web3Interface from "./web3.interface";
import Ganache from "./ganache";
import BaseDIDJson from "./BaseDIDJson";
import Web3 from "web3";
import _ from 'lodash';
import fs from "fs";

export default class DIDcontracts extends Web3Interface {

    #deployerAddr = undefined
    #deployerPriveKey = undefined

    constructor(
        endPoint, 
        contractAddr,
    ) {
        super(endPoint);        
        
        this.instance = new this.eth.Contract(_.get(BaseDIDJson, 'abi'), contractAddr);
        this.contractMethods  = this.instance.methods;
        this.localContractCall(
            this.contractMethod.getIssuePk()
        )
    }
}

/**
 * 
 * @param {String} endPoint : web Provider 
 * @param {String} deployerAddr : deployer address hex string
 * @param {String} deployerPrivKey : privKey to sign Tx
 * @param {String} issuePk      : issue pk demical string
 * @param {String} revokePk     : revoke pk demical string
 * @param {String} gasPrice     : hex string 
 * @returns 
 */
export async function deployDIDcontract(
    endPoint,
    deployerAddr,
    deployerPrivKey,
    issuePk,
    revokePk,
    gasPrice = '0x01'
) {
    const web3 = new Web3(endPoint);
    const instantiate = new web3.eth.Contract(abi);
    const deployTransaction = instantiate.deploy({
        data: bytecode,
        arguments: args,
    })

    const signedTx = await web3.eth.accounts.signTransaction({
        from: deployerAddr,
        data: deployTransaction.encodeABI(),
        gas: await deployTransaction.estimateGas(),
        gasPrice: gasPrice
    }, deployerPrivKey);

    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    return receipt.contractAddress
}