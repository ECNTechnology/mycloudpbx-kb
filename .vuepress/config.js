const getChildren = require('./childScript')

module.exports = {
  title: 'ECN Technology  |  Knowledge Base',
  description: '',
  plugins: ['@vuepress/back-to-top'],
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  themeConfig: {
    logo: '/images/logo.png',
    nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'Knowledge Base',
      items: [{
        text: 'Business SIP',
        link: '/guides/business-sip/'
      },
      {
        text: 'PBX',
        link: '/guides/pbx/'
      },
      {
        text: 'Internet',
        link: '/guides/internet/'
      },
      {
        text: 'Inbound 1300',
        link: '/guides/inbound-1300/'
      },
      {
        text: 'Email',
        link: '/guides/email/'
      }
      ]
    },
    {
      text: 'Contact us',
      link: 'https://www.ecn.net.au/Contact/'
    },
    ],
    sidebar: {
      '/guides/business-sip/': [{
        title: 'Business SIP',
        children: getChildren('./guides/business-sip/')
      }],
      '/guides/pbx/': [{
        title: 'PBX',
        children: getChildren('./guides/pbx/')
      }],
      '/guides/internet/': [{
        title: 'Internet',
        children: getChildren('./guides/internet/')
      }],
      '/guides/inbound-1300/': [{
        title: 'Inbound 1300',
        children: getChildren('./guides/inbound-1300/')
      }],
      '/guides/email/': [{
        title: 'Email',
        children: getChildren('./guides/email/')
      }],
    },
    activeHeaderLinks: true,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated:', // string | boolean
  },
};