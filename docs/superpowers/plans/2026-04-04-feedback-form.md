# Feedback Form Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/feedback` route to the Ultimate Consulting site with a polished change request form that submits directly to a central Notion database via a Vercel serverless function.

**Architecture:** React Router handles the `/feedback` client-side route. A Vercel serverless function at `api/feedback.ts` receives POST requests and calls the Notion REST API server-side, keeping the API key out of the browser. The form matches the approved screenshot design using the existing Tailwind + Framer Motion stack.

**Tech Stack:** React 19, Vite 6, TypeScript, Tailwind v4, Framer Motion, React Router DOM, Vercel Serverless Functions, Notion REST API

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| Modify | `vite.config.ts` | Add `/api` dev proxy |
| Modify | `src/main.tsx` | Wrap app in `BrowserRouter` |
| Modify | `src/App.tsx` | Add `Routes` + `/feedback` route |
| Create | `src/pages/FeedbackPage.tsx` | Full feedback form UI |
| Create | `api/feedback.ts` | Vercel serverless function → Notion |

---

### Task 1: Install React Router and Add Dev Proxy

**Files:**
- Modify: `package.json` (via npm install)
- Modify: `vite.config.ts`

- [ ] **Step 1: Install react-router-dom**

```bash
cd "c:/Users/edwar/OneDrive/Desktop/ultimate-consulting"
npm install react-router-dom
```

Expected: `added X packages` with no errors.

- [ ] **Step 2: Add the API proxy to vite.config.ts**

Replace the entire file with:

```ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
```

