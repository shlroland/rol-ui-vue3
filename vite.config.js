import vitePluginVuedoc from 'vite-plugin-vuedoc'
export default {
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
      'dayjs/plugin/customParseFormat',
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
}
