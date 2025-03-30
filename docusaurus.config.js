// @ts-check
// SPDX-License-Identifier: CC-BY-SA-4.0

const config = {
  title: 'FreeFlow Documentation',
  tagline: 'The Open Network for EVSE, Carbon Credits, and Contributor Profit Sharing',
  url: 'https://docs.onfreeflow.com', // <-- your custom domain
  baseUrl: '/',
  favicon: 'assets/favicon.ico',

  organizationName: 'onfreeflow', // GitHub org/user
  projectName: 'docs',            // GitHub repo name

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
          routeBasePath: '/', // Docs are served at the site root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/onfreeflow/docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./assets/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'FreeFlow',
      logo: {
        alt: 'FreeFlow Logo',
        src: 'assets/logo.png', // Replace with your logo
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
            { label: 'Business Plan', to: '/docs/FF-DOC-001-business-plan' },
            { label: 'Profit Expectations', to: '/docs/FF-DOC-002-profit-expectations' },
            { label: 'Contributor Guide', to: '/CONTRIBUTORS' },
            { label: 'Governance', to: '/docs/FF-DOC-007-governance' },
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
            { label: 'Terms of Service', to: '/docs/FF-DOC-005-terms-of-service' },
            { label: 'License', to: '/license' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FreeFlow`,
    },
  },
};

module.exports = config;
