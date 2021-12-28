#!/usr/bin/env node
import { parseArgv } from './helpers/argv.js'
import { printHelp } from './services/log-service.js'

const initCLI = () => {
  const { h, s, t } = parseArgv(process.argv.slice(2))

  if (h) {
    printHelp()
  }

  if (s) {
  }

  if (t) {
  }
}

initCLI()
