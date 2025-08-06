# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (static export)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a **Korean tech blog** (김종한의 기술 블로그) built with Next.js 15 and deployed on Cloudflare Pages.

### Key Architecture Decisions

- **Static Site Generation**: Uses `output: "export"` in next.config.ts for static deployment
- **MDX Content System**: Blog posts are stored as MDX files in `/src/contents/` directory
- **Korean Localization**: All UI text, metadata, and content are in Korean

### Project Structure

- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/` - React components organized by:
  - `base/` - Reusable base components
  - `common/` - Application-specific components
  - `ui/` - shadcn/ui components
- `/src/contents/` - MDX blog post content files
- `/src/constants/` - Configuration constants including post categories
- `/src/types/` - TypeScript type definitions

### Content Management

- Post categories are defined in `/src/constants/post.ts`: "lessons", "troubleshooting", "insight"
- Blog posts are MDX files with frontmatter located in `/src/contents/`
- Static routes are generated for each post at `/posts/[slug]`

### Styling & UI

- Tailwind CSS with custom configuration
- Pretendard Korean font loaded locally
- shadcn/ui component library
- Use the `cn` function to compose class names, especially when dealing with conditional classes or multiple utility classes. cn function is in @src/lib/utils.ts

### Deployment

- Static export builds deployed to Cloudflare Pages
- SEO optimized with Korean metadata and Open Graph tags