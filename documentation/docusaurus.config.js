/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SQL Spiel',
  favicon: 'img/favicon.ico',

  url: 'https://ss23-kba-project.vercel.app/',
  baseUrl: '/',

  organizationName: 'fherfurt',
  projectName: 'kba',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'de', locales: ['de'] },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          editUrl: 'https://github.com/fh-erfurt/ss23-kba-project/tree/main/',
          remarkPlugins: [
            [
              require('@akebifiky/remark-simple-plantuml'),
              { baseUrl: 'https://www.plantuml.com/plantuml/svg' },
            ],
          ],
        },
        blog: false,
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'SQL Spiel',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Dokumentation',
        },
        {
          href: 'https://github.com/fh-erfurt/ss23-kba-project',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
};

module.exports = config;
