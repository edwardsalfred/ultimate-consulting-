# How the Blog System Works

This is a quick guide to how new blog posts make it from a draft to your live website.

## The short version

1. You (or your team) write a blog post as a markdown file and save it in the **drafts** folder.
2. You give the post a **publish date** at the top of the file.
3. On that date, the system automatically moves the post from "drafts" to "published" and the site updates.
4. The new post appears on the blog page, sorted newest-first.

No manual publishing step. No logging into a CMS. Just write the post, set a date, push it to GitHub, and it goes live when it's time.

---

## Where posts live

Inside the project repository:

```
content/blog/
├── drafts/      ← write posts here
└── published/   ← system moves them here when their date arrives
```

You only ever need to touch `drafts/`. The `published/` folder is managed by the automation.

## What a post looks like

Every post is a single markdown file (`.md`). The file starts with a small block of "frontmatter" — settings between two `---` lines — and then the post content below it.

Example:

```markdown
---
title: "The ERP Business Case Presidents Actually Care About"
slug: "the-erp-business-case-presidents-actually-care-about"
publishDate: "2026-05-12"
image: "/blog-images/erp-business-case.png"
author: "Darryl Nash"
excerpt: "ERP modernization business cases need to connect technology investment to enrollment growth, compliance risk reduction, and financial sustainability."
category: "ERP Modernization"
---

Every ERP modernization project has a business case.

Most of them are written for the wrong audience.

...
```

### Frontmatter fields

| Field | What it does | Required? |
|---|---|---|
| `title` | The headline shown on the blog page and the post page. | Yes |
| `slug` | The URL of the post (`yoursite.com/blog/<slug>`). Use lowercase, dashes, no spaces. | Yes |
| `publishDate` | The date the post should go live, in `YYYY-MM-DD` format. | Yes |
| `image` | Path to the post's cover image (place the image in the `public/blog-images/` folder, then reference it as `/blog-images/yourfile.png`). | Recommended |
| `author` | Author name shown on the post. | Recommended |
| `excerpt` | Short blurb shown on blog cards and in search previews. If you leave it out, the system will auto-generate one from the first paragraph. | Optional |
| `category` | Category label shown on the post (e.g. "ERP Modernization"). Defaults to "General". | Optional |

Everything below the closing `---` is the body of the post, written in standard markdown (headings with `##`, bold with `**`, links with `[text](url)`, lists, etc.).

## How a post gets published

Once a draft is committed to GitHub with a `publishDate`, here's what happens behind the scenes:

1. An automated job runs on a schedule.
2. It looks through every file in `content/blog/drafts/`.
3. It finds the oldest post whose `publishDate` is today or earlier.
4. It moves that single post from `drafts/` to `published/` and commits the change.
5. The website automatically rebuilds and the post appears on the live site.

**Only one post is published per run.** If three drafts all become due on the same day, they'll be released one at a time on subsequent runs. That keeps the cadence steady instead of dumping multiple posts on the same day.

If no drafts are due, the job exits and nothing changes.

## Writing workflow (recommended)

1. Pick a filename for the post — usually the slug with `.md` on the end (e.g. `the-erp-business-case-presidents-actually-care-about.md`).
2. Create the file in `content/blog/drafts/`.
3. Fill in the frontmatter block at the top, including the `publishDate` you want.
4. Write the post body in markdown beneath the frontmatter.
5. Add any cover images to `public/blog-images/`.
6. Commit and push to GitHub.

That's it. Schedule out drafts weeks or months in advance — the system handles the timing.

## Tips and gotchas

- **Dates are in `YYYY-MM-DD` format**, in quotes. `"2026-06-01"` not `06/01/2026`.
- **Slugs need to be unique.** Two posts can't share the same slug.
- **A post with no `publishDate` is ignored.** It will never get published. This is a safe way to keep a work-in-progress in the drafts folder without risk.
- **Posts are sorted by `publishDate`, newest first**, on the blog page.
- **Drafts are not visible on the live site.** Only files in `published/` are bundled into the website.

## Where to find things

| What | Where |
|---|---|
| Draft posts | `content/blog/drafts/` |
| Live posts | `content/blog/published/` |
| Cover images | `public/blog-images/` |
| Publish automation | `.github/workflows/publish-blog.yml` |
| Publish script | `scripts/publish-blog.cjs` |

If you ever need to change the publishing schedule (e.g. run daily instead of on a specific day), that's controlled by the `cron` line in `.github/workflows/publish-blog.yml`.
