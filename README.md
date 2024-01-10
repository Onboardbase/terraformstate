terraformstate
=================

A CLI tool that helps you secure your terraform state files.
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Installation
Installation with npm:
```sh-session
$ npm install -g terraformstate
```

# Running with npx
You can also run the CLI with npx without having to install it on your machine:
```sh-session
npx terraformstate tf -f <path-to-terraform-state-file> -C "Terraform command to run"
```
Note: if you don't provide a `-f` flag, it will default to `.terraform.tfstate` file

# Usage
<!-- usage -->
```sh-session
$ npm install -g terraformstate

# to see the list of commands run
$ terraformstate 

# to get more information about how to use a command run 
$ terraformstate --help [COMMAND]

USAGE
  $ terraformstate COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [Usage](#usage)
- [Commands](#commands)
  - [`terraformstate help [COMMANDS]`](#terraformstate-help-commands)
  - [`terraformstate tf [COMMAND]`](#terraformstate-tf-command)
  - [`terraformstate tf decrypt`](#terraformstate-tf-decrypt)
  - [`terraformstate tf encrypt`](#terraformstate-tf-encrypt)

# Examples
## Encrypting a terraform state file 

To encrypt a terraform state file run:
```sh-session
$ terraformstate tf:encrypt -f <path-to-terraform-state-file> 
```
Note: if you don't provide a `-f` flag, it will default to `.terraform.tfstate` file

## Running a terafform command 
`terraformstate` can run your terraform commands against your state file - whether it is encrypted or not.
If the state file is encrypted, terraformstate will decrypt it, run the command and encrypt it back. 

To execute a terraform command run:
```sh-session
$ terraformstate tf -f <path-to-terraform-state-file> -C "terraform plan"
```
Note: if you don't provide a `-f` flag, it will default to `.terraform.tfstate` file

## Decrypting a terraform state file
To decrypt a terraform state file run:
```sh-session
$ terraformstate tf:decrypt -f <path-to-terraform-state-file> 
```

For more information on how to supply encryption keys and manage your keys, read the docs here https://docs.terraformstate.com/docs/why-terraformstate

## `terraformstate help [COMMANDS]`

Display help for terraformstate.

```
USAGE
  $ terraformstate help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for terraformstate.
```

## `terraformstate tf:[COMMAND]`

Execute a Terraform command and encrypt the state file afterwards

```
USAGE
  $ terraformstate tf [COMMAND] [-C <value>] [--enc-key <value>] [-f <value>] [-h]

ARGUMENTS
  COMMAND  the command to run

FLAGS
  -C, --command=<value>  Terraform command to execute
  -f, --file=<value>     Path to terraforms state file
  -h, --help             Show CLI help.
  --enc-key=<value>      Encryption Key

DESCRIPTION
  Execute a Terraform command and encrypt the state file afterwards

EXAMPLES
  $ terraformstate tf
    tf -f ./terraform.tfstate -C "terraform plan"
```

_See code: [src/commands/tf/index.ts](https://github.com/Onboardbase/terraformstate/blob/v0.0.2/src/commands/tf/index.ts)_

## `terraformstate tf:decrypt`

Decrypts an encrypted terraform.tfstate file

```
USAGE
  $ terraformstate tf decrypt [--enc-key <value>] [-f <value>] [-h]

FLAGS
  -f, --file=<value>  Path to file
  -h, --help          Show CLI help.
  --enc-key=<value>   Encryption Key

DESCRIPTION
  Decrypts an encrypted terraform.tfstate file
```

_See code: [src/commands/tf/decrypt.ts](https://github.com/Onboardbase/terraformstate/blob/v0.0.2/src/commands/tf/decrypt.ts)_

## `terraformstate tf:encrypt`

Encrypts a terraform.tfstate file

```
USAGE
  $ terraformstate tf encrypt [--enc-key <value>] [-f <value>] [-h]

FLAGS
  -f, --file=<value>  Path to file
  -h, --help          Show CLI help.
  --enc-key=<value>   Encryption Key

DESCRIPTION
  Encrypts a terraform.tfstate file
```

_See code: [src/commands/tf/encrypt.ts](https://github.com/Onboardbase/terraformstate/blob/v0.0.2/src/commands/tf/encrypt.ts)_
<!-- commandsstop -->
