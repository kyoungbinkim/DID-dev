import _ from 'lodash';
import fs from 'fs';

const KeysJson  = JSON.parse(fs.readFileSync("/Users/kim/DID-dev/DIDcontracts/keys.json", 'utf-8'));
const AddressList  = _.keys(_.get(KeysJson, 'private_keys'))

function getAddress(idx=0) {
    try {
        return AddressList[idx]
    } catch (error) {
        return undefined
    }
}

function getPrivateKey(idx=0) {
    try {
        return _.get(_.get(KeysJson, 'private_keys'), getAddress(idx))
    } catch (error) {
        return undefined
    }
}

const Ganache = {
    getAddress,
    getPrivateKey
}

export default Ganache