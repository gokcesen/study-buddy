# Study Buddy

Study Buddy is an educational AI chatbot built with Next.js, TypeScript, Tailwind CSS, and Gemini.

The app helps users ask learning-related questions and get simple, beginner-friendly explanations.

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Gemini API
- Vercel

## Getting started

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Run the development server:

```bash
npm run dev
```

Open the app:

```txt
http://localhost:3000
```

## Environment variables

| Name | Description |
|---|---|
| `GEMINI_API_KEY` | API key used by the backend route to generate Gemini responses |

## Project structure

```txt
src/
  app/
    api/
      chat/
        route.ts
    page.tsx
    layout.tsx
    globals.css
  components/
    chat/
      ChatContainer.tsx
      ChatInput.tsx
      ChatMessage.tsx
      ChatMessages.tsx
  lib/
    gemini.ts
  types/
    chat.ts
```

## Notes

The Gemini API key is only used on the backend through the Next.js API route.

Do not expose the API key in the browser.

Do not commit `.env.local` to GitHub.
