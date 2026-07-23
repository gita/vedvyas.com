# vedvyas.org

Site for the Ved Vyas Foundation.

Next.js 16 (App Router), TypeScript, Tailwind, shadcn-style components, matching
the branding of bhagavadgita.com. Every route is statically prerendered.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Foundation home: mission, the five products, contribute |
| `/ved-vyas` | Who Ved Vyas was. Targets the "ved vyas" search cluster, carries FAQ schema |
| `/about` | The foundation itself |

`/opengraph-image`, `/sitemap.xml`, `/robots.txt` and `/manifest.webmanifest`
are generated from the same content module, so they never drift.

## Where things live

- `content/site.ts` — shared copy, product list, outbound links. Edit here, not in JSX.
- `content/pages.ts` — copy for `/ved-vyas` and `/about`.
- `app/layout.tsx` — sitewide metadata, fonts, Organization/WebSite/product JSON-LD, Plausible.
- `app/globals.css` — Prakash (light) and Nisha (dark) colour tokens.
- `public/art/` — the brand emblems. Generated with gpt-image-2 against one fixed
  brand system, then background-keyed to transparent so they sit on either theme.

## Conventions

- **No em dashes** anywhere in copy.
- **Email is never in the HTML.** `components/obfuscated-email.tsx` assembles the
  address in the browser. Do not add a plain `mailto:` or put the address in
  JSON-LD, or scrapers get it for free.
- **Canonical origin** is `vedvyas.org` (it holds the domain rating and the
  backlinks). Override with `NEXT_PUBLIC_SITE_URL` if that ever changes.

## History

This replaced a Notion-backed site built on `nextjs-notion-starter-kit`.
The Notion dependency was removed in full.
