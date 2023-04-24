import Web3Interface from "./web3.interface";
import Ganache from "./ganache";
import BaseDIDJson from "./BaseDIDJson";
import _ from 'lodash';
import fs from "fs";

export default class DIDcontracts extends Web3Interface {
    constructor(
        endPoint, 
        issuerPk,
        contractAddr=undefined,
    ) {
        super(endPoint);        
        

        this.instance = new this.eth.Contract(_.get(BaseDIDJson, 'abi'), this.contractAddr);
        this.contractMethod  = this.instance.methods;
        this.localContractCall(
            this.contractMethod.getIssuerPk()
        )
    }

    static deploy(
        deployerAddr,
        deployerPrivKey,
        gasPrice = '0x01'
    ) {        
        this.sendDeployTransaction(
            deployerAddr,
            deployerPrivKey,
            _.get(BaseDIDJson, 'abi'),
            _.get(BaseDIDJson, 'bytecode'),
            gasPrice,
            [issuerPk]
        )
    }
}