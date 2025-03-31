// @ts-check
// SPDX-License-Identifier: CC-BY-SA-4.0

const config = {
  title: 'FreeFlow Documentation',
  tagline: 'The Open Network for EVSE, Carbon Credits, and Contributor Profit Sharing',
  url: 'https://onfreeflow.github.io',
  baseUrl: '/public-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'FreeFlow',
  projectName: 'Public Documentation',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/onfreeflow/public-docs/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarCollapsed: false
        },
        theme: {
          customCss: require.resolve('./assets/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'FreeFlow Docs',
      logo: {
        alt: 'FreeFlow Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/', label: 'Docs', position: 'left' },
        { href: 'https://github.com/onfreeflow', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Business Plan', to: '/FF-DOC-001-business-plan' },
            { label: 'Profit Expectations', to: '/FF-DOC-002-profit-expectations' },
            { label: 'Contributor Guide', to: '/FF-DOC-012-contributors' },
            { label: 'Governance', to: '/FF-DOC-007-governance' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/onfreeflow' },
            { label: 'Open Network Project', href: 'https://github.com/onfreeflow/open-network' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Terms of Service', to: '/FF-DOC-005-terms-of-service' },
            { label: 'License', to: '/LICENSE' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FreeFlow`,
    },
  },
};

module.exports = config;
