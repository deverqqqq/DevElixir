// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  title: 'DevElixir',
  tagline: 'deverqqqq.WriteLine(╯-____-)╯~═╩════╩═);',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tech.deverqqqq.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'deverqqqq', // Usually your GitHub org/user name.
  projectName: 'DevElixir', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/deverqqqq/DevElixir/tree/main/',
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-NSENBHQE50',
          anonymizeIP: true,
        },
      },
    ]
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      mermaid: {
        theme: { light: 'forest', dark: 'dark' },
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DevElixir',
        logo: {
          alt: 'DevElixir',
          src: 'img/favicon.ico',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'toolStackSidebar',
          //   position: 'left',
          //   label: 'ToolStack',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'algoSidebar',
          //   position: 'left',
          //   label: 'Algo',
          // },
          {
            type: 'docSidebar',
            sidebarId: 'patternSidebar',
            position: 'left',
            label: 'Pattern',
          },
          {
            type: 'docSidebar',
            sidebarId: 'techSidebar',
            position: 'left',
            label: 'Tech',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devOpsSidebar',
            position: 'left',
            label: 'DevOps',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            type: 'dropdown',
            label: 'Projects',
            position: 'right',
            items: [
              {
                label: 'dotnet-template',
                href: 'https://github.com/deverqqqq/dotnet-templates',
              },
              // {
              //   type: 'doc',
              //   label: 'Social',
              //   docId: 'social',
              // },
              // ... more items
            ],
          },
          {
            href: 'https://github.com/deverqqqq',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DevElixir. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['csharp', 'json', 'bash'],
      },
    }),
};

export default config;
