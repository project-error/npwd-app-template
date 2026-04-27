# NPWD App Template

Template for building external apps for [NPWD](https://github.com/project-error/npwd) v4.

## Quick start

1. Click **Use this template** on GitHub
2. Replace `example` with your app ID in:
   - `server/server.ts` — the `id` and `name` in `RegisterExternalApp`
   - `web/vite.config.ts` — the `name` field (`__npwd_ext_<your-id>`)
   - `web/src/index.tsx` — your app component and icon
   - `package.json` — the package `name` (used as the resource folder name)
   - `fxmanifest.lua` — the `description`
3. Install dependencies:
   ```bash
   npm install && cd web && npm install
   ```
4. Build:
   ```bash
   npm run build
   ```
5. Copy to your FiveM server resources and `ensure` it

## Structure

```
├── client/          # FiveM client script (NUI callbacks, natives)
├── server/          # FiveM server script (RegisterExternalApp)
├── web/src/         # React UI (bundled as IIFE)
├── shared/          # Shared types between client/server/web
├── scripts/         # esbuild config for client + server
├── fxmanifest.lua   # FiveM resource manifest
└── .github/         # CI: builds + creates GitHub Release on tag push
```

## Available imports

Your web bundle can use these — they're provided by NPWD at runtime:

- `react`, `react/jsx-runtime`, `react-dom`
- `lucide-react` — icons
- `@npwd/keyos` — NPWD's UI component library
- `@npwd/sdk` — NPWD SDK utilities
- `motion/react` — Framer Motion

## Releasing

Push a version tag to trigger the GitHub Action:

```bash
git tag v1.0.0 && git push --tags
```

The action builds the resource, zips it, computes the SHA-256 hash, and creates a GitHub Release. Add the app to the [NPWD registry](https://github.com/project-error/npwd-registry) to make it available in the App Store.
