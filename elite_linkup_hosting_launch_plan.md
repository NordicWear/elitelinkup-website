# EliteLinkup – Hosting & Launch Plan

## Goal
Launch the EliteLinkup website **as soon as possible**, start promoting the landing page, and progressively add videos, login, and automation **without rebuilding or breaking the site**.

This plan prioritizes:
- Simplicity
- Speed to launch
- Scalability later
- Minimal DevOps complexity

---

## Core Architecture (Approved Stack)

### 1. Hosting (Frontend)
**Service:** Cloudflare Pages

**What it hosts:**
- `elitelinkup.com` → Marketing / Landing Page
- `app.elitelinkup.com` → Course App (HTML/CSS/JS)

**Why:**
- Perfect for hardcoded websites
- Free SSL + global CDN
- No servers to manage
- Easy updates (redeploy when code changes)

The existing site structure works **as-is**.

---

### 2. Video Hosting
**Service:** Cloudflare Stream

**What it hosts:**
- All course lesson videos
- Trailer videos

**Why:**
- Automatic encoding for all devices
- Secure streaming (no raw MP4 exposure)
- Scales automatically
- Simple embed URLs

Videos are **not stored inside the website files**.

---

### 3. Backend / Automation (Phase 2 – Later)
**Service:** Firebase

**Used for:**
- User authentication (login / signup)
- User database
- Course access permissions
- Automation logic

**Important:**
- No custom server needed initially
- Frontend talks directly to Firebase via JavaScript
- DigitalOcean is **not required at launch**

---

## Launch Phases

### Phase 1 – Immediate Launch (No Videos Required)

**Status:** Ready now

Actions:
- Deploy landing page to Cloudflare Pages
- Deploy course app UI to `app.elitelinkup.com`
- Remove or replace video players with placeholders (e.g. "Lesson coming soon")

Result:
- Site is live
- Can promote immediately
- No broken pages

---

### Phase 2 – Add Videos

When editors deliver final videos:

Actions:
1. Upload videos to Cloudflare Stream
2. Copy Stream embed URLs
3. Replace placeholders or `lesson.mp4` references in lesson HTML
4. Redeploy site

Result:
- Videos appear instantly
- No downtime
- No restructuring

---

### Phase 3 – Login & Access Control

Actions:
- Add Firebase Authentication
- Protect `app.elitelinkup.com` routes via JavaScript
- Store user access in Firestore

Example logic:
- Logged-out users → redirected to login page
- Logged-in users → access based on purchased courses

---

### Phase 4 – Payments & Automation

Actions:
- Integrate Stripe checkout
- Use Firebase Functions + Stripe webhooks
- Automatically grant course access after payment

---

## What This Plan Avoids

- Running servers manually
- Early DevOps complexity
- Lock-in to heavy infrastructure
- Rebuilding the site later

---

## Key Principles

- The site remains **hardcoded forever**
- Logic is added via JavaScript + Firebase
- Videos are streamed, not hosted locally
- Infrastructure grows only when needed

---

## Final Verdict

This setup:
- Is modern and professional
- Matches how successful course platforms are built
- Allows immediate launch
- Scales cleanly over time

**Status:** Approved and ready to execute
