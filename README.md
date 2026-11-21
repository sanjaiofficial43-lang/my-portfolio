# 🌌 Sanjay - Premium 3D Futuristic AI Developer Portfolio

An award-winning, cinematic personal portfolio built for **Sanjay**, an **AI Automation Specialist, Agentic AI Developer, Web Developer, and Creative Technologist**. Designed with an immersive dark-futuristic aesthetic, procedural 3D graphics in Three.js / React Three Fiber, and scroll-choreographed kinetic animations powered by GSAP ScrollTrigger and Lenis.

---

## ✨ Features & Architecture

### 1. Visual Direction & Identity
- **Dark Futuristic Palette**: Deep black background (`#050505`), midnight violet gradients, neon purple glows (`#a855f7`, `#c084fc`, `#e9d5ff`), and subtle cyber grid ambient backdrops.
- **Glassmorphism**: High-blur translucent panels with specular borders and glowing active states.
- **Modern Typography**: Scaled pairing of **Space Grotesk** (headings), **Inter** (body), and **JetBrains Mono** (telemetry, tags, and status pills).

### 2. Immersive 3D Experience (Three.js & React Three Fiber)
- **Procedural Cyber Sphere**: High-metallic distorted sphere with procedural noise (`MeshDistortMaterial`), glowing geometric wireframe shell, and 3 counter-rotating gyroscopic energy rings.
- **Floating Particle Swarm**: Dynamic instanced particle field reacting to mouse parallax coordinates.
- **Scroll Progression Integration**: As the user scrolls down, the 3D sphere rotates faster, scales smoothly, and recedes into depth while particles disperse outward.
- **Mobile & Fallback Optimization**: Automatically adjusts geometry fidelity and particle counts on mobile devices; includes an animated CSS gradient orb fallback if WebGL is unsupported.

### 3. Kinetic Scroll Choreography (GSAP ScrollTrigger & Lenis)
- **Lenis Smooth Scrolling**: Zero-jitter momentum scroll synchronized directly into the GSAP ticker loop.
- **Line-by-Line Reveals**: Staggered text entrances across the About narrative.
- **3D Card Transitions**: Skills and Project cards enter with 3D perspective transforms (`rotateX`, `depth scaling`).
- **Illuminated Vertical Timeline**: A continuous neon purple spine that progressively charges and reveals each milestone node as you scroll.
- **Cinematic Contact Bloom**: Soft purple ambient light lens flare blooms when scrolling into the transmission terminal.

---

## 🛠️ Technology Stack (100% Free & Open-Source)

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Kinetic Animations**: [GSAP 3](https://greensock.com/gsap/) + [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Momentum Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```
my-portfolio/
├── index.html                   # HTML entry point with Google Fonts preloads
├── vite.config.js               # Optimized Vite config with chunk splitting
├── package.json
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application structure & Lenis initialization
    ├── index.css                # Global futuristic theme, glassmorphism, & typography
    ├── data/
    │   └── portfolioData.js     # Central configuration for name, projects, skills & journey
    ├── utils/
    │   └── scrollManager.js     # Lenis + GSAP ScrollTrigger synchronization helper
    └── components/
        ├── Navbar.jsx           # Floating capsule glass navbar with mobile drawer
        ├── Hero.jsx             # Immersive hero section with telemetry & CTAs
        ├── About.jsx            # Philosophy, core competencies, & architecture pillars
        ├── Skills.jsx           # Interactive category filters & 3D tilt cards
        ├── Projects.jsx         # Featured works with dynamic visuals & architecture modals
        ├── Journey.jsx          # Progressive vertical timeline with glowing spine
        ├── Contact.jsx          # Direct transmission terminal & copyable protocol
        ├── Footer.jsx           # Back-to-summit button, credits & social links
        └── 3d/
            └── HeroScene.jsx    # React Three Fiber 3D canvas, cyber sphere, & particles
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory with code splitting.

---

## ⚙️ Customization Guide

All personal info and portfolio data can be customized in **`src/data/portfolioData.js`**:

1. **Your Name & Tagline**:
   Edit `PERSONAL_INFO.name` (currently placeholder `"[YOUR NAME]"`), email, LinkedIn, and GitHub links.
2. **Skills**:
   Update technologies and modules across `SKILL_CATEGORIES`.
3. **Projects**:
   Add or replace project details, demo links, and GitHub links in `PROJECTS_DATA`.
4. **Milestones**:
   Customize the 5-phase career progression in `JOURNEY_TIMELINE`.
