import DIDcontracts from "./DIDcontract";
import issuer from "../issuer";
import Config from "../utils/config";

let Contracts = new DIDcontracts(Config.testProvider, issuer.pubKey.pk);

export default Contracts