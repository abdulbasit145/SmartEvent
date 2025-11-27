# Smart Events

Marketing site and admin dashboard for Smart Events, an event-management company in Pakistan. The app is built with Vite + React, Tailwind CSS, shadcn/ui, and Supabase for data/auth.

## Tech Stack

- React 18 with TypeScript
- Vite + SWC
- Tailwind CSS + shadcn/ui
- Supabase (database, auth, storage)
- Framer Motion, Lucide icons

## Getting Started

```bash
git clone <repo-url>
cd SmartEvents
npm install
npm run dev
```

Visit the printed Vite URL (usually http://localhost:5173). Use `npm run build` for a production bundle.

## Environment Variables

Create a `.env.local` file in the project root:

```
VITE_SUPABASE_URL=<your-supabase-project-url>
VITE_SUPABASE_PUBLISHABLE_KEY=<your-supabase-anon-key>
```

Restart the dev server after changing env vars.

## Database / Supabase Setup

1. Install the Supabase CLI (`npm i -g supabase`) and run `supabase login`.
2. Link the local project to your Supabase instance: `supabase link --project-ref <project-ref>`.
3. Apply the existing schema: `supabase db push` (runs every file under `supabase/migrations`).
4. Regenerate typed client helpers when the schema changes:
   ```
   npx supabase gen types typescript --project-id <project-ref> --schema public > src/integrations/supabase/types.ts
   ```

The initial migration seeds testimonial/content data and sets up RLS policies so bookings can be created publicly while admin actions require authentication.

## Available Scripts

- `npm run dev` – start the Vite dev server
- `npm run build` – production build
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

## Deploying

Any platform that supports a static Vite build + environment variables will work (Netlify, Vercel, Cloudflare Pages, etc.). Provide the same Supabase env vars at deploy time. The `supabase` folder can also be deployed via hosted Postgres if desired; just ensure the SQL migrations are applied.
