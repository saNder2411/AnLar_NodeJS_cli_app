#!/usr/bin/env node
import { parseArgv } from './helpers/index.js'
import { printHelp, save } from './services/index.js'

const initCLI = () => {
  const { h, s, t } = parseArgv(process.argv.slice(2))

  if (h) {
    printHelp()
  }

  if (s) {
  }

  if (t) {
    save('token', t)
  }
}

initCLI()
