import {getMachineID} from './machine-id'

export const getEcryptionKey = async (): Promise<string> => {
  let key = process.env.TF_STATE_ENC_KEY
  if (!key) {
    key = await getMachineID()
  }

  return key
}
