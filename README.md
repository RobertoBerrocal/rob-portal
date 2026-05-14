# rob-portal

Personal portfolio site: a single-page React app with section-based navigation, styled with Chakra UI.

**Live site:** [robertoberrocal.github.io/rob-portal/](https://robertoberrocal.github.io/rob-portal/)

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vitejs.dev/) for dev server and production builds
- [Chakra UI v3](https://chakra-ui.com/) for layout and components
- [React Router](https://reactrouter.com/) (`BrowserRouter` only; in-page navigation uses scroll targets)
- [react-icons](https://react-icons.github.io/react-icons/) for icons

Path alias: `@/`* → `src/*` (see `tsconfig.app.json`).

## Prerequisites

- **Node.js** 20+ recommended (LTS)
- **npm** (ships with Node)

## Scripts


| Command           | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| `npm install`     | Install dependencies                                                     |
| `npm run dev`     | Start dev server (usually [http:§§ocalhost:5173](http://localhost:5173)) |
| `npm run build`   | Typecheck (`tsc -b`) and production build to `dist/`                     |
| `npm run preview` | Serve the production build locally                                       |
| `npm run lint`    | Run ESLint                                                               |


## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints in the terminal. The app is built for a **subpath** (`/rob-portal/`); locally, Vite still serves the app correctly.

## Production build

```bash
npm run build
```

Output is written to `dist/`. Check with:

```bash
npm run preview
```

## GitHub Pages (this repo)

The site is hosted as a **project page** under `/rob-portal/`. These must stay aligned:

- `vite.config.ts` → `base: "/rob-portal/"`
- `src/main.tsx` → `BrowserRouter basename="/rob-portal/"`

If you ever rename the repo or switch to a user/org root site (`username.github.io`), update **both** the Vite `base` and the router `basename`, then rebuild.

### Deploying updates

Repository **Settings → Pages** is configured to deploy from the `**gh-pages`** branch (root). After merging work into `main` (or your release branch):

```bash
npm ci
npm run build
npx gh-pages -d dist
```

That publishes `dist/` to `gh-pages` and triggers GitHub Pages. Wait a minute, then hard-refresh the live URL if needed.

## Project layout (abbrev.)

```
src/
  App.tsx           # Shell: navbar + sections
  main.tsx          # Entry + providers + router basename
  pages/            # Section content (Profile, About, Skills, …)
  components/       # Navbar, HorizontalCard, ui helpers
  assets/           # Images
```

## License

Private repository; all rights reserved unless you add a license file.