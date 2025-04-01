import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/public-docs/__docusaurus/debug',
    component: ComponentCreator('/public-docs/__docusaurus/debug', '326'),
    exact: true
  },
  {
    path: '/public-docs/__docusaurus/debug/config',
    component: ComponentCreator('/public-docs/__docusaurus/debug/config', 'd28'),
    exact: true
  },
  {
    path: '/public-docs/__docusaurus/debug/content',
    component: ComponentCreator('/public-docs/__docusaurus/debug/content', '085'),
    exact: true
  },
  {
    path: '/public-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/public-docs/__docusaurus/debug/globalData', '8b9'),
    exact: true
  },
  {
    path: '/public-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/public-docs/__docusaurus/debug/metadata', '02d'),
    exact: true
  },
  {
    path: '/public-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/public-docs/__docusaurus/debug/registry', 'a72'),
    exact: true
  },
  {
    path: '/public-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/public-docs/__docusaurus/debug/routes', 'f3e'),
    exact: true
  },
  {
    path: '/public-docs/',
    component: ComponentCreator('/public-docs/', '6c6'),
    routes: [
      {
        path: '/public-docs/',
        component: ComponentCreator('/public-docs/', '3be'),
        routes: [
          {
            path: '/public-docs/',
            component: ComponentCreator('/public-docs/', '14b'),
            routes: [
              {
                path: '/public-docs/FF-DOC-000-documents',
                component: ComponentCreator('/public-docs/FF-DOC-000-documents', 'e32'),
                exact: true
              },
              {
                path: '/public-docs/FF-DOC-001-business-plan',
                component: ComponentCreator('/public-docs/FF-DOC-001-business-plan', '1ce'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/public-docs/FF-DOC-002-profit-expectations',
                component: ComponentCreator('/public-docs/FF-DOC-002-profit-expectations', 'a7a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/public-docs/FF-DOC-003-agreements',
                component: ComponentCreator('/public-docs/FF-DOC-003-agreements', '7e0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/public-docs/FF-DOC-004-green-programs-policy-california-us',
                component: ComponentCreator('/public-docs/FF-DOC-004-green-programs-policy-california-us', '51e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/public-docs/FF-DOC-005-green-programs-policy-international',
                component: ComponentCreator('/public-docs/FF-DOC-005-green-programs-policy-international', '0a0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/public-docs/FF-DOC-005-terms-of-service',
                component: ComponentCreator('/public-docs/FF-DOC-005-terms-of-service', 'c2f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/public-docs/FF-DOC-006-contributor-guide',
                component: ComponentCreator('/public-docs/FF-DOC-006-contributor-guide', 'cfb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/public-docs/FF-DOC-007-governance',
                component: ComponentCreator('/public-docs/FF-DOC-007-governance', '2cc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/public-docs/FF-DOC-008-brand-usage',
                component: ComponentCreator('/public-docs/FF-DOC-008-brand-usage', '5d0'),
                exact: true
              },
              {
                path: '/public-docs/FF-DOC-009-faq',
                component: ComponentCreator('/public-docs/FF-DOC-009-faq', '0ca'),
                exact: true
              },
              {
                path: '/public-docs/FF-DOC-010-roadmap',
                component: ComponentCreator('/public-docs/FF-DOC-010-roadmap', '4aa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/public-docs/FF-DOC-011-code-of-conduct',
                component: ComponentCreator('/public-docs/FF-DOC-011-code-of-conduct', '82d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/public-docs/FF-DOC-012-contributors',
                component: ComponentCreator('/public-docs/FF-DOC-012-contributors', '15f'),
                exact: true
              },
              {
                path: '/public-docs/LICENSE',
                component: ComponentCreator('/public-docs/LICENSE', 'e3e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/public-docs/',
                component: ComponentCreator('/public-docs/', 'aaf'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
