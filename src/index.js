// @flow

import inquirer from 'inquirer'

const main = async () => {
  const questions = [
    {
      type: 'checkbox',
      name: 'print items',
      message: 'choose what you want to print',
      choices: [{ name: 'os' }, { name: 'chrome' }],
    },
  ]
  const answers = await inquirer.prompt(questions)
}

module.exports = () => {
  main()
  return 'ok'
}
