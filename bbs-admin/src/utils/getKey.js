import JSEncrypt from "jsencrypt";

export function getEncryptor(data) {
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(data)
  return encrypt
}

