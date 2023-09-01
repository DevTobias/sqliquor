import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid({
  title: 'SQLiqour',
  description: 'Fun SQL learning experience.',

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Entwicklung', link: '/development/overview' },
      { text: 'Spiel', link: '/game/overview' },
    ],

    sidebar: {
      '/development/': [
        { text: 'Übersicht', link: '/development/overview' },
        { text: 'Ideensammlung', link: '/development/ideas' },
        { text: 'Roadmap', link: '/development/roadmap' },
        {
          text: 'Systemanalyse',
          items: [
            {
              text: 'Konzept',
              link: '/development/system_analysis/concept',
            },
            {
              text: 'Ziele und Stakeholder',
              link: '/development/system_analysis/goals',
            },
            {
              text: 'Anwendungsfälle',
              link: '/development/system_analysis/use_cases',
            },
            {
              text: 'Anforderungen',
              link: '/development/system_analysis/user_stories',
            },
          ],
        },
        {
          text: 'Technische Dokumentation',
          items: [
            {
              text: 'Systemarchitektur',
              link: '/development/technical/architecture',
            },
            {
              text: 'Entwicklung',
              link: '/development/technical/development',
            },
            {
              text: 'Authentifizierung',
              link: '/development/technical/authentication',
            },
            {
              text: 'Datenbank engine',
              link: '/development/technical/database_engine',
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DevTobias/sqliquor' },
    ],

    editLink: {
      text: 'Bearbeite diese Seite auf GitHub',
      pattern:
        'https://github.com/DevTobias/sqliquor/edit/main/docs/docs/:path',
    },
  },
});
