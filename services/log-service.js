import chalk from 'chalk'
import dedent from 'dedent-js'

export const printError = (error) => {
  console.log(`${chalk.bgRed(' ERROR ')}: ${error}`)
}

export const printSuccess = (message) => {
  console.log(`${chalk.bgGreen(' SUCCESS ')}: ${message}`)
}

export const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Without params - display the weather
    -s [CITY]    for set city
    -t [API_KEY] for save token
    -h           for display help
  `
  )
}

export const printForecast = (forecast, icon) => {
  console.log(dedent`
  ${chalk.bgMagentaBright(' WEATHER ')} Weather in the city ${forecast.name} ${forecast.sys.country}
  ${icon}  ${forecast.weather[0].description}
  Temp: ${forecast.main.temp}. Feels like: ${forecast.main.feels_like}
  Humidity: ${forecast.main.humidity}%
  Windy: ${forecast.wind.speed}
  `)
}
