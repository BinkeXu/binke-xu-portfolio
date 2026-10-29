# Binke Xu — Portfolio Website & Engineering Showcase

A modern, high-performance personal portfolio website built with **React 19**, designed to ace the 30–45 second technical recruiter test. Highlights production data pipelines, cloud warehouses, local AI/RAG systems, and peer-reviewed IEEE research.

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Theme](https://img.shields.io/badge/Theme-Dark%20Mode%20Default-1e293b)](https://binkexu.github.io/binke-xu-portfolio/)
[![Status](https://img.shields.io/badge/Status-Permanent%20Resident%20(Full%20NZ%20Work%20Rights)-success)](https://www.linkedin.com/in/binke-xu-/)
[![Tests](https://img.shields.io/badge/Tests-Passing%20(100%25)-brightgreen)](https://github.com/BinkeXu/binke-xu-portfolio)
[![Changelog](https://img.shields.io/badge/Changelog-v2.1.0-blue)](CHANGELOG.md)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

---

## 🌟 Key Highlights & Architecture

### 1. 5-Second Recruiter Clarity & Default Dark Mode
- **Zero-Flash Dark Mode**: Default dark theme out-of-the-box (`<html data-theme="dark">`) with smooth light/dark SVG toggle.
- **Unrestricted Work Rights**: Prominently highlights **Wellington, NZ • Permanent Resident Visa (Full NZ Work Rights)**.
- **Verified Executive Metrics**: Floating stats bar showcasing **MSc Distinction**, **MS Azure Certified** (AZ-900 & AI-900), **2 Publications** (IEEE MIGARS & SSCI), and **Permanent Resident** status.

### 2. Flagship Hero Project Spotlight
- **Featured App**: *New Zealand Labour Market & Income Intelligence Dashboard*
  - **Live Demo**: [nz-labour-dashboard.vercel.app](https://nz-labour-dashboard.vercel.app/)
  - **Repository**: [GitHub Repository](https://github.com/BinkeXu/New-Zealand-Labour-Market-Income-Intelligence-Dashboard.git)
  - **3-Part Case Study**: The Challenge, The Solution, and Architecture & Performance Win (70% JavaScript bundle reduction via `React.lazy()` dynamic route splitting).

### 3. Viewport-Centered Project Modal Dialog
- **React Portal Overlay**: Replaced inline expansion with a focused, centered lightbox modal dialog mounted directly to `document.body` via `createPortal`.
- **Zero Coordinate Distortion**: Bypasses parent scroll-reveal CSS transforms, ensuring the modal is 100% dead-centered in the viewport regardless of scroll depth.
- **Complete Details**: Complete tech stack badges, key engineering features list, measurable highlights, and live demo / GitHub action links.
- **Smooth Dismissal**: Dismissible via top-right `×` button, backdrop click-outside, or the keyboard `Esc` key, locking background body scroll while open.

### 4. Consolidated Career & Education Journey
A clean, centered, full-width chronological timeline (`max-width: 860px`) bridging operational industry rigor with academic excellence:
- **June 2026 – Present**: **National Communications Officer** | *Access Community Health*
  - Manages nationwide healthcare operational triage, handling **60 quotes and mission-critical requests daily** under strict SLAs and rapid crisis escalation.
- **2023 – 2024**: **MSc in Artificial Intelligence (Grade A with Distinction)** | *Victoria University of Wellington*
  - Authored 2 peer-reviewed IEEE publications; engineered genetic algorithm neural architecture search (GA-U-Net-B) reducing model parameters by 95%.
- **Sep 2022 – Mar 2023**: **Research Assistant** | *Victoria University of Wellington & Landcare Research*
  - Engineered computer vision pipelines in PyTorch, OpenCV, and NumPy for semantic segmentation on high-resolution canopy data.
- **2018 – 2023**: **BE (Hons) in Software Engineering (Second Class Hons Div 1)** | *Victoria University of Wellington*
  - Core focus: Distributed Systems, Mobile & Web Development, Cloud Computing, UI/UX.

### 5. High-Impact 3-Pillar Technical Matrix & Certifications
- **Data Engineering & Cloud**: Google BigQuery, dbt, SQL, PostgreSQL, Microsoft Azure, Docker, Kubernetes, CI/CD, GitLab CI.
- **Machine Learning & AI**: Python, PyTorch, TensorFlow, OpenCV, Local RAG (Ollama / Llama 3.2), ChromaDB, LangChain, RAGAS, Pandas, NumPy, Genetic Algorithms.
- **Software Engineering & Web**: React 18/19, Vite, FastAPI, Node.js, JavaScript/TypeScript, Java, RESTful APIs, Git, Agile/Scrum.
- **Microsoft Verified Credentials**:
  - Microsoft Certified: Azure Fundamentals (AZ-900)
  - Microsoft Certified: Azure AI Fundamentals (AI-900)

### 6. Recruiter Convenience & Direct Channels
- **1-Click Copy**: Instant clipboard copy buttons for email (`Binkexu@gmail.com`) and phone (`+64 022 154 6027`) with transient **"Copied! ✓"** feedback.
- **Crisp Vector SVGs**: Scalable, accessible vector SVGs replacing platform-dependent emojis across all components.
- **Clickable Navbar Brand**: Return instantly to the hero section with a single click on "Binke Xu".

### 7. Modern Site Footer & Deep-Linking Hash Routing
- **Deep-Linking**: Direct URL navigation with browser back/forward history support (`#home`, `#skills`, `#projects`, `#publications`, `#contact`).
- **Smooth Scroll Reset**: Automatically executes smooth scroll-to-top on section switch.
- **Unified Footer**: Permanent anchor featuring quick navigation, verified work rights pill, social links, and a dedicated **"Back to Top ↑"** button.

---

## 🛠️ Performance & Code Quality Rigor

- **Asset Optimization**: High-resolution profile image compressed using Lanczos resampling from 6.22 MB to **644 KB** (89.6% payload reduction).
- **Decoupled Data Architecture**: All static datasets extracted to module scope, preventing object re-allocation and memory churn on every render.
- **React Portal Modals**: Encapsulated lightbox dialogs rendering into `document.body` for clean stacking contexts and true viewport coordinates.
- **Mobile-First UX**: Responsive horizontal scrollable pill navigation on mobile devices with native vector theme toggle (light/dark mode).
- **Automated Verification**: Comprehensive unit test suite with 100% pass rate.

---

## 📁 Repository Structure

```
my-website/
├── public/                 # Static assets, favicon, manifest
│   └── index.html          # HTML template with default dark mode data-theme
├── src/                    # Source code
│   ├── components/         # Modular React UI components
│   │   ├── Home.js         # Hero, Stats Bar & Full-Width Timeline
│   │   ├── Home.css        # Home layout and centered timeline styles
│   │   ├── Projects.js     # Flagship Showcase & React Portal Modal Dialog
│   │   ├── Projects.css    # Responsive project catalog & lightbox styling
│   │   ├── Skills.js       # 3-Pillar Bento Matrix & Azure Certifications
│   │   ├── Skills.css      # Bento grid and badge styling
│   │   ├── Publications.js # Peer-reviewed IEEE research papers
│   │   ├── Publications.css# Publications layout and author highlights
│   │   ├── Contact.js      # Contact channels, vector SVGs & 1-click copy
│   │   ├── Contact.css     # Contact cards and interactive actions
│   │   ├── Footer.js       # Unified footer with quick links & back-to-top
│   │   ├── Footer.css      # Footer layout and status pill styling
│   │   ├── Navbar.js       # Navigation bar & SVG theme toggle
│   │   └── Navbar.css      # Responsive nav styling & brand button reset
│   ├── img/                # Compressed visual assets (My-photo.png)
│   ├── logos/              # Technology brand SVG/PNG icons
│   ├── App.js              # Application hash routing & scroll engine
│   ├── App.css             # Global tokens, themes & custom scrollbar
│   ├── App.test.js         # Comprehensive automated integration test suite
│   ├── setupTests.js       # Jest DOM matchers & window.scrollTo mock
│   └── index.js            # React root mount
├── CHANGELOG.md            # Detailed version history and release notes
├── README.md               # Architecture documentation & quick start
└── package.json            # Dependencies and deployment scripts
```

---

## 💻 Local Development & Testing

### Prerequisites
- Node.js (v18+ recommended)
- npm

### 1. Clone & Install
```bash
git clone https://github.com/BinkeXu/binke-xu-portfolio.git
cd binke-xu-portfolio
npm install
```

### 2. Start Development Server
```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### 3. Run Automated Tests
```bash
npm test -- --watchAll=false
```
Executes the comprehensive Jest & React Testing Library test suite with 100% pass rate.

### 4. Create Production Build
```bash
npm run build
```
Generates an optimized, minified production release inside the `build/` directory (gzipped JavaScript: ~91 kB, CSS: ~8.5 kB).

---

## 📬 Contact & Links

- **Name**: Binke Xu
- **Role**: Software & Data Engineer
- **Location**: Wellington, New Zealand
- **Status**: Permanent Resident (Full NZ Work Rights)
- **Email**: [Binkexu@gmail.com](mailto:Binkexu@gmail.com)
- **Phone**: [+64 022 154 6027](tel:+640221546027)
- **LinkedIn**: [linkedin.com/in/binke-xu-](https://www.linkedin.com/in/binke-xu-/)
- **GitHub**: [github.com/BinkeXu](https://github.com/BinkeXu)

---

*Crafted with precision, high performance, and operational rigor.*
