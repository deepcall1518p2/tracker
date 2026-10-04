# My 43-Day Board Preparation Tracker

**Student:** Avinash  
**Date Range:** 4 October 2026 – 15 November 2026  
**Daily Study Target:** 4 hours (240 minutes) = 3 subject sessions × 80 minutes each  
**Technology:** React + TypeScript + Tailwind CSS (Vite Static SPA, zero-backend, zero-database, offline-ready with `localStorage` and JSON backup/restore).

---

## Features Built

1. **Complete 43-Day Plan (No Skipped Days or Tasks):**
   - Exact dates from 4 October through 15 November 2026.
   - Exactly 3 subject sessions every day (80 minutes each = 240 minutes total).
   - Chapter-specific tasks with textbook, NCERT, written practice, PYQs, tests, and corrections.
   - Standard 80-minute patterns: Theory-heavy, Maths/numerical, English/Hindi literature, IT practical, and Revision/Tests.

2. **Sequential Day Unlocking:**
   - **Day 1** is unlocked initially.
   - **Day 2** stays locked until all tasks in Day 1 are ticked off.
   - **Day N** unlocks only after Day N-1 is complete.
   - If an earlier day task is unchecked, subsequent days re-lock automatically.
   - Tasks on locked days are read-only and disabled to prevent accidental completion.
   - Celebratory confetti & unlock confirmation popup ("Day completed — next day unlocked!").
   - Optional "Free Mode" toggle for teachers or review without cheating.

3. **Progress Dashboard & Analytics:**
   - Real-time overall percentage calculated from actual checked tasks.
   - Completed tasks / total tasks counter.
   - Days completed / 43 counter.
   - Subject-wise progress bars for all 6 subjects: Maths, Science, Social Science, English, Hindi, and IT.
   - "Continue where I left off" shortcut button jumping straight to the active unlocked day.

4. **Syllabus Master Checklist (Part 4):**
   - Covers all Maths, Science (Biology, Physics, Chemistry), Social Science (Geography, Economics, Political Science, History), English (First Flight, Footprints, Grammar/Writing/Reading), Hindi (Literature, Grammar/Writing/Reading), and IT (Employability & Subject-Specific Skills).
   - Interactive cross-linking: click any day chip to jump directly to that date in the tracker.

5. **Student Mistake & Error Log:**
   - Record questions you got wrong with Subject, Chapter, Error Type (calculation, formula, concept, misreading, presentation), and Takeaway notes.
   - Track pending vs. resolved re-attempts.

6. **Automatic Persistence & Backup:**
   - Saves immediately to browser `localStorage` on any checkbox, note, or error log change.
   - Graceful fallback if localStorage is missing or corrupted.
   - **JSON Export / Import:** Full backup file download and copy/paste support.

---

## Step-by-Step GitHub Pages Deployment Guide

Follow these simple instructions to publish your personal tracker online using your own GitHub account:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **+** (plus) icon in the top-right corner and select **New repository**.
3. Name your repository (for example: `cbse-study-tracker`).
4. Ensure the repository visibility is set to **Public** (free GitHub Pages hosting requires a public repository on personal accounts).
5. Leave "Add a README file" **unchecked** (we already provide this README).
6. Click **Create repository**.

### Step 2: Build the Static Files
In your project directory, build the static files:
```bash
npm run build
```
This generates the optimized, production-ready static assets in the `dist/` directory.

> **Note for GitHub Pages subfolder hosting:**
> If your site is hosted at `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`, add `base: './'` or `base: '/cbse-study-tracker/'` to your `vite.config.ts`. In our project, `vite.config.ts` uses relative asset resolution so it works automatically on any subpath or custom domain!

### Step 3: Push Project Files to GitHub
Open your terminal in the project folder and run:
```bash
# Initialize git if not already initialized
git init

# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit for 43-Day CBSE Study Tracker"

# Set branch name to main
git branch -M main

# Link to your GitHub repository (replace with your actual GitHub username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/cbse-study-tracker.git

# Push the code
git push -u origin main
```

### Step 4: Enable GitHub Pages from Repository Settings
You can deploy using GitHub Actions (recommended for Vite projects):
1. In your GitHub repository, click on **Settings** tab at the top.
2. In the left navigation menu, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - Under **Source**, select **GitHub Actions**.
   - GitHub will offer a preset for **Static HTML** or **Vite**.
   - Alternatively, you can use the `gh-pages` npm package:
     ```bash
     npm install -D gh-pages
     npx gh-pages -d dist
     ```
   - If using `gh-pages` branch: In Settings > Pages, select **Deploy from a branch**, choose the `gh-pages` branch, select folder `/ (root)`, and click **Save**.

### Step 5: Open Your Published URL
Once the deployment workflow completes (usually 1–2 minutes):
1. Return to **Settings > Pages**.
2. You will see a banner: *"Your site is live at `https://YOUR_USERNAME.github.io/cbse-study-tracker/`"*.
3. Open this link on your phone, tablet, or laptop!

---

## How to Back Up and Restore Your Progress

Your checkboxes, notes, and error logs are automatically saved locally in your browser.

- **To Back Up:**
  1. Click the **Backup / JSON** button in the header.
  2. Click **Download JSON Backup** to save a `.json` file to your computer or phone.
  3. You can also click **Copy JSON to Clipboard**.
- **To Restore on Another Device or Browser:**
  1. Open your published website on the new device.
  2. Click **Backup / JSON**.
  3. Under section 2, upload your `.json` file or paste the JSON text.
  4. Click **Restore Progress**. All completed tasks, notes, and mistakes will be restored immediately!
