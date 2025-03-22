# Vite Monorepo Template

> A modern monorepo template using Vite + Vue + TailwindCSS + Shadcn/vue + Express + SQLite

## 📦 Packages

- `frontend/` - Vue 3, TypeScript, TailwindCSS, Shadcn/vue
- `backend/` - Express server with TypeScript and SQLite

## 🛠 Setup

```bash
pnpm install
```

### Start dev servers
```bash
pnpm dev
```

This will concurrently run:
- Vite dev server (`frontend`)
- Express backend server (`backend`)

## 📂 Structure
```
vite-monorepo-template/
├── packages/
│   ├── frontend/   # Vite + Vue 3 app
│   └── backend/    # Express + SQLite server
├── tsconfig.base.json
├── .gitignore
└── pnpm-workspace.yaml
```

## 🧪 Features
- 🌿 Monorepo with pnpm workspaces
- ⚡ Vite for frontend, Express for backend
- 🎨 TailwindCSS + shadcn/vue preconfigured
- ✅ ESLint, Prettier, TypeScript strict mode

🚀 Development

### Init Shadcn/vue components

under `packages/frontend/`
```
pnpm dlx shadcn-vue@latest add button
pnpm dlx shadcn-vue@latest add input
pnpm dlx shadcn-vue@latest add dialog
```

## 🧭 License
MIT