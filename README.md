# Casper Hildebrand'S portfolio website

This is the repository for my portfolio website, deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Getting started

### Installation

```bash
pnpm install
```

### Local development

```bash
pnpm start
```

Runs the Vite dev server locally.

### Production build

```bash
pnpm run build
```

Compiles TypeScript and bundles the static site into the `dist/` directory.

### Deployment

The project is configured for Cloudflare Pages:
- Direct Git Integration: In the Cloudflare Dashboard, connect this repository to Cloudflare Pages with build command `pnpm run build` and output directory `dist`.
- Wrangler CLI: Deploy locally using `pnpm run deploy` (or `pnpm exec wrangler pages deploy dist`).
- GitHub Actions: Configured via `.github/workflows/deploy-pages.yml` using `cloudflare/wrangler-action`.