- [ ] **Step 3: Verify TypeScript is happy**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add vite.config.ts package.json package-lock.json
git commit -m "feat: install react-router-dom and add api dev proxy"
```

---

### Task 2: Wire Up React Router

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Wrap the app in BrowserRouter in main.tsx**

Replace the entire file with:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

- [ ] **Step 2: Add Routes to App.tsx**

At the top of `src/App.tsx`, add these imports after the existing imports:

```tsx
import { Routes, Route } from 'react-router-dom';
import FeedbackPage from './pages/FeedbackPage';
```

Then replace the `export default function App()` return with:

```tsx
export default function App() {
  return (
    <Routes>
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/*" element={
        <div className="min-h-screen bg-white font-sans">
          <Navbar />
          <Hero />
          <Partnerships />
          <Services />
          <Stats />
          <CTA />
          <Footer />
        </div>
      } />
    </Routes>
  );
}
```

- [ ] **Step 3: Verify TypeScript is happy (FeedbackPage doesn't exist yet — expect one error)**

```bash
npm run lint
```

Expected: one error about `./pages/FeedbackPage` not found. That's fine — Task 3 creates it.

- [ ] **Step 4: Commit**

```bash
git add src/main.tsx src/App.tsx
git commit -m "feat: add react router with /feedback route"
```

---

### Task 3: Create the Feedback Page UI

**Files:**
- Create: `src/pages/FeedbackPage.tsx`

- [ ] **Step 1: Create the pages directory and FeedbackPage component**

Create `src/pages/FeedbackPage.tsx` with the full contents below. This matches the approved screenshot — icon cards for request type, toggle pills for priority, text inputs, textarea, submit button with loading/success/error states.

```tsx
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Monitor, Palette, Bug, Sparkles, MoreHorizontal, Send } from 'lucide-react';

type RequestType = 'Content Change' | 'Design Tweak' | 'Bug / Issue' | 'New Feature' | 'Other';
type Priority = 'Low' | 'Medium' | 'High';
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const REQUEST_TYPES: { label: RequestType; description: string; icon: React.ElementType }[] = [
  { label: 'Content Change', description: 'Update text, images, or info', icon: Monitor },
  { label: 'Design Tweak', description: 'Colors, layout, or styling', icon: Palette },
  { label: 'Bug / Issue', description: 'Something isn\'t working right', icon: Bug },
  { label: 'New Feature', description: 'Add something new', icon: Sparkles },
  { label: 'Other', description: 'Anything else', icon: MoreHorizontal },
];

const PRIORITIES: Priority[] = ['Low', 'Medium', 'High'];

export default function FeedbackPage() {
  const [businessName, setBusinessName] = useState('');
  const [requestType, setRequestType] = useState<RequestType | null>(null);
  const [priority, setPriority] = useState<Priority>('Medium');
  const [pageSection, setPageSection] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !requestType || !description) return;

    setStatus('submitting');

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, requestType, priority, pageSection, description }),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Request Submitted!</h2>
          <p className="text-gray-500">Your request will be reviewed by our team and you'll see updates on its progress.</p>
          <button
            onClick={() => {
              setStatus('idle');
              setBusinessName('');
              setRequestType(null);
              setPriority('Medium');
              setPageSection('');
              setDescription('');
            }}
            className="mt-8 text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Submit another request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://4ucit.com/wp-content/uploads/2022/11/NAV-Logo-WHITE2-768x156.png"
            alt="Ultimate Consulting"
            className="h-8 invert brightness-0"
            referrerPolicy="no-referrer"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Submit a Change Request</h1>
        <p className="text-gray-500 text-center mb-8 text-sm">Tell us what you need and we'll take care of it.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Business Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Business Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={businessName}
              onChange={e => setBusinessName(e.target.value)}
              placeholder="e.g. Diamond D Boutique"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
            />
          </div>

          {/* Request Type */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              What Type of Change? <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {REQUEST_TYPES.map(({ label, description, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setRequestType(label)}
                  className={`flex flex-col items-center text-center p-3 rounded-xl border-2 transition-all cursor-pointer ${
                    requestType === label
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1.5" />
                  <span className="text-xs font-semibold leading-tight">{label}</span>
                  <span className="text-[10px] text-gray-400 mt-1 leading-tight hidden sm:block">{description}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Priority + Page Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Priority
              </label>
              <div className="flex rounded-xl border border-gray-200 overflow-hidden">
                {PRIORITIES.map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`flex-1 py-2.5 text-sm font-medium transition-all ${
                      priority === p
                        ? 'bg-amber-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Page / Section
              </label>
              <input
                type="text"
                value={pageSection}
                onChange={e => setPageSection(e.target.value)}
                placeholder="e.g. About, Contact"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Describe What You Need <span className="text-red-400">*</span>
            </label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              rows={5}
              placeholder="Please describe the change you'd like in as much detail as possible. Include any specific text, links, or references that will help us get it right the first time."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 resize-none"
            />
          </div>

          {/* Error */}
          {status === 'error' && (
            <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting' || !businessName || !requestType || !description}
            className="w-full bg-amber-700 hover:bg-amber-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Request
              </>
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            Your request will be reviewed by our team and you'll see updates on its progress.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles cleanly**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 3: Start dev server and visually verify the page**

```bash
npm run dev
```

Open `http://localhost:5173/feedback` in the browser. Verify:
- Form renders with all 5 request type cards
- Priority pills switch highlight when clicked
- Submit button is disabled until Business Name, Request Type, and Description are filled
- Clicking submit with fields empty does nothing

- [ ] **Step 4: Commit**

```bash
git add src/pages/FeedbackPage.tsx
git commit -m "feat: add feedback form UI with request type cards and priority pills"
```

---

### Task 4: Create the Vercel Serverless Function

**Files:**
- Create: `api/feedback.ts`

- [ ] **Step 1: Create the api directory and feedback.ts**

Create `api/feedback.ts`:

```ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { businessName, requestType, priority, pageSection, description } = req.body ?? {};

  if (!businessName || !requestType || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          'Business Name': {
            title: [{ text: { content: String(businessName) } }],
          },
          'Request Type': {
            select: { name: String(requestType) },
          },
          'Priority': {
            select: { name: String(priority || 'Medium') },
          },
          'Page/Section': {
            rich_text: [{ text: { content: String(pageSection || '') } }],
          },
          'Description': {
            rich_text: [{ text: { content: String(description) } }],
          },
          'Status': {
            status: { name: 'New' },
          },
          'Dated Submitted': {
            date: { start: new Date().toISOString().split('T')[0] },
          },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Notion API error:', error);
      throw new Error('Notion API error');
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Feedback submission error:', err);
    return res.status(500).json({ error: 'Failed to submit request' });
  }
}
```

- [ ] **Step 2: Install @vercel/node types**

```bash
npm install --save-dev @vercel/node
```

Expected: installed with no errors.

- [ ] **Step 3: Verify TypeScript compiles cleanly**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add api/feedback.ts package.json package-lock.json
git commit -m "feat: add vercel serverless function for notion integration"
```

---

### Task 5: End-to-End Test

**Files:** none (manual verification)

- [ ] **Step 1: Start Vercel dev server (not Vite) to test the function locally**

```bash
vercel dev
```

Expected: starts on `http://localhost:3000` with both the Vite frontend and the `/api/feedback` function available.

- [ ] **Step 2: Open the feedback page**

Navigate to `http://localhost:3000/feedback`.

- [ ] **Step 3: Submit a test request**

Fill in:
- Business Name: `Test Client`
- Request Type: click `Content Change`
- Priority: `High`
- Page / Section: `Home`
- Description: `Update the hero headline text to say Hello World`

Click **Submit Request**.

Expected:
- Button shows spinner while submitting
- Success screen appears with checkmark

- [ ] **Step 4: Verify the entry appeared in Notion**

Open the Notion database at `https://www.notion.so/e8acc04e1dd549ac9f778ea61551dd8c`.

Verify a new row appeared with:
- Business Name: `Test Client`
- Request Type: `Content Change`
- Priority: `High`
- Status: `New`
- Dated Submitted: today's date

- [ ] **Step 5: Test the main site route still works**

Navigate to `http://localhost:3000/`. Verify the homepage loads normally with navbar, hero, and all sections.

- [ ] **Step 6: Final commit**

```bash
git add .
git commit -m "feat: client change request system with notion integration complete"
```

---

### Task 6: Deploy to Vercel

**Files:** none

- [ ] **Step 1: Deploy to production**

```bash
vercel --prod
```

Expected: deployment URL printed. No build errors.

- [ ] **Step 2: Verify /feedback works on the live URL**

Open `https://<your-production-url>/feedback` and submit another test request. Confirm it lands in Notion.

- [ ] **Step 3: Done**

The system is live. Share `/feedback` with clients by giving them your site URL + `/feedback`.
