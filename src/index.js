// @flow

import inquirer from 'inquirer'
import { execSync } from 'child_process'
import os from 'os'

type Profile = {
  name: string,
  shell: string,
}

const choices: Profile[] = [
  {
    name: 'OS',
    shell: 'system_profiler SPSoftwareDataType |grep Version |sed "s/^ *//"',
  },
  {
    name: 'GoogleChrome',
    shell:
      '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --version',
  },
]

const choicesLib: { [key: string]: Profile } = choices.reduce(
  (p, c) => ({ ...p, [c.name]: c }),
  {}
)

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
  const selects: Profile[] = answers.items.map(v => choicesLib[v])
  selects.forEach(v => {
    console.log(v.name)
    console.log(`$ ${v.shell}`)
    console.log(execSync(v.shell).toString())
  })
}

export default main
