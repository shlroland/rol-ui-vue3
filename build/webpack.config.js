/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserWebpackPlugin = require('terser-webpack-plugin')

const libMode = process.env.LIBMODE
const isFullMode = libMode === 'full'
let externals = [
  {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
    },
  },
]

if (!isFullMode) {
  externals.push(
    {
      '@popperjs/core': '@popperjs/core',
      mitt: 'mitt',
      'resize-observer-polyfill': 'resize-observer-polyfill',
    },
    /^dayjs.*/,
    /^lodash.*/,
    /^@fortawesome.*/,
  )
}

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, '../packages/rol-ui/index.ts'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: isFullMode ? 'index.full.js' : 'index.js',
    libraryTarget: 'umd',
    library: 'RolUI',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  externals,
  plugins: [
    new VueLoaderPlugin(),
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
}

module.exports = config
