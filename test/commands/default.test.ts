import {expect, test} from '@oclif/test'

describe('encrypt', () => {
  test
    .stdout()
    .command(['run', '-f', './assets/terraform2.tfstate', '-C', 'terraform plan'])
    .it('runs default command', (ctx) => {
      expect(ctx.stdout).to.contain('./assets/terraform2.tfstate encrypted successfully')
    })

  // decrypt after encrypt
  test.stdout().command(['decrypt', '-f', './assets/terraform2.tfstate'])
})
