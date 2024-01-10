import {expect, test} from '@oclif/test'

describe('tf', () => {
  test
    .stdout()
    .command(['tf', '-f', './assets/terraform.tfstate', '-C', '"history"'])
    .it('runs tf with command', (ctx) => {
      expect(ctx.stdout).to.contain('./assets/terraform.tfstate encrypted successfully')
    })

})
