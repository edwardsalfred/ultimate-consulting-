# Ultimate Consulting — WordPress theme (Phase 1 scaffold)

This folder is a self-contained WordPress theme converted from the React/Vite source code in this repo.
It's only the **scaffold** — homepage, header, footer, single blog post, and archive listing. The
remaining pages (Higher Education, Who We Are, Contact, Terms, Privacy, the three Service pages, etc.)
are Phase 2.

## What's in this scaffold

```
ultimate-consulting/
  style.css              ← theme metadata
  functions.php          ← asset enqueue, theme setup, helpers
  header.php             ← Navbar.tsx -> PHP (sticky, megamenu, mobile menu)
  footer.php             ← Footer.tsx -> PHP (logo, GHL newsletter iframe, links)
  front-page.php         ← App.tsx homepage (Hero, Carousel, Partnerships, Services, Stats, CTA)
  single.php             ← blog post template (existing posts get the new look)
  archive.php            ← blog listing (replaces InsightsPage.tsx)
  index.php              ← generic fallback
  assets/
    js/main.js           ← navbar, mobile menu, scroll reveals, stat counters
    css/custom.css       ← marquee, blob animations, blog typography
    img/                 ← drop logos here (see step 3 below)
```

## Install

1. **Zip the folder.** Compress `ultimate-consulting/` into `ultimate-consulting.zip`.
2. **Upload via WP Admin.** *Appearance → Themes → Add New → Upload Theme → Activate.*
3. **Drop in the logos.** Copy these files from the React project's `public/` folder into the theme's
   `assets/img/` folder:
   - `CONSULTINGfinal.png` (required — site logo)
   - `ellucian.png` (partnerships section)
   - `oracle.png` (partnerships section)
4. **Create the static pages** in *Pages → Add New* with these slugs (Phase 2 templates will look for them):
   - `who-we-are`, `higher-education`, `contact`, `terms`, `privacy-policy`, `feedback`,
   - `services/enterprise-system-strategy`, `services/process-improvement`, `services/change-management`
5. **Set the homepage.** *Settings → Reading → Your homepage displays → A static page → Homepage = the
   page you want as the front, Posts page = e.g. "Insights".* (Or leave the default and `front-page.php`
   will still render at `/`.)
6. **Set permalinks.** *Settings → Permalinks → Post name.*

## What renders today

- `/` — full homepage (Hero, customer logo carousel, partnerships, services, stats, CTA).
- Any blog post (single) — uses the new dark-hero header + typography styling.
- `/insights` (or whatever you set as the posts page) — modern card grid pulled from your existing posts.
- All other URLs render `index.php` (= archive layout) until Phase 2 adds page templates.

## Things to know

- **Tailwind is loaded via the Play CDN** (`functions.php` → `uc_tailwind_cdn`). This is fine for
  testing and visual review, but it shows a console warning and is slower than a proper build. Before
  going to production, swap to a real Tailwind build (instructions inline in `functions.php`).
- **Lucide icons** are loaded via CDN and replace `<i data-lucide="..."></i>` tags at runtime.
- **The megamenu items are hardcoded in `header.php`** to mirror the React `NAV_ITEMS` array. If you
  want to manage the menu from *Appearance → Menus* later, that's a small refactor.
- **The GHL newsletter iframe is preserved as-is** in the footer, including the form ID and embed
  loader script.
- **No blog post data was migrated.** This theme expects to be installed on the existing WP site that
  already has the blog posts; `single.php` and `archive.php` just style what's there.

## Phase 2 (still to do)

Page templates for: Higher Education, Who We Are, Contact, Feedback, Terms, Privacy, and the three
Service pages. Once you confirm the scaffold's look and behavior match what you want, I'll generate
those.
