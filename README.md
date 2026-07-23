# vedvyas.org

One-page site for the Ved Vyas Foundation.

Next.js 16 (App Router) + TypeScript + Tailwind + shadcn-style components,
matching the branding of bhagavadgita.com. Fully statically prerendered.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

- `content/site.ts` — all copy and outbound links. Edit here, not in the JSX.
- `app/page.tsx` — page sections.
- `app/layout.tsx` — metadata, fonts, Organization/WebSite JSON-LD, Plausible.
- `app/globals.css` — the Prakash (light) and Nisha (dark) color tokens.

## History

This replaced a Notion-backed site built on `nextjs-notion-starter-kit`.
The Notion dependency was removed in full.
