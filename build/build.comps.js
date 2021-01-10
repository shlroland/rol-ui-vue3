/* eslint-disable */
const run = require('./build');
const { toLine } = require('./common')
const compPath = process.argv[2]
console.log('compPath',compPath)
if (!compPath) {
  console.error('Usage: node build.js [component]')
  process.exit(1)
}

const outPutPrefix = ['hooks', 'directives'].some((p) => compPath.includes(p)) ? '' : 'rol-';
const compName = toLine(compPath.split('/').pop())

run(`${outPutPrefix}${compName}/index.js`, compPath)
