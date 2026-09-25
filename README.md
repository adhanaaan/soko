# Clarity: prelaunch website

Landing page for **Clarity**, a small-group executive brain health retreat at
Montigo Resorts Nongsa, Batam (proposed 20–22 November 2026), organised by Soko
with Montigo (hospitality) and Gray Matter Solutions (brain health).

Built with Next.js 16 (App Router) and plain CSS. No UI or animation libraries.

## Run it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Other checks:

```bash
npm run lint
npm run typecheck
npm run build && npm start   # production build on http://localhost:3000
```

In development, "Photo needed" labels show on image placeholders, and
priority-list sign-ups are saved to `.data/priority-list.jsonl` so you can test
the form. Neither happens in production.

## Editing content

**Everything changeable lives in [`src/content/site.ts`](src/content/site.ts)**:
dates, venue, partner names, calls to action, the programme, FAQ, copy,
contact email, images and pricing. It's a plain TypeScript object, a lot like a
Python dict. Change a string, save, and the page updates.

- **Pricing** stays hidden until `pricing.showPricing` is set to `true`. When
  hidden, the page says "Join the priority list for first access when bookings
  open". Prices never appear in metadata or the share image.
- **Page sections** (in order): `hero`, `problem`, `offer`, `weekend`
  (the full session list sits behind "See the full schedule"), `moments`,
  `science`, `faq`, `signup`. Keep each one short: one idea per section.
- **Evidence boundary**: `science.note` must stay visible wherever the
  FINGER trial is mentioned.
- **Photos**: put an approved image in `public/images/` and set `src` on
  `images.place` (for example `src: "/images/villa.jpg"`). Until then, a
  line-art placeholder is shown.
- **Colours and type** are CSS variables at the top of
  [`src/app/globals.css`](src/app/globals.css). Visual direction: clean
  warm near-white canvas with soft morning-light gradients, Geist + Geist
  Mono for structure, Instrument Serif italic for one accent phrase per
  heading (wrap it in `*asterisks*` in the content file), pill-shaped
  buttons and tags, Soko palette as ink and accents.

## Deploying to Vercel

1. Push this repo to GitHub and import it in Vercel (**Add New → Project**).
   The Next.js settings are detected automatically.
2. Add environment variables (**Settings → Environment Variables**):
   - `PRIORITY_LIST_WEBHOOK_URL` and `PRIORITY_LIST_WEBHOOK_SECRET`: see
     [docs/priority-list-setup.md](docs/priority-list-setup.md). **Without
     these, the live form refuses sign-ups and asks people to email instead.**
   - `NEXT_PUBLIC_SITE_URL`: your final domain, e.g. `https://clarity.soko.sg`
     (used for share links; defaults to the Vercel URL).
   - `NEXT_PUBLIC_ALLOW_INDEXING=true`: only when you're ready for search
     engines. Until then the site sends `noindex`.
3. Deploy.

## Project layout

```
src/content/site.ts          all copy, facts, pricing flag, image slots
src/app/page.tsx             the landing page sections
src/app/globals.css          design tokens + styles
src/app/api/priority-list/   sign-up endpoint (validation, honeypot)
src/lib/priority-list.ts     storage adapter (webhook / local dev file)
src/components/              header, sign-up form, art + image slots
src/app/privacy/             draft privacy notice
src/app/opengraph-image.tsx  generated share image (no pricing)
docs/                        priority-list setup + Google Apps Script
```

## Before launch

**Placeholders:** any text in `[square brackets]` in `src/content/site.ts`
shows highlighted on the live page. Search the file for `[` and replace each
one: clinician names, titles, bios and photos (`guides`), what each
assessment measures (`measures`), ferry times (`weekend.timing`), villa
pairing (FAQ), the group-booking line (`signup.corporate`), the guarantee
(`offer.guarantee`) and the bookings-open date (`offer.scarcity`).


Content awaiting confirmation (all in `src/content/site.ts`):

- [ ] Dates 20–22 Nov 2026 confirmed by all partners (`event.dates.confirmed`)
- [ ] Programme, sessions and timings (currently labelled "proposed")
- [ ] Inclusions: transport, CGM, what's in the package
- [ ] Accommodation basis: shared two-bedroom villas, room arrangements
- [ ] Pricing approved, then set `showPricing: true`
- [ ] The 20-day follow-through: delivery channel (`after.channelNote`)
- [ ] Partner approval of how Montigo and Gray Matter Solutions are described
- [ ] Assessment name spelling: ReCOGnAIze

Assets and integrations still needed:

- [ ] Contact email (currently the placeholder `hello@soko.example`)
- [ ] Priority-list storage connected (docs/priority-list-setup.md)
- [ ] Privacy notice reviewed (it's a draft; check against Singapore's PDPA)
- [ ] A wide hero photo for `images.hero` (sunrise over the sea at Nongsa,
      space for text on the left). Until then an illustrated scene is shown.
- [ ] Four licensed "moments" photos for `moments.items` (set each `src`):
      sunrise walk, long lunch, a guest resting, guests talking. Show a mixed group of men and
      women, roughly 40–60, in warm natural light
- [ ] Partner logos, only if supplied for use
- [ ] Soko wordmark file (currently set in type)
- [ ] Final domain, then set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_ALLOW_INDEXING`
- [ ] Optional: a photograph-led share image to replace the generated one
