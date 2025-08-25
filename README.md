# 🎮 Next.js 15 Game Search App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses the App Router introduced in Next.js 15, TailwindCSS 4 for styling, and TypeScript for type safety.

The application consumes a public games API and allows users to search for specific game titles using a dynamic filter. It leverages Server Side Rendering (SSR) for performance and SEO, and uses `use client` directives for interactive components.

---

## 🚀 Features

- ✅ Built with Next.js 15 and App Router
- 🎨 Styled using TailwindCSS 4 and PostCSS
- 🔎 Game search functionality via external API
- ⚡ Server Side Rendering (SSR) for fast initial loads
- 🧠 TypeScript for static typing
- 🧩 Client-side interactivity with `use client` components

---

## 📁 Project Structure

```bash
├── app/
│   ├── page.tsx              # Main page with SSR
│   └── layout.tsx            # Shared layout
├── components/
│   ├── SearchBar.tsx         # Client-side search input
│   └── GameCard.tsx          # Game display component
├── lib/
│   └── api.ts                # API fetch logic
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

### 🛠 Getting Started

- First, run the development server:
  npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

### 📚 Learn More

To learn more about Next.js, take a look at the following resources:

Next.js Documentation – learn about Next.js features and API.

Learn Next.js – an interactive Next.js tutorial.

You can check out the Next.js GitHub repository – your feedback and contributions are welcome!

### 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js..

Check out the Next.js deployment documentation for more details.

### 📄 License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
