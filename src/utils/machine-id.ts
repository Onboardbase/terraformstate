import {machineId} from 'node-machine-id'

export const getMachineID = async (): Promise<string> => machineId()
