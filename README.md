# Binke Xu — Portfolio Website & Engineering Showcase

A modern, high-performance personal portfolio website built with **React 19**, designed to ace the 30–45 second technical recruiter test. Highlights production data pipelines, cloud warehouses, local AI/RAG systems, and peer-reviewed IEEE research.

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Status](https://img.shields.io/badge/Status-Permanent%20Resident%20(Full%20NZ%20Work%20Rights)-success)](https://www.linkedin.com/in/binke-xu-/)
[![Tests](https://img.shields.io/badge/Tests-Passing%20(100%25)-brightgreen)](https://github.com/BinkeXu/binke-xu-portfolio)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

---

## 🌟 Key Highlights & Architecture

### 1. 5-Second Recruiter Clarity
- **Direct Landing**: Loads immediately to the professional Home overview without blocking splash screens.
- **Unrestricted Work Rights**: Prominently highlights **Wellington, NZ • Permanent Resident Visa (Full NZ Work Rights)**.
- **Verified Metrics**: Floating executive stats bar showcasing MSc AI (Distinction), 2x Microsoft Azure certifications, and 2 IEEE conference publications.

### 2. Flagship Hero Project Spotlight
- **Featured App**: *New Zealand Labour Market & Income Intelligence Dashboard*
  - **Live Demo**: [nz-labour-dashboard.vercel.app](https://nz-labour-dashboard.vercel.app/)
  - **Repository**: [GitHub Repository](https://github.com/BinkeXu/New-Zealand-Labour-Market-Income-Intelligence-Dashboard.git)
  - **3-Part Case Study**: The Challenge, The Solution, and Architecture & Performance Win (70% JavaScript bundle reduction via `React.lazy()` dynamic route splitting).

### 3. Consolidated Career & Education Journey
A unified chronological timeline bridging operational industry rigor with academic excellence:
- **June 2026 – Present**: **National Communications Officer** | *Access Community Health*
  - Manages high-volume operational triage handling **60 quotes and requests every day** under strict SLAs.
  - Rapid crisis escalation protocols resolving urgent clinical and operational service delivery bottlenecks.
- **2023 – 2024**: **MSc in Artificial Intelligence (Grade A with Distinction)** | *Victoria University of Wellington*
  - Authored 2 peer-reviewed IEEE publications; engineered genetic algorithm neural architecture search (GA-U-Net-B) reducing model parameters by 95%.
- **Sep 2022 – Mar 2023**: **Research Assistant** | *Victoria University of Wellington & Landcare Research*
  - Engineered computer vision pipelines in PyTorch, OpenCV, and NumPy for semantic segmentation on high-resolution canopy data.
- **2018 – 2023**: **BE (Hons) in Software Engineering (Second Class Hons Div 1)** | *Victoria University of Wellington*
  - Core focus: Distributed Systems, Mobile & Web Development, Cloud Computing, UI/UX.

### 4. High-Impact 3-Pillar Technical Matrix & Certifications
- **Data Engineering & Cloud**: Google BigQuery, dbt, SQL, PostgreSQL, Microsoft Azure, Docker, Kubernetes, CI/CD, GitLab CI.
- **Machine Learning & AI**: Python, PyTorch, TensorFlow, OpenCV, Local RAG (Ollama / Llama 3.2), ChromaDB, LangChain, RAGAS, Pandas, NumPy, Genetic Algorithms.
- **Software Engineering & Web**: React 18/19, Vite, FastAPI, Node.js, JavaScript/TypeScript, Java, RESTful APIs, Git, Agile/Scrum.
- **Microsoft Verified Credentials**:
  - Microsoft Certified: Azure Fundamentals (AZ-900)
  - Microsoft Certified: Azure AI Fundamentals (AI-900)

### 5. Curated Project Catalog & Case Studies
- **Strategic Categorization**: Filter by *All Projects*, *Data & ML Systems*, *Full-Stack & Systems*, *Research Projects*, or *Academic Projects*.
- **Interactive Expansion**: Click any card to expand full challenge, architecture, key features, and measurable impacts, with auto-centering viewport scroll.
- **Featured Projects**:
  - *E-Commerce Customer Churn Prediction* (BigQuery + dbt Medallion Warehouse, FastAPI, Docker, 0.89 AUC)
  - *Restaurant Intelligence System* (100% Local-first RAG with Llama 3.2 via Ollama, ChromaDB, FlashRank)
  - *Supply Chain Inventory Optimisation* (ABC-XYZ segmentation for 30,000+ SKUs, dynamic safety stock)
  - *Job Application Lifecycle Manager* (C# .NET 8.0 background service + Python GUI + SQLite WAL)
  - *Tree Image Segmentation* (Genetic Algorithm NAS + DeepLabV3+/LinkNet ensemble)

### 6. Peer-Reviewed Academic Publications
- **IEEE MIGARS 2024**: *Ensemble learning based on neural networks for tree image segmentation* ([DOI: 10.1109/MIGARS61475.2024.10543666](https://doi.org/10.1109/MIGARS61475.2024.10543666))
- **IEEE SSCI 2022**: *Automatically designing u-nets using a genetic algorithm for tree image segmentation* ([DOI: 10.1109/SSCI51031.2022.10022204](https://doi.org/10.1109/SSCI51031.2022.10022204))

---

## 🛠️ Performance & Code Quality Rigor

- **Asset Optimization**: High-resolution profile image compressed using Lanczos resampling from 6.22 MB to **644 KB** (89.6% payload reduction).
- **Decoupled Data Architecture**: All static datasets extracted to module scope, preventing object re-allocation and memory churn on every render.
- **Memory-Safe Interactions**: Card expansion scroll timeouts include explicit `clearTimeout` cleanups to prevent race conditions during rapid user interaction.
- **Mobile-First UX**: Responsive horizontal scrollable pill navigation on mobile devices with native vector theme toggle (light/dark mode).
- **Subtle Spatial Orientation**: Translucent custom scrollbar maintaining visual orientation during long case study reviews.

---

## 📁 Repository Structure

```
my-website/
├── public/                 # Static assets, favicon, manifest
├── src/                    # Source code
│   ├── components/         # Modular React UI components
│   │   ├── Home.js         # Hero, Stats Bar & Career/Education Timeline
│   │   ├── Home.css        # Home layout and timeline styles
│   │   ├── Projects.js     # Flagship Showcase & Project Catalog
│   │   ├── Projects.css    # Interactive case study card styling
│   │   ├── Skills.js       # 3-Pillar Bento Matrix & Azure Certifications
│   │   ├── Skills.css      # Bento grid and badge styling
│   │   ├── Publications.js # Peer-reviewed IEEE research papers
│   │   ├── Publications.css# Publications layout and author highlights
│   │   ├── Contact.js      # Contact channels & NZ work rights
│   │   ├── Contact.css     # Contact cards and interactive actions
│   │   ├── Navbar.js       # Navigation bar & SVG theme toggle
│   │   ├── Navbar.css      # Responsive nav styling & mobile pill bar
│   │   ├── Welcome.js      # Minimalist splash screen entry
│   │   └── Welcome.css     # Splash animations & color palette
│   ├── img/                # Compressed visual assets (My-photo.png)
│   ├── logos/              # Technology brand SVG/PNG icons
│   ├── App.js              # Application routing & state engine
│   ├── App.css             # Global tokens, themes & custom scrollbar
│   ├── App.test.js         # Comprehensive automated integration test suite
│   ├── setupTests.js       # Jest DOM matchers setup
│   └── index.js            # React root mount
└── package.json            # Dependencies and scripts
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
Generates an optimized, minified production release inside the `build/` directory (gzipped JavaScript: ~91 kB, CSS: ~8 kB).

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
