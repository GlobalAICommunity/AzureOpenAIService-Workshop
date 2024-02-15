// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: " Learn how to use OpenAI models (e.g. ChatGPT) using Azure OpenAI",
  tagline: "A 60-minute workshop on OpenAI GPT Models",
  url: "https://workshop.globalai.community/",
  baseUrl: "/",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  trailingSlash: true,

  organizationName: "globalaicommunity", 
  projectName: "AzureOpenAIService-Workshop", 
  deploymentBranch: "gh-pages", 
  favicon: "img/favicon.ico",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/globalaicommunity/AzureOpenAIService-Workshop/tree/main",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: "Explore the OpenAI GPT Models",
        logo: {
          alt: "My Site Logo",
          src: "img/Azure-OpenAI-Services.svg",
        },
        items: [],
      },

      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Explore the Azure OpenAI Service Workshop. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      /* Banner Announcements */
      announcementBar: {
        id: 'Global AI Community Banner',
        content:
          '<a href="https://github.com/GlobalAICommunity/AzureOpenAIService-Workshop"><b> Star this on GitHub</b></a> ▪️ <a href="hhttps://globalai.community/about/join-the-community/"><b>Join the Global AI Community</b></a> ',
        backgroundColor: '#000000',
        textColor: '#ffffff',
        isCloseable: false,
      },

      /* Clarity Config */
      clarity: {
        ID: "gxhc6407pe", 
      }

    }),

    plugins: [
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 96,
          max: 1000, // max resized image's size.
          min: 420, // min resized image's size. 
          steps: 4, // #images b/w min and max (inclusive)
          disableInDev: false,
        },
      ],
      [
        'docusaurus-plugin-clarity',
        {
        }
      ],
    ],
};

module.exports = config;
