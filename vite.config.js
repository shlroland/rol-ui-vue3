import vitePluginVuedoc from 'vite-plugin-vuedoc'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default {
  build: {
    base: './',
    assetsDir: 'docs/assets',
  },
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
  plugins: [
    vitePluginVuedoc({
      prism: {
        theme: 'one-dark',
      },
    }),
    vue(),
  ],
  alias: {
    '/@packages': path.resolve(__dirname, './packages'),
  },
}
