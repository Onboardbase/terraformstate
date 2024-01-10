/* eslint-disable unicorn/no-process-exit */
/* eslint-disable no-process-exit */
import {Args, Command, Flags} from '@oclif/core'
import {readFileSync, unlinkSync, writeFileSync} from 'node:fs'

import {encryptTfState} from '../../helpers/tf.helper'
import {decryptText, doesFileExist, isValidJSONString} from '../../utils'
import {executeCommandInChildProcess} from '../../utils/execute-command'

import ON_DEATH = require('death')

export default class Tf extends Command {
  static args = {
    command: Args.string({description: 'the command to run'}),
  }

  static description = 'Execute a Terraform command and encrypt the state file afterwards'

  static examples = [`<%= config.bin %> <%= command.id %>
  tf -f ./terraform.tfstate -C "terraform plan"
  `]

  static flags = {
    command: Flags.string({
      char: 'C',
      description: 'Terraform command to execute',
    }),
    'enc-key': Flags.string({
      description: 'Encryption Key',
      required: false,
    }),
    file: Flags.string({
      char: 'f',
      description: 'Path to terraforms state file',
      required: false,
    }),
    help: Flags.help({char: 'h'}),
  }

  public async run(): Promise<void> {
    // eslint-disable-next-line new-cap
    ON_DEATH(async () => {
      if (flags.file === '-') {
        unlinkSync('./terraform.tfstate')
      } else {
        await encryptTfState(flags, this)
        process.exit()
      }
    })

    const {args, flags} = await this.parse(Tf)
    const command = flags.command ?? args.command
    if (!command) this.error('Please specify a Terraform command to Execute')

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

    const daemon = executeCommandInChildProcess({command: command.trim(), envs: process.env})
    daemon.on('exit', async () => {
      try {
        if (flags.file === '-') {
          unlinkSync('./terraform.tfstate')
        } else {
          await encryptTfState(flags, this)
          process.exit()
        }
      } catch {
        process.exit(0)
      }
    })
  }
}
