# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

This is a hospital landing page application with an integrated AI chatbot. The application uses Next.js 16.2.4 (App Router), React 19, TypeScript, and Tailwind CSS 4. The chatbot integrates with N8N workflows via webhook for AI-powered patient assistance.

## Architecture

The application follows a component-based architecture with two chatbot implementations:

1. **N8NChatWidget** - Primary chatbot using N8N webhook integration (currently active in layout)
2. **ChatbotWidget** - Alternative custom React chatbot implementation (available but not mounted)

The N8N integration works through a proxy pattern:
- Frontend: `N8NChatWidget` component loads N8N's chat bundle from CDN
- Backend: `/api/chat` route proxies requests to N8N webhook configured in `.env.local`
- N8N webhook URL is set via `NEXT_PUBLIC_N8N_WEBHOOK_URL` environment variable

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Key Files and Structure

```
src/
├── app/
│   ├── api/chat/route.ts       # N8N webhook proxy endpoint
│   ├── layout.tsx              # Root layout with N8N chat container
│   ├── page.tsx                # Main landing page composition
│   └── globals.css             # Global styles
├── components/
│   ├── N8NChatWidget.tsx       # N8N chat integration (active)
│   ├── ChatbotWidget.tsx       # Custom chat widget (inactive)
│   ├── Header.tsx              # Navigation header
│   ├── Hero.tsx                # Hero section
│   ├── Services.tsx            # Services section
│   ├── About.tsx               # About section
│   ├── Contact.tsx             # Contact form
│   └── Footer.tsx              # Footer
```

## Environment Configuration

Required environment variables in `.env.local`:
- `NEXT_PUBLIC_N8N_WEBHOOK_URL` - N8N webhook endpoint for chat functionality
- `VERCEL_OIDC_TOKEN` - Vercel deployment token (auto-generated)

## Chatbot Implementation Details

### Active Implementation (N8N)
- Mounted in `layout.tsx` with a fixed-position container
- Loads N8N chat bundle dynamically via CDN (`@n8n/chat`)
- Uses `/api/chat` as proxy to avoid CORS issues
- Chat appears in window mode at bottom-right

### API Route (`/api/chat`)
- Accepts POST requests with `chatInput`, `sessionId`, and `action` fields
- Forwards requests to N8N webhook
- Returns N8N response directly to frontend
- Includes error handling and logging

### Alternative Implementation (ChatbotWidget)
- Custom React component with local state management
- Not currently mounted in the application
- Can be swapped by replacing `N8NChatWidget` with `ChatbotWidget` in `layout.tsx`

## Important Notes

- This project uses Next.js 16.2.4 which may have breaking changes from earlier versions
- Always check `node_modules/next/dist/docs/` for current API documentation
- The N8N webhook URL must be configured before the chat will function
- The chat container is positioned fixed at bottom-right with z-index 9999
- Dependencies include `@google/generative-ai` (not currently used in active implementation)

## Testing the Chatbot

1. Ensure `NEXT_PUBLIC_N8N_WEBHOOK_URL` is set in `.env.local`
2. Start dev server: `npm run dev`
3. Open browser to `http://localhost:3000`
4. Chat widget should appear in bottom-right corner
5. Check browser console and terminal for connection logs

## Deployment

The application is configured for Vercel deployment:
- Environment variables must be set in Vercel dashboard
- N8N webhook must be accessible from Vercel's deployment region
- Build command: `npm run build`
- Output directory: `.next`
