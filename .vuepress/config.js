var getChildren = require('./childScript')

module.exports = {
  title: '',
  description: '',
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    logo: '/images/logo.png',
    nav: [{
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