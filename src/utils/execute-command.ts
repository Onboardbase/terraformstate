import {ChildProcess, spawn} from 'node:child_process'

export function executeCommandInChildProcess(input: {
  command: string
  envs: {[key: string]: string | undefined}
}): ChildProcess {
  const {command, envs} = input
  const daemon = spawn(command, {
    cwd: process.cwd(),
    env: Object.assign(envs, {FORCE_COLOR: true}),
    shell: true,
    stdio: 'inherit',
    windowsHide: false,
  })

  return daemon
}
