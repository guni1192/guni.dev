# guni.dev

Takashi Iiguni's personal website built with Vite + React + TypeScript.

## Features

- ⚡️ Fast development with Vite
- ⚛️ React 18 with TypeScript
- 🎨 Pure CSS with responsive design
- 📱 Mobile-first approach
- 🚀 Optimized for Cloudflare Pages
- 🎯 Static site generation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

This site is optimized for deployment on Cloudflare Pages:

1. Build command: `npm run build`
2. Build output directory: `dist`
3. Root directory: `/`

The `_redirects` file handles SPA routing for client-side navigation.

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── lib/           # Data and utilities
├── types/         # TypeScript type definitions
├── index.css      # Global styles
├── main.tsx       # Application entry point
└── App.tsx        # Main App component

public/            # Static assets
├── favicon files  # Various favicon sizes
├── site.webmanifest # PWA manifest
└── _redirects     # Cloudflare Pages redirects
```

## Tech Stack

- **Vite** - Build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **React Icons** - Icon components
- **CSS** - Styling (no frameworks)
- **Cloudflare Pages** - Hosting
