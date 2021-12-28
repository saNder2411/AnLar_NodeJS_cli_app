import { homedir } from 'os'
import { join } from 'path'

const filePath = join(homedir(), 'weather-data.json')

export const save = (key, value) => {
  console.log(filePath)
}
