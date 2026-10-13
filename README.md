# Portfolio

A personal portfolio site: React (Vite + Tailwind CSS v4) frontend with a
Node/Express + MongoDB backend for the contact form.

## Project structure

```
frontend/   React + Vite + Tailwind portfolio UI
backend/    Express API + MongoDB (Mongoose) for contact form submissions
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at http://localhost:5173. The dev server proxies `/api/*` requests to
the backend at `http://localhost:5000` (see `vite.config.js`).

Replace the placeholder images (currently from picsum.photos/pravatar.cc)
in `src/components/Hero.jsx`, `Projects.jsx`, and `Testimonials.jsx` with
your own once you're ready. Add a real `resume.pdf` to `public/` for the
Resume download button to work.

## Backend

```bash
cd backend
cp .env.example .env   # then edit MONGO_URI / ADMIN_KEY
npm install
npm run dev
```

Runs at http://localhost:5000, requires a running MongoDB instance
(local or Atlas) at the `MONGO_URI` you set in `.env`.

- `POST /api/contact` — submit the contact form (`name`, `email`, `subject`, `message`)
- `GET /api/contact` — list submissions (requires header `x-admin-key: <ADMIN_KEY>`)
- `GET /api/health` — health check

## Notes

- Color theme, sections, and content are placeholders — tweak copy, colors
  (`frontend/src/index.css` `@theme` block), and skill/project data as needed.
- The name in the hero section ("Steven") has a typing animation
  (`AnimatedName.jsx`) — swap the name there.
- Dark/light mode toggle is in the navbar.
