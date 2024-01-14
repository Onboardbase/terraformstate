# terraformstate

A CLI tool that helps you secure your terraform state files in minutes.

<!-- toc -->
* [Installation](#installation)
* [Running with npx](#running-with-npx)
* [Usage](#usage)

  
<!-- tocstop -->
# Installation

```sh-session
npm install -g terraformstate # yarn add terraformstate
```

# Running with npx
You can also run the CLI with npx without having to install it on your machine:

```sh-session
npx terraformstate -f <path-to-terraform-state-file> -C "Terraform command to run"
```
Note: if you don't provide a `-f` flag, it will default to `.terraform.tfstate` file

# Documentation
The full documentation for the package is available here [getting started](https://docs.terraformstate.com/docs/getting-started)
