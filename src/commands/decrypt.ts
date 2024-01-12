import {Command, Flags} from '@oclif/core'
import {readFileSync, writeFileSync} from 'node:fs'

import {decryptText, doesFileExist, isValidJSONString} from '../utils'

import chalk = require('chalk')

export default class Decrypt extends Command {
  static description = 'Decrypts an encrypted terraform.tfstate file'

  static flags = {
    'enc-key': Flags.string({
      description: 'Encryption Key',
      required: false,
    }),
    file: Flags.string({
      char: 'f',
      description: 'Path to file',
      required: false,
    }),
    help: Flags.help({char: 'h'}),
  }

  async run() {
    const {flags} = await this.parse(Decrypt)

    const pathToFile = flags.file ?? './terraform.tfstate'
    if (doesFileExist(pathToFile) || pathToFile === '-') {
      let fileContent

      if (pathToFile === '-') {
        const stdin = readFileSync(0, 'utf8')
        fileContent = stdin
      } else fileContent = readFileSync(pathToFile, 'utf8')

      if (!isValidJSONString(fileContent)) {
        const decryptedContents = await decryptText(fileContent, flags['enc-key'])
        writeFileSync(
          pathToFile === '-' ? './terraform.tfstate' : pathToFile,
          JSON.parse(JSON.stringify(decryptedContents)),
        )
      }
    } else this.error(`Could not locate file: ${pathToFile}`)

    console.log(chalk.greenBright('TF State file decrypted successfully.'))
  }
}
