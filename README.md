# Sohaib Rashid — 3D Developer Portfolio

An original, high-contrast, modern 3D developer portfolio designed and built from scratch for **Sohaib Rashid**: Web Developer, IoT Builder, and AI/ML Aspirant at MANUU Hyderabad.

---

## ⚡ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP (free `gsap` package)
- **3D Graphics**: Three.js, `@react-three/fiber`, and `@react-three/drei`
- **Icons**: Lucide React
- **Architecture**: Single Source of Truth (`src/data/portfolio.ts`)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```

---

## ✏️ How to Edit Content (`src/data/portfolio.ts`)

All personal details, text copy, project listings, certificates, skills, and links are decoupled into a **Single Source of Truth** at:

```
src/data/portfolio.ts
```

You can update your portfolio without touching any component code:
- **`personal`**: Your name, greeting, rotating roles, bio statement, and location.
- **`whatIDo`**: "Develop" and "IoT & Hardware" technical skills and items currently marked as "Learning".
- **`journey`**: Timeline milestones (Class 9 first IoT, Rajya Puraskar, live projects, MANUU, IIT Bombay Techfest, MANUU Coding Club).
- **`projects`**: Project cards, tags, descriptions, live demo links (or leave blank for `"Link coming soon"`).
- **`certificates`**: List of credentials, issuers, skills gained, and expected file names.
- **`skillsMarquee`**: Skills rotating in the continuous bottom marquee banner.
- **`social`**: Email, LinkedIn, GitHub, and LeetCode profiles.

---

## 👤 How to Add Your 3D Avatar

The portfolio features a smart 3D loader:

1. **Default Procedural Fallback**:
   If no custom 3D model is present, the hero renders an intricate, floating procedural 3D cyber core with electric blue lighting and mouse parallax—with zero console 404 errors.

2. **Loading Your Custom 3D Avatar**:
   - Export your 3D avatar as a `.glb` file (e.g. from Ready Player Me, Blender, or Mixamo).
   - Name it `avatar.glb`.
   - Place it in:
     ```
     public/models/avatar.glb
     ```
   - Refresh the page! The portfolio will automatically detect the file and render your custom avatar with gentle idle breathing and sway animations.

3. **Mobile Optimization**:
   On mobile screens and touch devices, heavy WebGL rendering is automatically bypassed to save battery and GPU memory. Instead, a clean, high-resolution stylized avatar card is rendered.

---

## 📜 Certificates & Resume Setup

- **Certificates**:
  Place your certificate PDF or image files in:
  ```
  public/certificates/
  ```
  Matching the names in `src/data/portfolio.ts` (e.g., `google-genai.pdf`, `rajya-puraskar.pdf`). When a user clicks a certificate, if the file exists, an "Open File" button is displayed; if not yet uploaded, it cleanly displays "File coming soon".

- **Resume**:
  Place your resume PDF in `public/Sohaib_Rashid_Resume.pdf`. The "Resume" button in the hero and top navigation opens an interactive modal and enables one-click download.

---

## 🎨 Look & Feel Highlights

- **Dark, High-Contrast Palette**: Pitch slate (`#07090e`) with electric blue (`#0066FF` / `#00d2ff`) accents.
- **Anti-Slop Discipline**: Clean unboxed metadata with typographic separators, zero pill-badge clutter, no fake version tags.
- **Desktop Custom Cursor**: Smooth lerp tracking with hover magnetism over interactive elements (automatically disabled on mobile and touch devices).
- **Horizontal Project Scroller**: Smooth snap scrolling with navigation arrows and keyboard accessibility.
- **SEO & Accessibility**: Complete OpenGraph meta tags, SVG favicon, and `prefers-reduced-motion` fallbacks.

---

Designed and developed by **Sohaib Rashid**.
