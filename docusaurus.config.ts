import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import prismDarkTheme from "./src/utils/prismDark";

const config: Config = {
  title: "Canary Design",
  tagline: "A component library built in React and Typescript",
  favicon: "images/canary.ico",

  // Set the production url of your site here
  // url: "https://your-docusaurus-site.example.com",
  url: "https://canary-design.netlify.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Canary Design",
      logo: {
        alt: "Canary Design Logo",
        src: "images/canary.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // hiding the blog section - might include later in the future
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/vikrantaroraa/canary-design",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/category/getting-started",
            },
          ],
        },
        {
          title: "Find Me On",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/vikrantaroraa/",
            },
            {
              label: "Github",
              href: "https://github.com/vikrantaroraa",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/vikrantaroraa",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Portfolio",
              href: "https://vikrantaroraa.netlify.app/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Canary Design. Made with 💗 in Kashipur, Uttarakhand ( India ).`,
      // `extra icons -> 👋🏼 🙂 ❤ 💗 ❤️ `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismDarkTheme,
      // darkTheme: prismThemes.vsDark,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
