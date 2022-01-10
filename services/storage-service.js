import { readFile, stat, writeFile } from 'fs/promises'
import { homedir } from 'os'
import { join } from 'path'

const filePath = join(homedir(), 'weather-data.json')

export const TokenDictionary = { token: 'token', city: 'city' }

export const saveValueByKey = async (key, value) => {
  if (await isExist(filePath)) {
    const file = await readFile(filePath)

    return await writeFile(filePath, JSON.stringify({ ...JSON.parse(file), [key]: value }))
  }

  return await writeFile(filePath, JSON.stringify({ [key]: value }))
}

export const getValueByKey = async (key) => {
  if (await isExist(filePath)) {
    const file = await readFile(filePath)
    return JSON.parse(file)[key]
  }

  return ''
}

const isExist = async (path) => {
  try {
    await stat(path)
    return true
  } catch (err) {
    return false
  }
}
