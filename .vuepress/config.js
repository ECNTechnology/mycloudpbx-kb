const getChildren = require('./childScript')

module.exports = {
  title: 'myCloudPBX  |  Knowledge Base',
  description: '',
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-107905087-8' // UA-00000000-0
      }
    ],
  ],
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  themeConfig: {
    logo: '/images/mycloudpbx.png',
    nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'Guides',
      link: '/guides/mycloudpbx/'
    },
    ],
    sidebar: {
      '/guides/mycloudpbx/': [{
        title: 'myCloudPBX',
        children: getChildren('./guides/mycloudpbx/')
      }],
    },
    activeHeaderLinks: true,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated:', // string | boolean
  },
};