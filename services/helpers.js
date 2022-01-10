export const createUrl = (token, city, lang) => {
  // const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  const url = new URL('https://api.openweathermap.org/data/2.5/weather')

  url.searchParams.append('q', city)

  url.searchParams.append('appid', token)

  url.searchParams.append('lang', lang)

  url.searchParams.append('units', 'metric')

  return url
}
