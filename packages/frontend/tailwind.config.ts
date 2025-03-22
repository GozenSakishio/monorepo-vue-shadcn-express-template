/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

// TailwindCSS 安装说明（兼容性最佳）
// 
// 在 monorepo 根目录运行：
// pnpm add -D tailwindcss@3.4.1 postcss autoprefixer --filter frontend
// cd packages/frontend
// pnpm exec tailwindcss init -p

// Tailwind Config（TS 格式）
// packages/frontend/tailwind.config.ts