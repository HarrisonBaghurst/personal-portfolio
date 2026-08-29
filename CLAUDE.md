# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
Always begin responces by referring to the user by their first name - Harrison
Keep all responces concise.
Don't add comments to code, give explanations in the cli instead.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

```bash
npm run dev     # dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # bare `eslint` (NOT `next lint`, which is removed in Next 16)
```

`next build` no longer runs linting in Next 16, so `npm run lint` has to be run on its own.

No test runner is configured — there is no test command, and `npm test` will fail. Add one before writing tests.

## State of the repo

The `rebuild` branch is a from-scratch restart: the previous portfolio (its `components/`, `lib/`, `context/`, `constants/`, route groups, and contact API route) is deleted in the working tree, and `app/page.tsx` is still the unmodified `create-next-app` template. Treat prior structure as history, not precedent — check `git show HEAD:<path>` if you need to recover something from it.

`public/fonts/` holds Libre Baskerville `.ttf` files that nothing references yet; `app/layout.tsx` still loads Geist via `next/font/google`.

## Architecture notes

- **Tailwind v4, CSS-first.** There is no `tailwind.config.*` and adding one will not be read. Theme tokens are declared in `app/globals.css` under `@theme inline`, sourced from CSS custom properties on `:root` (with a `prefers-color-scheme: dark` override). Register new design tokens there — a `--color-*` entry becomes a `bg-*`/`text-*` utility automatically. PostCSS wiring is `@tailwindcss/postcss` in `postcss.config.mjs`.
- **Typed route props are globals, not imports.** `app/layout.tsx` uses `LayoutProps<"/">` with no import statement; these types are generated into `.next/types` and `.next/dev/types`, which `tsconfig.json` pulls into the compilation. Typechecking a route file can fail until a dev server or build has generated them. `PageProps` works the same way.
- **`@/*` maps to the repo root**, not to a `src/` directory.
- **ESLint uses flat config** (`eslint.config.mjs`) composing `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`. The `globalIgnores` call re-declares what `eslint-config-next` ignores by default — extend that list rather than assuming the defaults still apply.
