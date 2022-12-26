import UserKey from "../wallet/keyStruct.js";
import math from "../utils/math.js";
import mimc from "../crypto/mimc.js";
import CurveParam from "../crypto/curveParam.js";
import FileSystem from "../utils/file.js";

describe("issue by issuer", ()=> {
  
  const userKey = UserKey.UserKey.keyGen();
  const didKey = UserKey.UserKey.keyGen();
  let r = math.randomFieldElement(CurveParam.prime).toString(16);
  let attr = "this is short description for the novel";
  let mimc7 = new mimc.MiMC7();

  let t = mimc7.hash(userKey.pk.pkEnc + FileSystem.utf8StringToHexString(attr) + r);
  console.log(t);
});