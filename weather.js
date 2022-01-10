#!/usr/bin/env node
import { parseArgv } from './helpers/index.js'
import {
  printHelp,
  printSuccess,
  printError,
  printForecast,
  saveValueByKey,
  getValueByKey,
  TokenDictionary,
  getWeather,
  getIcon,
} from './services/index.js'

const save = async (valueKey, value) => {
  if (!value.length) return printError(`The ${valueKey} is not correct`)

  try {
    await saveValueByKey(valueKey, value)
    printSuccess(`The ${valueKey}  was saved!`)
  } catch (err) {
    printError(`On save ${valueKey} Error: ${err.message}`)
  }
}

const getForecast = async () => {
  const city = process.env.CITY ?? (await getValueByKey(TokenDictionary.city))
  console.log('city', city)

  try {
    const forecast = await getWeather(city, 'ru')

    printForecast(forecast, getIcon(forecast.weather[0].icon))
  } catch (err) {
    switch (err?.response?.status) {
      case 404:
        return printError('City is not correct')
      case 401:
        return printError('Token is not valid')
      default:
        return printError(err.message)
    }
  }
}

const initCLI = async () => {
  const { h, s, t } = parseArgv(process.argv.slice(2))

  if (h) return printHelp()

  if (s) return save(TokenDictionary.city, s)

  if (t) return save(TokenDictionary.token, t)

  return getForecast()
}

initCLI()
