import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import pkg from '../package.json'

const deps = Object.keys(pkg.dependencies)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vue = require('rollup-plugin-vue')

export default [
  {
    input: path.resolve(__dirname, '../packages/rol-ui/index.ts'),
    output: {
      format: 'es',
      file: 'lib/index.esm.js',
    },
    plugins: [
      terser(),
      nodeResolve(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false,
      }),
      typescript({
        tsconfigOverride: {
          include: ['packages/**/*', 'typings/shims-vue.d.ts'],
          exclude: ['node_modules', 'packages/**/__tests__/*','packages/**/doc/*'],
        },
        abortOnError: false,
      }),
    ],
    external(id) {
      return /^vue/.test(id) || deps.some(k => new RegExp('^' + k).test(id))
    },
  },
]
