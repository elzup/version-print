const cp = require('child_process')
const inquirer = require('inquirer')
const m = require('.')

jest.mock('inquirer')
jest.mock('child_process')

const spyLog = jest.spyOn(console, 'log')

spyLog.mockImplementation(x => x)

jest
  .spyOn(cp, 'execSync')
  .mockImplementation()
  .mockReturnValue(`stdout`)

test('snapshot', async () => {
  jest
    .spyOn(inquirer, 'prompt')
    .mockImplementation()
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
})
