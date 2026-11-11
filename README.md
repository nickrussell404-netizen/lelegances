# L'Elegance — website + private admin

A pre-order boutique site: customers browse or send any European link, get a price in ₾,
pay in advance, and track their order. The private admin handles orders, profit, products
and pricing — no spreadsheets.

## What's included
- **Public site:** home, shop (8 categories + winter collection), product pages with "Price on request",
  Order Anything from Europe form (link + photo), order tracking (order number + last 4 phone digits),
  how it works / delivery / returns, about & contact, Messenger button.
- **Admin (`/admin`):** overview, orders with status filters & search, order page with costs → automatic
  estimated & final profit, ready-to-copy Messenger messages, add orders manually, sales & profit
  (monthly / yearly / every sold item), products with photo upload, price calculator, settings
  (exchange rate, payment instructions, password).
- **Rules built in:** an order can't be marked paid/ordered without a customer price; profit stays
  "estimated" until the real Inex cost is entered; private data (costs, notes, supplier links) never
  reaches public pages; admin pages are locked on the server.

## Not included yet (honest list)
- **Card payments:** customers pay by bank transfer; you confirm payment in the admin. A Bank of Georgia
  or TBC card gateway can be added later.
- **Automatic Messenger notifications:** the admin gives you a ready message to copy into Messenger.
  Automatic sending needs a Facebook Page + Meta app approval.
- New orders show as a "new" badge in the admin (no email/phone alert).

## Put it online (Netlify)
1. Netlify → **Add new project → Import an existing project → GitHub** → pick this repo. Deploy.
2. In the project: **Data & storage → Database** (or Extensions → Neon) → create a database.
3. **Deploys → Trigger deploy → Deploy site.**
4. Open `your-site/admin` straight away and create your admin login (this screen only appears once).
5. In **Settings**, add your bank details and exchange rate.

No environment variables needed. Optional: `NEXT_PUBLIC_MESSENGER_URL` (your m.me link) shows a Messenger button.

## Before launching — check these texts
- Delivery time ("about 2–3 weeks") and the returns policy on `/how-it-works` are placeholders —
  edit `app/(site)/how-it-works/page.js` to match how you really work.

## Run it on your own computer
`cp .env.example .env` (fill it in) → `npm install` → `npm run db:setup` → `npm run dev` → http://localhost:3000
