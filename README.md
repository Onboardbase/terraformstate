# terraformstate

A CLI tool that helps you secure your terraform state files in minutes.

<!-- toc -->
- [terraformstate](#terraformstate)
- [Installation](#installation)
  - [npm](#npm)
  - [yarn](#yarn)
- [Running with npx](#running-with-npx)
- [Documentation](#documentation)

  
<!-- tocstop -->
# Installation
## npm
```bash
npm install -g terraformstate 
```

## yarn
```bash
yarn global add terraformstate
```

# Running with npx
You can also run the CLI with npx without having to install it on your machine:

```bash
npx terraformstate -f <path-to-terraform-state-file> -C "Terraform command to run"
```
Note: if you don't provide a `-f` flag, it will default to `.terraform.tfstate` file

# Documentation
The full documentation for the package is available here [getting started](https://docs.terraformstate.com/docs/getting-started)
