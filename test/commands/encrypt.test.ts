import {expect, test} from '@oclif/test'

describe('encrypt', () => {
  test
    .stdout()
    .command(['encrypt', '-f', './assets/terraform3.tfstate'])
    .it('runs encrypt', (ctx) => {
      expect(ctx.stdout).to.contain('./assets/terraform3.tfstate encrypted successfully')
    })

  // decrypt after encrypt
  test.stdout().command(['decrypt', '-f', './assets/terraform3.tfstate'])
})
