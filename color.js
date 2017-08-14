const chalk = require("chalk")

function blue (text) {
  return(chalk.blue.bold(text))
}

function purple(text) {
  return(chalk.magenta.bold(text))
}

function green(text) {
  return(chalk.green.bold(text))
}

function red(text) {
  return(chalk.red.bold(text))
}

module.exports = {
  blue: blue,
  purple: purple,
  green: green,
  red: red
}
