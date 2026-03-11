# Quran Notes — Claude Context

## What This Project Is

A **digital garden** for Quran study notes, published as a static site at **https://quran.mhmz.dev**. Notes live in an Obsidian vault; only notes explicitly marked for publishing appear on the site.

## Stack

- **Framework:** [Quartz v4](https://quartz.jzhao.xyz/) — static site generator built for Obsidian-style digital gardens
- **Language:** TypeScript + Preact
- **Hosting:** Firebase Hosting (project: `mhmzdev-666`, site: `quran-notes`)
- **Output directory:** `public/`

## Critical: Content Symlink

```
./content  →  ~/Library/CloudStorage/GoogleDrive-hamza.6.shakeel@gmail.com/My Drive/Obsidian/Quran Vault
```

The `content/` directory is a **symlink** to the Obsidian vault stored in Google Drive. It is **git-ignored** — never tracked in version control. Changes to note content happen in the vault, not in this repo.

## How Publishing Works

Only notes with `publish: true` in frontmatter are built and deployed:

```yaml
---
publish: true
title: Note Title
description: 1-2 sentence summary for SEO
tags:
  - tag1
  - tag2
---
```

This is enforced by the `ExplicitPublish` filter in `quartz/plugins/filters/explicit.ts`. Notes without `publish: true` are completely excluded from the build — they stay private.

## Vault Content Structure

```
content/
├── 0 - Top of Mind/      # Quick reference notes
├── 1 - Topics/           # Thematic deep-dives
├── 2 - Resources/        # Reference materials
├── 3 - Tafseer/          # Verse-level commentary
├── Indexes/              # Entry points by surah, theme, keyword
├── Tags/                 # Obsidian tag directory
├── _Main Notes/          # Curated notes
├── _Templates/           # Obsidian templates (excluded from build)
├── _Images/              # Image assets
└── index.md              # Landing page (publish: true)
```

Ignored folders in config: `private`, `templates`, `.obsidian`, `Quran Vault`.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local dev server with live reload |
| `npm run publish` | Build + deploy to Firebase Hosting |
| `npm run check` | Type-check + lint |
| `npm run format` | Format code with Prettier |

## Key Config Files

- `quartz.config.ts` — Site config (title, base URL, plugins, theme, filters)
- `quartz.layout.ts` — Page layout (sidebars, components per page type)
- `firebase.json` / `.firebaserc` — Firebase Hosting config
- `docs/seo.md` — SEO configuration notes

## Quartz Features Enabled

- `enableSPA: true` — Smooth client-side navigation
- `enablePopovers: true` — Hover previews for internal links
- Obsidian wikilinks (`[[Note Name]]`) auto-resolve
- Full-text client-side search (FlexSearch)
- Auto-generated backlinks, tag pages, folder pages
- KaTeX math rendering
- Syntax highlighting (Shiki, GitHub light/dark)
- OG image generation, sitemap, RSS feed
- Plausible analytics
- `defaultDateType: "modified"` — uses git-tracked modification date

## SEO Setup

- Page title suffix: ` | Quran Notes`
- Per-note `description` frontmatter field (1–2 sentences)
- `Plugin.Description()` auto-generates meta descriptions
- `Plugin.CustomOgImages()` generates OG images for social sharing
- Canonical base URL: `quran.mhmz.dev`

## Important Notes

- **Do not modify files under `content/`** — that is the live Obsidian vault
- **Do not modify files deep inside `quartz/`** unless you are changing the framework itself; prefer `quartz.config.ts` and `quartz.layout.ts` for customization
- The `public/` directory is build output — never edit directly
- Node version: v22 (see `.node-version`)
