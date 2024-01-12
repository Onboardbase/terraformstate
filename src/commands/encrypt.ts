import {Command, Flags} from '@oclif/core'

import {encryptTfState} from '../helpers/tf.helper'

export default class Encrypt extends Command {
  static description = 'Encrypts a terraform.tfstate file'

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
    const {flags} = await this.parse(Encrypt)

    await encryptTfState(flags, this)
  }
}
