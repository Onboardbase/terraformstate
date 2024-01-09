oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g terraformstate
$ terraformstate COMMAND
running command...
$ terraformstate (--version)
terraformstate/0.0.0 darwin-arm64 node-v18.17.0
$ terraformstate --help [COMMAND]
USAGE
  $ terraformstate COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`terraformstate hello PERSON`](#terraformstate-hello-person)
* [`terraformstate hello world`](#terraformstate-hello-world)
* [`terraformstate help [COMMANDS]`](#terraformstate-help-commands)
* [`terraformstate plugins`](#terraformstate-plugins)
* [`terraformstate plugins:install PLUGIN...`](#terraformstate-pluginsinstall-plugin)
* [`terraformstate plugins:inspect PLUGIN...`](#terraformstate-pluginsinspect-plugin)
* [`terraformstate plugins:install PLUGIN...`](#terraformstate-pluginsinstall-plugin-1)
* [`terraformstate plugins:link PLUGIN`](#terraformstate-pluginslink-plugin)
* [`terraformstate plugins:uninstall PLUGIN...`](#terraformstate-pluginsuninstall-plugin)
* [`terraformstate plugins reset`](#terraformstate-plugins-reset)
* [`terraformstate plugins:uninstall PLUGIN...`](#terraformstate-pluginsuninstall-plugin-1)
* [`terraformstate plugins:uninstall PLUGIN...`](#terraformstate-pluginsuninstall-plugin-2)
* [`terraformstate plugins update`](#terraformstate-plugins-update)

## `terraformstate hello PERSON`

Say hello

```
USAGE
  $ terraformstate hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/Onboardbase/terraformstate/blob/v0.0.0/src/commands/hello/index.ts)_

## `terraformstate hello world`

Say hello world

```
USAGE
  $ terraformstate hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ terraformstate hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/Onboardbase/terraformstate/blob/v0.0.0/src/commands/hello/world.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.9/src/commands/help.ts)_

## `terraformstate plugins`

List installed plugins.

```
USAGE
  $ terraformstate plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ terraformstate plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/index.ts)_

## `terraformstate plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ terraformstate plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ terraformstate plugins add

EXAMPLES
  $ terraformstate plugins add myplugin 

  $ terraformstate plugins add https://github.com/someuser/someplugin

  $ terraformstate plugins add someuser/someplugin
```

## `terraformstate plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ terraformstate plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ terraformstate plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/inspect.ts)_

## `terraformstate plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ terraformstate plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ terraformstate plugins add

EXAMPLES
  $ terraformstate plugins install myplugin 

  $ terraformstate plugins install https://github.com/someuser/someplugin

  $ terraformstate plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/install.ts)_

## `terraformstate plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ terraformstate plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ terraformstate plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/link.ts)_

## `terraformstate plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ terraformstate plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ terraformstate plugins unlink
  $ terraformstate plugins remove

EXAMPLES
  $ terraformstate plugins remove myplugin
```

## `terraformstate plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ terraformstate plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/reset.ts)_

## `terraformstate plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ terraformstate plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ terraformstate plugins unlink
  $ terraformstate plugins remove

EXAMPLES
  $ terraformstate plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/uninstall.ts)_

## `terraformstate plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ terraformstate plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ terraformstate plugins unlink
  $ terraformstate plugins remove

EXAMPLES
  $ terraformstate plugins unlink myplugin
```

## `terraformstate plugins update`

Update installed plugins.

```
USAGE
  $ terraformstate plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/update.ts)_
<!-- commandsstop -->
