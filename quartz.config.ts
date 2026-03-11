import {QuartzConfig} from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quran Notes",
    pageTitleSuffix: " | Quran Notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quran.mhmz.dev",
    ignorePatterns: ["private", "templates", ".obsidian", "Quran Vault"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F7F3EC",
          lightgray: "#EDE6DB",
          gray: "#A89888",
          darkgray: "#3C3630",
          dark: "#1C1814",
          secondary: "#263D30",
          tertiary: "#4A7056",
          highlight: "rgba(38, 61, 48, 0.08)",
          textHighlight: "#C5DCC888",
        },
        darkMode: {
          light: "#0E1812",
          lightgray: "#1A2C20",
          gray: "#3E5A48",
          darkgray: "#B8C9B0",
          dark: "#E6EEE1",
          secondary: "#7AB88A",
          tertiary: "#5A9870",
          highlight: "rgba(122, 184, 138, 0.08)",
          textHighlight: "#263D3088",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({enableInHtmlEmbed: false}),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({markdownLinkResolution: "shortest"}),
      Plugin.Description(),
      Plugin.Latex({renderEngine: "katex"}),
    ],
    filters: [
      Plugin.ExplicitPublish(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
