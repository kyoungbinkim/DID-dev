let _       = require('lodash');
let fs      = require('fs');
let process = require('process');
let exec    = require('node:child_process').exec;

const ALL = '0';
const ABI = '1';
const KEY = '2';

const copyAll =() => {
    copyAbi();
    copyKeys();
}

const copyAbi = () =>{
    try {
        // const abi = _.get( JSON.parse(fs.readFileSync('build/contracts/BaseDID.json').toString('utf-8')), 'abi');
        const abi = JSON.parse(fs.readFileSync('build/contracts/BaseDID.json'))
        fs.writeFileSync(
            '/Users/kim/DID-dev/src/web3/BaseDIDJson.js',
            'export default '+ JSON.stringify(abi,null, 2) 
        )
        
    } catch (error) {
        console.log(error);
        throw error;
    }
    
}

const copyKeys = () => {
    try {
        exec("cp ./keys.json /Users/kim/DID-dec/src/web3/", (err, stdout, stderr) =>{})
    } catch (error) {
        console.log(error);
        throw error;
    }
}


const cmd = process.argv[2];

if (cmd === ALL) { copyAll(); }
else if(cmd === ABI) { copyAbi(); }
else if(cmd === KEY) { copyKeys(); }
else{console.log('cmd num err');}