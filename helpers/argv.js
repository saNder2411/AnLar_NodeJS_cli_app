export const parseArgv = (argv) =>
  argv.reduce((params, arg, i, array) => {
    const nextArg = array[i + 1]

    const [firstSymbol, ...key] = arg

    return firstSymbol === '-' ? { ...params, [key]: nextArg && nextArg[0] !== '-' ? nextArg : true } : params
  }, {})
