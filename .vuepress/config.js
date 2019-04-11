var getChildren = require('./childScript')

module.exports = {
  title: 'ECN Technology',
  description: '',
  themeConfig: {
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
      '/docs/email/': [{
        title: 'Email',
        children: getChildren('./docs/email/')
      }],
      '/docs/business-sip/': [{
        title: 'Business SIP',
        children: getChildren('./docs/business-sip/')
      }],
      '/docs/pbx/': [{
        title: 'PBX',
        children: getChildren('./docs/pbx/')
      }]
    },
    displayAllHeaders: true,
    activeHeaderLinks: true
  },
};