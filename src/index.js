const os = require('os')
const { execSync } = require('child_process')

const inquirer = require('inquirer')
const chalk = require('chalk')

const choices = [
  {
    name: 'OS',
    shell: 'system_profiler SPSoftwareDataType |grep Version |sed "s/^ *//"',
  },
  {
    name: 'shell',
    shell: '$SHELL --version',
  },
  {
    name: 'node',
    shell: 'node --version',
  },
  {
    name: 'npm',
    shell: 'npm --version',
  },
  {
    name: 'yarn',
    shell: 'yarn --version',
  },
  {
    name: 'GoogleChrome',
    shell:
      '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --version',
  },
]

const choicesLib = choices.reduce((p, c) => ({ ...p, [c.name]: c }), {})

const main = async () => {
  if (os.platform() !== 'darwin') {
    throw new Error('No support platform. only Mac OS')
  }
  const questions = [
    {
      type: 'checkbox',
      name: 'items',
      message: 'choose what you want to print',
      choices,
    },
  ]
  const answers = await inquirer.prompt(questions)
  const selects = answers.items.map(v => choicesLib[v])

  selects.forEach(v => {
    console.log(v.name)
    console.log(chalk.gray(`$ ${v.shell}`))
    console.log(execSync(v.shell).toString())
  })
}

module.exports = main
