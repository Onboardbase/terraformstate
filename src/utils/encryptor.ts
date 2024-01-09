/* eslint-disable import/namespace */
import * as CryptoJS from 'crypto-js'

import {getMachineID} from './machine-id'

export const decryptText = async (text: string, passphrase?: string): Promise<{[key: string]: unknown} | string> => {
  const encryptionPassphrase = passphrase ?? (await getMachineID())
  const decrypted = CryptoJS.AES.decrypt(text, encryptionPassphrase).toString(CryptoJS.enc.Utf8)

  return JSON.parse(decrypted)
}

export const encryptText = async (secrets: string, passphrase?: string): Promise<string> => {
  const encryptionPassphrase = await getMachineID()
  const bytes = CryptoJS.AES.encrypt(secrets, passphrase || encryptionPassphrase)
  return bytes.toString()
}
