import chalk from 'chalk';
import dedent from 'dedent-js';

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
