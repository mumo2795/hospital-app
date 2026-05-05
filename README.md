# Hospital Landing Page with AI Chatbot - Setup Guide

This is a professional hospital landing page built with **NextJS**, **TailwindCSS**, and integrated with **Claude AI** chatbot powered by **N8N** workflows.

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Landing Page                             │
│              (NextJS + TailwindCSS)                         │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Hero       │  │  Services    │  │   About      │      │
│  │  Section     │  │  Section     │  │  Section     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Contact     │  │   Footer     │  │   Chatbot    │      │
│  │  Section     │  │   Section    │  │  Widget      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└──────────────────────────────────────────────────────────────┘
                              ↓
                    ┌──────────────────────┐
                    │ API Route /api/chat  │
                    └──────────────────────┘
                              ↓
        ┌─────────────────────────────────────────┐
        ↓                                         ↓
    ┌──────────────┐                    ┌──────────────────┐
    │  Claude API  │                    │  N8N Workflow    │
    └──────────────┘                    └──────────────────┘
```

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 2. Configure Environment Variables

Edit `.env.local` and add:

```env
CLAUDE_API_KEY=your_claude_api_key_here
N8N_ENABLED=false
```

### 3. Get Claude API Key

1. Go to [Anthropic Console](https://console.anthropic.com)
2. Create API key
3. Add to `.env.local`

## 💬 Features

- **Professional Hospital Landing Page**: Hero, services, about, contact sections
- **AI Chatbot Widget**: Sarah (Asisten Responsif Interaktif KKM) in bottom-right
- **Claude Integration**: Latest Claude 3.5 Sonnet model
- **N8N Ready**: Optional workflow automation
- **Fully Responsive**: Mobile and desktop optimized
- **Type-Safe**: Built with TypeScript

## 📁 Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts      # Claude API integration
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   └── globals.css
├── components/
│   ├── Header.tsx              # Navigation
│   ├── Hero.tsx                # Hero section
│   ├── Services.tsx            # Services
│   ├── About.tsx               # About section
│   ├── Contact.tsx             # Contact form
│   ├── Footer.tsx              # Footer
│   └── ChatbotWidget.tsx       # Chat widget
```

## 🔧 Customization

### Change Hospital Info
Edit components and `.env.local`

### Modify Chatbot Personality
Update `SYSTEM_PROMPT` in `src/app/api/chat/route.ts`

### Change Colors
Colors use Tailwind's blue-600. Edit in components or config.

## 📊 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Set environment variables in Vercel dashboard.

## 🔗 N8N Integration

When ready to connect N8N:

1. Create N8N workflow with HTTP trigger
2. Set webhook URL in `.env.local`
3. Set `N8N_ENABLED=true`
4. Configure workflow to process chat data

## 📚 Resources

- [NextJS](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Claude API](https://docs.anthropic.com)
- [N8N](https://docs.n8n.io)
- [Vercel](https://vercel.com/docs)

## ❓ Troubleshooting

**Chatbot not working:**
- Check Claude API key in `.env.local`
- Verify key has available credits

**Styling issues:**
- Clear cache: `rm -rf .next`
- Rebuild: `npm run build`

**Build errors:**
- Delete `node_modules`
- Run `npm install`
- Ensure Node.js 18+

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
