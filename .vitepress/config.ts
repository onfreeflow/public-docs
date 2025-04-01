import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FreeFlow Documentation',
  description: 'The Open Network for EVSE, Carbon Credits, and Contributor Profit Sharing',
  base: '/public-docs/', // required for gh-pages
  head: [['link', { rel: 'icon', href: '/public-docs/assets/favicon.ico' }]],
  themeConfig: {
    logo: '/assets/logo.png',
    nav: [
      { text: 'Business Plan', link: '/FF-DOC-001-business-plan' },
      { text: 'Profit Expectations', link: '/FF-DOC-002-profit-expectations' },
      { text: 'Contributor Guide', link: '/FF-DOC-006-contributor-guide' },
      { text: 'Governance', link: '/FF-DOC-007-governance' },
      { text: 'GitHub', link: 'https://github.com/onfreeflow' }
    ],
    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Business Plan', link: '/FF-DOC-001-business-plan' },
          { text: 'Profit Expectations', link: '/FF-DOC-002-profit-expectations' },
          { text: 'Contributor Guide', link: '/FF-DOC-006-contributor-guide' },
          { text: 'Governance', link: '/FF-DOC-007-governance' },
          { text: 'Terms of Service', link: '/FF-DOC-013-terms-of-service' },
          { text: 'License', link: '/LICENSE' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/onfreeflow' }
    ]
  }
})