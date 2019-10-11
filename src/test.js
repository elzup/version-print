// @flow
import cp from 'child_process'
import inquirer from 'inquirer'
import m from '.'

jest.mock('inquirer')
jest.mock('child_process')

const spyLog = jest.spyOn(console, 'log')
spyLog.mockImplementation(x => x)

cp.execSync = jest.fn().mockReturnValue(`stdout`)

test('snapshot', async () => {
  inquirer.prompt = jest
    .fn()
    .mockResolvedValue({ items: ['OS', 'GoogleChrome'] })
  await m()
  expect(spyLog.mock.calls).toMatchInlineSnapshot(`
Array [
  Array [
    "OS",
  ],
  Array [
    "[90m$ system_profiler SPSoftwareDataType |grep Version |sed \\"s/^ *//\\"[39m",
  ],
  Array [
    "stdout",
  ],
  Array [
    "GoogleChrome",
  ],
  Array [
    "[90m$ /Applications/Google\\\\ Chrome.app/Contents/MacOS/Google\\\\ Chrome --version[39m",
  ],
  Array [
    "stdout",
  ],
]
`)

  // expect(m('unicorn')).toMatchSnapshot()
})
