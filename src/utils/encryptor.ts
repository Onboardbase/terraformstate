/* eslint-disable import/namespace */
import * as CryptoJS from 'crypto-js'

import {getEcryptionKey} from './get-enc-key'

export const decryptText = async (text: string, passphrase?: string): Promise<{[key: string]: unknown} | string> => {
  try {
    const encryptionPassphrase = passphrase ?? (await getEcryptionKey())
    const decrypted = CryptoJS.AES.decrypt(text, encryptionPassphrase).toString(CryptoJS.enc.Utf8)

    return JSON.parse(decrypted)
  } catch {
    const msg = 'an error decrypting text. The encryption key might be incorrect or the text has been malformed'
    throw new Error(msg)
  }
}

export const encryptText = async (secrets: string, passphrase?: string): Promise<string> => {
  const encryptionPassphrase = await getEcryptionKey()
  const bytes = CryptoJS.AES.encrypt(secrets, passphrase || encryptionPassphrase)
  return bytes.toString()
}
