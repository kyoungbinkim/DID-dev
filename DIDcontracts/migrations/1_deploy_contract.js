const BigNumbersLib = artifacts.require("BigNumbers");
const MiMC7Lib = artifacts.require("MiMC7");
const VerifySchnorr = artifacts.require("VerifySchnorr");

console.log("1_deploy_contracts");
module.exports = function(deployer) {
  deployer.deploy(BigNumbersLib);
  deployer.deploy(MiMC7Lib);
  deployer.link(BigNumbersLib, VerifySchnorr);
  deployer.link(MiMC7Lib, VerifySchnorr);
  deployer.deploy(
    VerifySchnorr, 
    "21888242871839275222246405745257275088548364400416034343698204186575808495617",
    "10398164868948269691505217409040279103932722394566360325611713252123766059173"
  );
};