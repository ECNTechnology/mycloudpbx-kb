const getChildren = require('./childScript')

module.exports = {
  title: 'ECN Technology',
  description: '',
  logo: '/images/logo.png',
  footer: '© 1995 - 2019 ECN Pty Ltd.',
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'Knowledge Base',
      items: [{
        text: 'PBX',
        link: '/guides/pbx/'
      },
      {
        text: 'Business SIP',
        link: '/guides/business-sip/'
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
      '/guides/email/': [{
        title: 'Email',
        children: getChildren('./guides/email/')
      }],
      '/guides/business-sip/': [{
        title: 'Business SIP',
        children: getChildren('./guides/business-sip/')
      }],
      '/guides/pbx/': [{
        title: 'PBX',
        children: getChildren('./guides/pbx/')
      }]
    },
    activeHeaderLinks: true
  },
};