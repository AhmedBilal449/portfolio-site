# Portfolio Website

A professional, static portfolio website built with Next.js, TypeScript, and Framer Motion.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Framer Motion** - Smooth animations
- **CSS Modules** - Scoped styling
- **Static Export** - Fully static, deployable anywhere

## Project Status

✅ **Phase 1 Complete** - Project Setup & Foundations
- Next.js project initialized with TypeScript and ESLint
- Global layout with clean typography and spacing system
- Light/Dark theme toggle with localStorage persistence
- Static export configured

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## Project Structure

```
portfolio-site/
├── app/
│   ├── components/
│   │   ├── ThemeProvider.tsx      # Theme context provider
│   │   ├── ThemeToggle.tsx        # Theme toggle button
│   │   └── ThemeToggle.module.css # Toggle button styles
│   ├── globals.css                # Global styles and CSS variables
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page
├── next.config.ts                 # Next.js config with static export
├── package.json
└── tsconfig.json
```

## Features

- ✅ Fully static site (no server required)
- ✅ Light/Dark mode with system preference detection
- ✅ Persistent theme selection
- ✅ Clean, professional typography
- ✅ Responsive spacing system
- ✅ TypeScript for type safety
- ✅ ESLint for code quality

## Next Steps

Phase 2 will include:
- Navigation bar
- Hero section
- About section
- Skills section
- Projects preview

## Deployment

This site can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

The build output is in the `out/` directory after running `npm run build`.
