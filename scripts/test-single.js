const path = require('path')

const rawArgs = process.argv[2]
const testFile = process.argv[3] || ''
let rootDir = path.resolve(__dirname, '../', './packages', rawArgs)

const jestArgs = [
  '--runInBand',
  '--rootDir',
  rootDir, // 传入包路径
  testFile ? testFile : '', //
]

console.log(`\n===> running: jest ${jestArgs.join(' ')}`)

const jest = require('jest')
jest.run(jestArgs)
