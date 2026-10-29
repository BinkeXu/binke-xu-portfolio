# Changelog

All notable changes to Binke Xu's Portfolio Website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.1.0] - 2026-10-29

### Added
- **Centered Project Modal Dialog**: Replaced inline card expansion with a focused, centered lightbox modal dialog mounted directly to `document.body` via React's `createPortal`, providing full viewport centering, blurred backdrop, ESC-key dismissal, and backdrop click-outside closing.
- **Deep-Linking Hash Routing**: Connected navigation state to `window.location.hash` with `hashchange` listeners, enabling browser back/forward history navigation and direct URL bookmarking (`/#projects`, `/#skills`, `/#contact`, etc.).
- **Automatic Smooth Scroll-to-Top**: Ensures the page automatically resets scroll position to top whenever active section changes.
- **Unified Site Footer**: Added a modern footer across all sections with identity branding, quick section navigation links, social channels, work rights status, and a smooth **"Back to Top ↑"** button.
- **1-Click Contact Copy Buttons**: Added quick-copy buttons for email (`Binkexu@gmail.com`) and phone (`+64 022 154 6027`) with a transient 2-second **"Copied! ✓"** feedback toast.
- **Default Dark Mode**: Configured the website to default to dark mode on initial load with zero white-flash by setting `<html data-theme="dark">` in `public/index.html`.

### Changed
- **Full-Width Centered Career & Education Timeline**: Eliminated the awkward 50/50 split layout and duplicate "About Me" column, converting the timeline into an elevated, centered single-column layout (`max-width: 860px`).
- **Concise Timeline Achievement Summaries**: Replaced lengthy bullet-point lists with high-impact single-paragraph summaries highlighting core metrics (60 quotes/day healthcare SLA triage, Grade A Distinction, 2 IEEE papers, GA-U-Net-B 95% parameter reduction).
- **Hero Stats Bar Refinement**: Updated stats bar labels to prominently feature `MS Azure Certified` (AZ-900 & AI-900) and `2 Publications` (IEEE MIGARS & SSCI).
- **Curated Project Catalog Streamlining**: Removed the duplicate *New Zealand Labour Market Dashboard* card from the catalog list to establish it as the exclusive Flagship Hero showcase.
- **Crisp Vector SVGs**: Replaced platform-dependent emojis (`📧`, `📱`, `📍`, `🎯`, `💡`, `⚡`) with scalable, accessible vector SVGs across Contact and Projects components.
- **Skill Icon Accuracy**: Introduced dedicated vector icons for `JavaScript / TS` and `RESTful API Design` in the Skills matrix, replacing borrowed React and FastAPI logos.
- **Clickable Navbar Brand**: Wrapped the portfolio brand title in an accessible button returning immediately to the Home section.

### Verification & Testing
- **Test Suite**: Expanded Jest & React Testing Library test suite in `src/App.test.js` to 6 comprehensive tests covering recruiter hooks, modal dialogs, skills matrix, publications, and footer interactions (100% pass rate).
- **Production Build**: Verified zero-warning production compilation (`npm run build`).

---

## [2.0.0] - 2026-09-23

### Added
- **Flagship Hero Project Spotlight**: Featured the *New Zealand Labour Market & Income Intelligence Dashboard* with 3-part case study (Challenge, Solution, Architecture Win).
- **Relocated Professional Experience**: Consolidated career roles alongside academic degrees into the unified Career & Education Journey timeline.
- **3-Pillar Skills Matrix**: Categorized technical expertise into Data Engineering & Cloud, Machine Learning & AI, and Software Engineering & Web, alongside Microsoft Azure certifications.
- **Year Range Sorting Engine**: Added regex-based `parseProjectYear` utility to accurately resolve multi-year projects (e.g. `2022 - 2024` ➔ `2024`).

### Performance
- **Image Optimization**: Compressed high-resolution portrait from 6.22 MB to 644 KB (89.6% reduction) using Lanczos resampling.
- **Static Decoupling**: Extracted static datasets to module scope outside React render cycles.
- **Timer Cleanup**: Added explicit `clearTimeout` cleanup handlers to prevent memory leaks during rapid card interactions.

---

## [1.0.0] - 2025-05-10

### Initial Release
- Initial release of personal portfolio website built with React and Glassmorphism design system.
