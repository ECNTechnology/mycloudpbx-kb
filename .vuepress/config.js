const getChildren = require('./childScript')

module.exports = {
  title: 'ECN Technology  |  Knowledge Base',
  description: '',
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/google-analytics',
      {
        'ga': 'UA-107905087-6' // UA-00000000-0
      }
  ],
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
        text: 'myCloudPBX',
        link: '/guides/mycloudpbx/'
      },
      {
        text: 'Internet Services',
        link: '/guides/internet-services/'
      },
      {
        text: 'Inbound 1300',
        link: '/guides/inbound-1300/'
      },
      {
        text: 'Email Services',
        link: '/guides/email-services/'
      },
      {
        text: 'Cloud Dial',
        link: '/guides/cloud-dial/'
      }
      ]
    },
    {
      text: 'ECN Website',
      link: 'https://www.ecn.net.au'
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
      '/guides/mycloudpbx/': [{
        title: 'myCloudPBX',
        children: getChildren('./guides/mycloudpbx/')
      }],
      '/guides/internet-services/': [{
        title: 'Internet Services',
        children: getChildren('./guides/internet-services/')
      }],
      '/guides/inbound-1300/': [{
        title: 'Inbound 1300',
        children: getChildren('./guides/inbound-1300/')
      }],
      '/guides/email-services/': [{
        title: 'Email Services',
        children: getChildren('./guides/email-services/')
      }],
      '/guides/cloud-dial/': [{
        title: 'Cloud Dial',
        children: getChildren('./guides/cloud-dial/')
      }],
    },
    activeHeaderLinks: true,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated:', // string | boolean
  },
};