/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { noElPrefixFile, toLine } = require('./common')

const outsideImport = /import .* from '..\/(.*?)\/src\/.*/

fs.copyFileSync(path.resolve(__dirname, '../typings/shims-vue.d.ts'), path.resolve(__dirname, '../lib/rol-ui.d.ts'))

const newIndexPath = path.resolve(__dirname, '../lib/index.d.ts')
fs.copyFileSync(path.resolve(__dirname, '../lib/rol-ui/index.d.ts'), newIndexPath)
const index = fs.readFileSync(newIndexPath)
const newIndex = index
  .toString()
  .replace(/@rol-ui\//g, './rol-')
  .replace('rol-utils', 'utils')

fs.writeFileSync(newIndexPath, newIndex)
// fs.rmdirSync(path.resolve(__dirname, '../lib/rol-ui'), { recursive: true })
// fs.rmdirSync(path.resolve(__dirname, '../lib/test-utils'), { recursive: true })

const libDirPath = path.resolve(__dirname, '../lib')
fs.readdirSync(libDirPath).forEach(comp => {
  if (!noElPrefixFile.test(comp)) {
    if (fs.lstatSync(path.resolve(libDirPath, comp)).isDirectory()) {
      const newCompName = `rol-${toLine(comp)}`
      fs.renameSync(path.resolve(libDirPath, comp), path.resolve(libDirPath, newCompName))
      const imp = fs.readFileSync(path.resolve(__dirname, '../lib', newCompName, 'index.d.ts')).toString()
      if (outsideImport.test(imp) || imp.includes('@rol-ui/')) {
        const newImp = imp
          .replace(outsideImport, (i, c) => {
            return i.replace(`../${c}`, `../rol-${c}`)
          })
          .replace('@rol-ui/', '../rol-')
        fs.writeFileSync(path.resolve(__dirname, '../lib', newCompName, 'index.d.ts'), newImp)
      }
    }
  }
})

fs.readdirSync(libDirPath).forEach(comp => {
  const srcPath = path.resolve(libDirPath, comp, './src')
  if (fs.existsSync(srcPath)) {
    if (fs.lstatSync(srcPath).isDirectory()) {
      fs.readdir(srcPath, 'utf-8', (err, data) => {
        if (err) return
        data.forEach(f => {
          if (!fs.lstatSync(path.resolve(srcPath, f)).isDirectory()) {
            const imp = fs.readFileSync(path.resolve(srcPath, f)).toString()
            if (imp.includes('@rol-ui/')) {
              const newImp = imp.replace(/@rol-ui\//g, '../../rol-')
              fs.writeFileSync(path.resolve(srcPath, f), newImp)
            }
          }
        })
      })
    }
  }
})
