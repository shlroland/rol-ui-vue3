import vitePluginVuedoc from 'vite-plugin-vuedoc'
import path from 'path'

export default {
  base: './',
  optimizeDeps: {
    include: [
      'dayjs',
      'dayjs/esm',
      'dayjs/plugin/localeData',
      'dayjs/plugin/isLeapYear',
      'dayjs/plugin/advancedFormat',
      'dayjs/plugin/weekOfYear',
      'dayjs/plugin/weekYear',
      'dayjs/plugin/isSameOrAfter',
      'dayjs/plugin/isSameOrBefore',
      'dayjs/esm/plugin/customParseFormat',
    ],
  },
  assetsDir: 'docs/assets',
  plugins: [
    vitePluginVuedoc({
      prism: {
        theme: 'okaidia',
      },
    }),
  ],
  alias: {
    '/@packages/': path.resolve(__dirname,'./packages'),
  },
}
