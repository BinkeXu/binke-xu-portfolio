# Portfolio Website - Project Summary (V2 Redesign)

## 📋 Project Overview

**Project Name**: Binke Xu Portfolio Website  
**Type**: Personal Portfolio Website  
**Version**: 2.0 (Modernized & Optimized)
**Technology Stack**: React.js 19, CSS3 (Modern Grid/Flex), HTML5  
**Design Language**: Glassmorphism / Premium Academic
**Deployment**: GitHub Pages  
**Status**: Live & Updated

## 🎯 Project Purpose

This portfolio serves as a centralized professional hub for Binke Xu, effectively communicating:
- **Academic Prowess**: MS in Artificial Intelligence.
- **Technical Versatility**: Full-stack engineering and AI/ML specialization.
- **Research Impact**: IEEE publications and international conference contributions.
- **Professional Readiness**: Direct contact methods and downloadable CV.

## 🏗️ Architecture & Component Logic

### **Structural Components**
```
App.js
├── Navbar.js (Glass navbar with sticky positioning)
└── View Engine (Conditional Rendering via state)
    ├── Welcome.js (The Entrypoint Overlay)
    ├── Home.js (Split Hero + Stats + Education Timeline)
    ├── Skills.js (Categorized Bento Grid Showcase)
    ├── Projects.js (Interactive Masonry Grid + Scaling logic)
    ├── Publications.js (Academic Meta-Grid + Highlight logic)
    └── Contact.js (Direct Link Grid + Social Connect)
```

## 🎨 Design Philosophy - V2 Changes

### **The "Glassmorphism" Core**
- **Surfaces**: Replaced solid cards with backdrop-filter: blur(12px) surfaces for a sleek, layered look.
- **Borders**: Subtle 1px translucent borders to define segments without clutter.

### **Typography & Color**
- **Headers**: Shifted to "Outfit" for a bold, geometric professional look.
- **Body**: "Inter" for high-legibility across different languages and platforms.
- **Color**: Professional Blue palette with slate neutrals. No more golden/orange for the main site.

## 🚀 Key Features (Updated)

### **1. Bento Grid Skills**
- Modern non-linear grid that categorizes skills based on domains (AI, Engineering, Soft Skills).
- Adaptive scaling for mobile devices.

### **2. Interactive Project Gallery**
- **Auto-Center Expand**: Clicking a project expands it to feature-focus and smoothly scrolls it to the middle of the screen.
- **Truncated Descriptions**: Collapsed cards show 5 lines max to maintain grid uniformity.
- **Uniform Height**: Fixed card heights (520px) ensure the layout stays clean regardless of content length.

### **3. Academic Data Engine**
- Publications feature a meta-grid structure for academic venues.
- Logic in JS automatically highlights "Binke Xu" in author lists using conditional rendering.

### **4. UX Optimizations**
- **Hidden Scrollbars**: Global styles hide the standard scrollbar for a "web app" feel.
- **Reduced Spacing**: Tightened margins (40px-60px) to reduce scrolling fatigue.

## 🔧 Technical Implementation (Internal)

- **State Management**: React `useState` for filter management and expansion tracking.
- **Effects**: `useEffect` and `setTimeout` for scroll-to-center animation timing.
- **Compatibility**: Standardized `line-clamp` and `background-clip` for modern browser adherence.
- **Data-Driven**: Heavy use of arrays for content allows for quick updates to projects or skills.

## 📊 Deployment Info

- **Branch**: `master`
- **Deploy Command**: `npm run deploy`
- **URL**: [https://binkexu.github.io/binke-xu-portfolio/](https://binkexu.github.io/binke-xu-portfolio/)

---

**This version marks a significant visual and structural upgrade from the original design, transitioning from a basic template style to a bespoke, premium professional presence.**
