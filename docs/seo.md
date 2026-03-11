# SEO Improvements

## Done
- `pageTitleSuffix: " | Quran Notes"` — appended to every page `<title>`
- `Plugin.Description()` — auto-generates meta descriptions from content
- `Plugin.CustomOgImages()` — OG images for social sharing
- `enableSiteMap: true` — sitemap.xml submitted to Google Search Console
- `baseUrl: "quran.mhmz.dev"` — canonical URLs

## Per-note frontmatter (do this for every published note)
```yaml
---
publish: true
title: Note Title Here
description: A clear 1-2 sentence summary of what this note covers. This shows in Google results.
tags:
  - relevant-tag
  - another-tag
---
```

## Bigger improvements (future)

### 1. Structured Data (JSON-LD)
Tells Google the content type (Article, etc.) for rich search results.
Requires a custom Quartz component that injects a `<script type="application/ld+json">` block into the page `<head>`.

Example payload per note:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Note title",
  "description": "Note description",
  "url": "https://quran.mhmz.dev/...",
  "author": { "@type": "Person", "name": "Hamza" }
}
```

See Quartz docs on creating components: https://quartz.jzhao.xyz/advanced/creating-components

### 2. Internal Linking
Obsidian wikilinks between notes (`[[Note Name]]`) are resolved by Quartz into real HTML links.
The more notes link to each other, the stronger topic authority each page builds.
Aim to link related notes together — e.g. a Tafseer note linking to its Topic note.

### 3. Tag Pages as Topic Hubs
Quartz auto-generates a page for each tag (e.g. `/tags/ramadan`).
Consistent, descriptive tagging across notes means these hub pages accumulate SEO value over time.
Avoid one-off tags — reuse tags across multiple notes.
