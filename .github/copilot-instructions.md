<!-- .github/copilot-instructions.md -->
# Guidance for AI coding agents: VeryGoodScoutingApp

This repository is a small Preact + Vite single-page app written in TypeScript. The goal of this document is to give an AI coding agent the minimal, precise context needed to make productive edits.

Key facts
- Framework: Preact + Vite (see `vite.config.ts`)
- Language: TypeScript with JSX/TSX (see `tsconfig.json` and `.tsx` files)
- Entry: `src/main.tsx` mounts `App` from `src/app.tsx` into `#app` in `index.html`
- Pages: lightweight page components live under `src/pages/` (example: `src/pages/match/match.tsx`)

Project structure and important files
- `index.html` – HTML shell and root element id `app` used by `src/main.tsx`.
- `src/main.tsx` – application bootstrap (renders `<App />`).
- `src/app.tsx` – top-level UI and navigation buttons. Contains the app-level state (currently local). Example: page switching uses a `page` state variable.
- `src/pages/match/match.tsx` – example page component. Note: this file mixes `react` imports and Preact usage; check and align imports when editing.
- `package.json` – development scripts:
  - `npm run dev` → starts Vite dev server (HMR)
  - `npm run build` → runs TypeScript build then `vite build`
  - `npm run preview` → run a local preview of the built app

What to watch for (project-specific patterns and gotchas)
- Mixed React/Preact imports: some files import from `react` (e.g. `match.tsx`) while the project uses `preact`. Prefer `preact` hooks and types (e.g. `preact/hooks`) or use the `@preact/preset-vite` compatibility layer consistently.
- File extensions: source files use `.tsx`. Keep imports consistent (most files import with explicit `.tsx` paths in this repo — follow existing style).
- CSS is global under `src/*.css` and `src/app.css` — small project uses simple class names. Avoid introducing CSS modules unless adding build config.
- Entrypoint `index.html` expects an element with id `app`. Don't change this id without updating `src/main.tsx`.

Making edits: practical tips and examples
- To add a new page: create `src/pages/<name>/<name>.tsx`, export a default component, and import it into `src/app.tsx` or implement a simple router. Example pattern: `import match from './pages/match/match.tsx'` (current `app.tsx` has this import but does not use it; wire up as needed).
- To change the UI state: `src/app.tsx` uses `useState` from `preact/hooks`. Prefer the Preact hook signature and ensure event handlers use proper JSX attributes (e.g. `onClick={...}` not inline text inside the button block).
- Fixing onClick wiring: buttons in `src/app.tsx` contain the text `onClick={() => { setPage("Match") }}` inside the button content rather than as a prop. Move those into the button prop: `<button onClick={() => setPage('Match')}>Match</button>`.

Developer workflows (commands and fast checks)
- Start dev server: `npm run dev` — open the URL printed by Vite (usually `http://localhost:5173`).
- Build: `npm run build`. If TypeScript errors, run `npx tsc --noEmit` to see diagnostics.
- Preview build: `npm run preview`.

Testing and linting
- No test or lint config present. Add tests or linters only if you also add config files (`vitest`, `eslint`, etc.). Keep changes minimal unless requested.

Integration points and external services
- No backend or external APIs in the repo. The app currently links to external sites (e.g. code.wucode.org, preactjs.com) but has no networked data flows. If you add integrations, document them and add environment config.

Editing contract for an AI agent (concise checklist)
1. Preserve project scripts in `package.json` and `vite.config.ts` unless intentionally changing build/runtime behavior.
2. Use `preact` imports and `preact/hooks` for state and effects. Convert `react` imports to `preact` when present.
3. Keep `index.html` root id `app` unchanged unless updating `src/main.tsx` accordingly.
4. When modifying UI event handlers, ensure handlers are JSX props (e.g. `onClick={...}`) and not raw text nodes.
5. Run `npm run dev` locally to verify HMR and UI behavior after changes.

If anything in this file is unclear or you'd like more examples (component props, state patterns, or routing suggestions), tell me which area to expand and I'll update this doc.
