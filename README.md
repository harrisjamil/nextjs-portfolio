# Developer Portfolio Template

A modern, open-source portfolio template built with Next.js. Clean layouts, smooth motion, and a production-ready structure anyone can clone and customize.

**Public repository:** [github.com/harrisjamil/nextjs-portfolio](https://github.com/harrisjamil/nextjs-portfolio)

## Features

- Multi-page structure (Home, Projects, Services)
- Motion-driven hero and section reveals
- Project carousel and case-style project pages
- Dark / light theme support
- Responsive layout for desktop and mobile
- Centralized content in `lib/data.ts` for easy editing

## Tech Stack

- [Next.js](https://nextjs.org) 16
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4
- [Motion](https://motion.dev)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm, yarn, pnpm, or bun

### Install

```bash
git clone https://github.com/harrisjamil/nextjs-portfolio.git
cd nextjs-portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

### Build for production

```bash
npm run build
npm start
```

## Customize

Most site copy, projects, services, stats, and social links live in:

```text
lib/data.ts
```

Update images under `public/images/`, then adjust page and component content as needed.

## Project Structure

```text
app/                 # Routes and layouts
components/          # UI sections and shared components
lib/data.ts          # Site content and configuration
public/images/       # Static assets
```

## License

This project is available publicly on GitHub. Feel free to explore, fork, and adapt it for personal or client use.
