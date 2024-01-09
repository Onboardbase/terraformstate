import {Command} from '@oclif/core'
import { greenBright } from 'colorette'
import {readFileSync, writeFileSync} from 'node:fs'

import {doesFileExist, encryptText, isValidJSONString} from '../utils'

export const encryptTfState = async (flags: {'enc-key'?: string; file?: string}, that: Command) => {
  const pathToFile = flags.file ?? './terraform.tfstate'

  if (doesFileExist(pathToFile) && pathToFile !== '-') {
    const fileContent = readFileSync(pathToFile, 'utf8')
    if (isValidJSONString(fileContent)) {
      const encryptedFile = await encryptText(JSON.stringify(fileContent), flags['enc-key'])
      writeFileSync(pathToFile, encryptedFile)
      that.log(`${greenBright(pathToFile)} encrypted successfully`)
    } else that.error(`Could not locate file: ${pathToFile}`)
  }
}
 
