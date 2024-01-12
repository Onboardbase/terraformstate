terraformstate
=================

A CLI tool that helps you secure your terraform state files.
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Installation](#installation)
* [Running with npx](#running-with-npx)
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
npx terraformstate -f <path-to-terraform-state-file> -C "Terraform command to run"
```
Note: if you don't provide a `-f` flag, it will default to `.terraform.tfstate` file

# Usage
<!-- usage -->
```sh-session
$ npm install -g terraformstate

$ terraformstate --version
terraformstate/0.0.4 darwin-arm64 node-v18.16.0

$ terraformstate --help [COMMAND]
USAGE
  $ terraformstate COMMAND
...
```
<!-- usagestop -->

# Documentation
The full documentation for the package is available here https://docs.terraformstate.com/docs/getting-started

# Commands
<!-- commands -->
- [terraformstate](#terraformstate)
- [Installation](#installation)
- [Running with npx](#running-with-npx)
- [Usage](#usage)
- [Documentation](#documentation)
- [Commands](#commands)
  - [`terraformstate decrypt`](#terraformstate-decrypt)
  - [`terraformstate encrypt`](#terraformstate-encrypt)
  - [`terraformstate help [COMMANDS]`](#terraformstate-help-commands)
  - [`terraformstate run [COMMAND]` \[This is the default Command\]](#terraformstate-run-command-this-is-the-default-command)

## `terraformstate decrypt`

Decrypts an encrypted terraform.tfstate file

```
USAGE
  $ terraformstate decrypt [--enc-key <value>] [-f <value>] [-h]

FLAGS
  -f, --file=<value>  Path to file
  -h, --help          Show CLI help.
  --enc-key=<value>   Encryption Key

DESCRIPTION
  Decrypts an encrypted terraform.tfstate file
```

_See code: [src/commands/decrypt.ts](https://github.com/Onboardbase/terraformstate/blob/v0.0.4/src/commands/decrypt.ts)_

## `terraformstate encrypt`

Encrypts a terraform.tfstate file

```
USAGE
  $ terraformstate encrypt [--enc-key <value>] [-f <value>] [-h]

FLAGS
  -f, --file=<value>  Path to file
  -h, --help          Show CLI help.
  --enc-key=<value>   Encryption Key

DESCRIPTION
  Encrypts a terraform.tfstate file
```

_See code: [src/commands/encrypt.ts](https://github.com/Onboardbase/terraformstate/blob/v0.0.4/src/commands/encrypt.ts)_

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

## `terraformstate run [COMMAND]` [This is the default Command]

Execute a Terraform command and encrypt the state file afterwards

```
USAGE
  $ terraformstate run [COMMAND] [-C <value>] [--enc-key <value>] [-f <value>] [-h]

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
  $ terraformstate run -f ./terraform.tfstate -C "terraform plan"
```

_See code: [src/commands/run.ts](https://github.com/Onboardbase/terraformstate/blob/v0.0.4/src/commands/run.ts)_
<!-- commandsstop -->
