import https from 'https'
import axios from 'axios'
import { getValueByKey, TokenDictionary } from './index.js'
import { createUrl } from './helpers.js'

export const getWeatherCustomHttps = async (city, lang) => {
  const token = await getValueByKey(TokenDictionary.token)

  if (!token) {
    throw new Error('Api key not setб ask it through the command: -t [API_KEY]')
  }

  const url = createUrl(token, city, lang)

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = ''

      res.on('data', (chunk) => (data += chunk))

      res.on('end', () => resolve(data))

      res.on('error', (err) => reject(err))
    })
  })
}

export const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case '01':
      return '☀️'
    case '02':
      return '🌤️'
    case '03':
      return '☁️'
    case '04':
      return '☁️'
    case '09':
      return '🌧️'
    case '10':
      return '🌦️'
    case '11':
      return '🌩️'
    case '13':
      return '❄️'
    case '50':
      return '🌫️'
  }
}

export const getWeather = async (city, lang) => {
  const token = process.env.TOKEN ?? (await getValueByKey(TokenDictionary.token))

  if (!token) {
    throw new Error('Api key not setб ask it through the command: -t [API_KEY]')
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: { q: city, appid: token, lang, units: 'metric' },
  })

  return data
}
