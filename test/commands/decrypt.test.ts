import {expect, test} from '@oclif/test'

describe('encrypt', () => {
  test
    .stdout()
    .command(['encrypt', '-f', './assets/terraform1.tfstate'])
    .command(['decrypt', '-f', './assets/terraform1.tfstate'])
    .it('runs decrypt', (ctx) => {
      expect(ctx.stdout).to.contain('TF State file decrypted successfully.')
    })
})
