#!/usr/bin/env node
import { parseArgv } from './helpers/index.js'
import { printHelp, printSuccess, printError, saveValueByKey } from './services/index.js'

const saveToken = async (token) => {
  try {
    await saveValueByKey('token', token)
    printSuccess('The token was saved!')
  } catch (err) {
    printError(`On Save Token Error: ${err.message}`)
  }
}

const initCLI = () => {
  const { h, s, t } = parseArgv(process.argv.slice(2))

  if (h) {
    printHelp()
  }

  if (s) {
  }

  if (t) {
    return saveToken(t)
  }
}

initCLI()
