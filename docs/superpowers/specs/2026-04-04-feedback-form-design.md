# Design: Client Change Request System

**Date:** 2026-04-04
**Status:** Approved

## Overview

A `/feedback` page on the Ultimate Consulting website where clients submit website change requests. Submissions are sent securely to a Notion database via a Vercel Serverless Function, appearing as new rows in a Kanban board for the team to review and action.

## Architecture

```
Client browser
  └── visits /feedback
        └── FeedbackPage (React component)
              └── submits form → POST /api/feedback
                    └── Vercel Serverless Function (api/feedback.ts)
                          └── calls Notion API → creates page in DB
```

## Files

| File | Purpose |
|---|---|
| `api/feedback.ts` | Vercel Serverless Function — validates input, calls Notion REST API |
| `src/pages/FeedbackPage.tsx` | The `/feedback` route UI |
| `src/App.tsx` | Add React Router, register `/feedback` route |
| `vite.config.ts` | Proxy `/api` to local dev server |
| `.env.local` | Local secrets (gitignored) |
| `.env.example` | Committed template documenting required env vars |

## Environment Variables

```
NOTION_API_KEY        # Notion integration secret
NOTION_DATABASE_ID    # e8acc04e1dd549ac9f778ea61551dd8c
```

Set both in the Vercel dashboard (Production + Preview + Development) before deploying.

## Form Fields

| Field | UI | Required | Notion Property | Type |
|---|---|---|---|---|
| Business Name | Text input | Yes | `Business Name` | title |
| What type of change? | 5 icon cards (single-select) | Yes | `Request Type` | select |
| Priority | 3 toggle pills | No | `Priority` | select |
| Page / Section | Text input | No | `Page/Section` | rich_text |
| Describe what you need | Textarea | Yes | `Description` | rich_text |

**Auto-set on submission:**
- `Status` → `"New"`
- `Dated Submitted` → today's ISO date

**Request Type options:** Content Change, Design Tweak, Bug / Issue, New Feature, Other
**Priority options:** Low, Medium, High (default: Medium)

## Serverless Function (`api/feedback.ts`)

- Accepts `POST` only — returns 405 for all other methods
- Validates `businessName`, `requestType`, `description` are present — returns 400 if missing
- Reads `NOTION_API_KEY` and `NOTION_DATABASE_ID` from environment — never exposed to client
- Calls `POST https://api.notion.com/v1/pages` using native `fetch` (no SDK)
- Returns `{ success: true }` on success
- Returns `{ error: "Failed to submit request" }` on Notion API failure — never leaks raw error details

## Frontend (`src/pages/FeedbackPage.tsx`)

- Full-page layout with `from-slate-900 via-primary` gradient background matching existing site palette
- Centered white card with Ultimate Consulting logo at top
- Form states: idle → submitting (spinner on button) → success message | error message
- All validation client-side before POST

## React Router

- Install `react-router-dom`
- Wrap `App` in `<BrowserRouter>`
- Routes: `/` → existing `App` content, `/feedback` → `FeedbackPage`

## Vite Dev Proxy

```ts
// vite.config.ts
server: {
  proxy: {
    '/api': 'http://localhost:3000'
  }
}
```

## Notion Database

**Name:** Website Update Requests
**ID:** `e8acc04e1dd549ac9f778ea61551dd8c`

Verified schema matches all form fields. No changes needed to the existing database.

## Security

- Notion API key is server-only (Vercel env var), never shipped to the browser
- Serverless function rejects non-POST requests
- Input validation before Notion API call
- Error responses never expose internal details
