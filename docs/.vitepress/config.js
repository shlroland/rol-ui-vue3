module.exports = {
  lang: 'zh-CN',
  title: 'Rol-UI', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'A UI Component Library based on Vue3.0', // meta 中的描述文字，用于SEO
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    repo: 'shlroland/rol-ui-vue3',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '开始', link: '/' },
      // { text: '组件', link: '/components' },
    ],
    // sidebar: {
    //   '/components/': getGuideSidebar(),
    // },
  },
}

function getGuideSidebar() {
  return [
    {
      text: '开发指南',
      children: [
        { text: 'What is VitePress?', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Asset Handling', link: '/guide/assets' },
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Deploying', link: '/guide/deploy' },
      ],
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Global Computed', link: '/guide/global-computed' },
        { text: 'Customization', link: '/guide/customization' },
      ],
    },
  ]
}

