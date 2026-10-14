# Ayush Kumar — Developer Portfolio

A personal 3D animated portfolio for **Ayush Kumar**, B.Tech Computer Science and Engineering student at Kalinga University, Raipur (2024–2028).

## Verified Profile Information

- **Full Name:** Ayush Kumar
- **Role:** Computer Science & Engineering Student
- **University:** Kalinga University, Raipur, Chhattisgarh
- **Degree Period:** 2024–2028
- **Primary Passion:** Problem-solving & Computational Thinking
- **Phone:** [+91 7903686729](tel:+917903686729)
- **Email:** [ayushkr82678@gmail.com](mailto:ayushkr82678@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/ayush-kumar-56352632a/](https://www.linkedin.com/in/ayush-kumar-56352632a/)

---

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **3D Graphics:** Three.js with procedural PBR materials, RoomEnvironment studio reflections, and particle systems
- **Motion & UI Animation:** Motion (Framer Motion engine)
- **Icons:** Lucide React

---

## Local Development & Build

### 1. Installation
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
The compiled, production-ready static assets will be located in the `dist/` directory.

---

## Deploying to Vercel or Netlify

### Deploying to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Deploying to Netlify
1. Sign in to [Netlify](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Connect your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy site**.

---

## Customizing Content

All data is structured in modular, easily editable files:
- **Profile & Contact Details:** `src/data/profile.ts`
- **Technical Skills & Statuses:** `src/data/skills.ts`
- **Projects & Experiments:** `src/data/projects.ts`
- **Education Timeline:** `src/data/journey.ts`
