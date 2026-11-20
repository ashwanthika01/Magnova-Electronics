# Magnova website (Next.js + Node.js + SQLite)

Built from the Magnova presentation: same pages, copy, colours and logo.

## Run
```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start   # production
```
Needs Node 18.18+ (tested on Node 22). The SQLite database (`data/magnova.db`) is created and seeded
automatically on first request. Set `DATABASE_PATH` to store it elsewhere.

## Pages
- `/` Home: hero slider, profile carousel, feature strip, product range, about, vision/mission, capabilities, why choose us
- `/profile` Company profile, 4 detailed capability sections, ISO certifications, infrastructure
- `/products`, `/products/[slug]` Catalogue + 5 product pages (features, specs, applications, customisation, gallery)
- `/online-store`, `/cart` Store with filters, sorting, grid/list, cart and checkout (orders saved to SQLite)
- `/enquiry`, `/contact`, `/assistance` Product enquiry, contact + map, technical assistance + FAQ (file upload, 10 MB)
- `/blog`, `/blog/[slug]` Categories, search, pagination, newsletter subscribe
- `/login` Register / log in (scrypt hashing, HttpOnly session cookie)

## Backend (Node.js route handlers in `app/api`)
`POST /api/enquiries`, `POST /api/subscribe`, `POST /api/orders`, `/api/auth/{register,login,logout,me}`

Tables: enquiries, subscribers, users, sessions, store_products, orders, blog_posts (see `lib/db.js`).
Uploads go to `uploads/`. View submissions: `sqlite3 data/magnova.db "select * from enquiries"`.

## Editing content
- Copy, products, contact details: `lib/data.js`
- Store products and blog seed data: `lib/seed-data.js`
- Colours: CSS variables at the top of `app/globals.css`; images and logo in `public/images`

## Notes
- No payment gateway: orders are saved as `pending`.
- Address/phone/email are the placeholders from the PPT (`641 108`, `+91 9894662748`); replace in `lib/data.js`.
- No admin dashboard; add authentication before exposing enquiry/order data.
