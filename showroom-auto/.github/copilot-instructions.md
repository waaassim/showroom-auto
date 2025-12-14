<!-- Copilot instructions for AI coding agents working on this repo -->
# Showroom-Auto — Copilot Instructions

Purpose
- Help AI coding agents become productive quickly by describing this project's structure, build/test commands, and observable conventions.

Quick commands
- Start dev server: `npm start` (runs `ng serve` — port 4200 by default).
- Build production: `npm run build` (runs `ng build`).
- Run tests: `npm test` (Karma via Angular CLI).

Where to look first
- App bootstrap: `src/main.ts` — uses `bootstrapApplication(App, appConfig)`.
- App configuration: `src/app/app.config.ts` — `provideRouter`, `provideBrowserGlobalErrorListeners`, and `provideZoneChangeDetection` are registered here.
- Root component + data: `src/app/app.ts` — contains the primary `App` component and the in-repo sample `autoList` used across the UI.
- Routes: `src/app/app.routes.ts` — currently exports an empty `routes` array; routing is configured but unused.
- Components: `src/app/components/` — standalone components (see `head-bar` and `search-bar`) with `@Component({ imports: [...] })` style metadata.
- Domain model: `src/app/interfaces/auto.ts` — canonical `Auto` interface used throughout the app.

Architecture & patterns (what is discoverable)
- Standalone Angular approach: components use the `imports` array in `@Component` (no NgModule wrappers). Preserve `imports` when adding new components.
- Root-level config: app-wide providers live in `app.config.ts` and are wired at bootstrap. Do not move global providers into components unless intended.
- Local in-memory data: `App` currently holds `autoList` and passes it via `@Input()` to `SearchBar`. Parent listens to `@Output()` events (example: `onSelectAuto`) to receive selection.
- Template/style references: components use `templateUrl` and `styleUrl` (observe: singular `styleUrl` appears in files). This is a discoverable, consistent pattern in this repo — do not refactor the property name without confirming compatibility with the Angular version used.
- Assets: `angular.json` includes `public/` as the assets input. Images and static files should be placed under `public/` to be served and packaged.
- Styling & scripts: Bootstrap CSS/JS are included via `angular.json` (`node_modules/bootstrap/...`) — prefer using that global inclusion rather than importing Bootstrap in component code.

Conventions & gotchas specific to this repo
- Component metadata: follow the existing style — use `imports` to bring in common pipes/directives (e.g., `CurrencyPipe`, `NgClass`, `NgStyle` used in `search-bar`).
- Data flow: parent holds data (see `App`) and child components are dumb/presentational: they accept `@Input()` arrays and emit `@Output()` events. Mirror this pattern for new features.
- Routing is scaffolded but unused: `app.routes.ts` is empty; if you add routes, register them in `routes` and ensure `app.config.ts` remains the single source of router provider configuration.
- Signals: the root `App` uses `signal()` from `@angular/core`. New reactive local state can use signals to match the codebase style.

Testing & CI notes
- Tests run with `ng test` / `npm test`. The project uses Karma/Jasmine per `package.json` devDependencies.
- There is no separate e2e scaffolding present in the repo; avoid adding e2e infra unless requested.

Integration points
- Angular CLI: the project is an Angular CLI app (see `README.md` and `angular.json`). Use `ng`-based commands when possible to keep scaffolding consistent.
- External libs: Bootstrap is the main external UI dependency; RxJS and Angular are present at standard versions listed in `package.json`.

When editing code
- Preserve patterns you find: standalone components with `imports`, `templateUrl`, `styleUrl`, and parent-driven data flow.
- Small, localized changes preferred: this repo keeps logic inside components rather than introducing large services or stores.
- If you change global providers (in `app.config.ts`), run the dev server (`npm start`) and confirm the app boots without console errors.

Files to reference when working on features or fixes
- `src/main.ts`
- `src/app/app.config.ts`
- `src/app/app.ts`
- `src/app/app.routes.ts`
- `src/app/components/*` (e.g., `search-bar`, `head-bar`)
- `src/app/interfaces/auto.ts`
- `angular.json` and `package.json` for build/test scripts and global includes

After-action request
- If any instruction here is unclear or you find an inconsistency (for example, `styleUrl` vs `styleUrls`), flag it and I will update this guidance. Ask for a follow-up if you'd like suggested refactors or automated fixes.
