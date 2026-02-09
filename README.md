# YachtJet - TailwindCSS Rewrite & Extension

🌐 Read this in: [English](README.md) | [Українською](README.uk.md)

## 📄 Description
YachtJet is a fully independent, responsive landing page project for luxury yacht rentals. This version is a TailwindCSS rewrite and extension of the YachtJet layout, built as a modular frontend portfolio project with reusable sections and adaptive assets.

## 🔗 Live Demo
Live demo: https://vitaliifedunyk.github.io/yachtjet/

## 🧩 Features
- Modular page structure with partials: `header`, `menu`, `hero`, `about`, `yacht-selection`, `benefits`, `rent-form`, `reviews`, `footer`
- Fully responsive layout across mobile, tablet, laptop, and desktop breakpoints
- Mobile off-canvas menu with overlay, open/close transitions, staggered item animation, and body scroll lock
- Anchor navigation to page sections with smooth scrolling behavior
- Responsive images via `<picture>` with WebP and retina (`1x/2x`) sources
- Yacht catalog cards, benefits list, testimonial cards, and social links
- Client-side rent form validation for required fields (`full name`, `email`, `phone`) with form reset on valid submit

## 🛠 Tech Stack
- HTML5
- Tailwind CSS v4
- JavaScript (ES modules, vanilla JS)
- Vite 5
- Vite plugins: `@tailwindcss/vite`, `vite-plugin-html-inject`, `vite-plugin-full-reload`
- PostCSS + `postcss-sort-media-queries`

## 📁 Project Structure
```text
yachtjet/
├── src/
│   ├── index.html
│   ├── main.js
│   ├── css/style.css
│   ├── partials/
│   ├── img/
│   └── public/favicon.svg
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 How to Run Locally
```bash
npm install
npm run dev
npm run build
npm run preview
```

## 🧠 What Was Implemented
- Built a complete landing page UI with semantic sectioning and reusable HTML partials
- Implemented responsive behavior using custom Tailwind theme breakpoints (`375/768/1280/1440`) and adaptive container spacing
- Added interactive UI logic in JavaScript for mobile menu state/animation and section navigation
- Added client-side form checks (required fields + email validity) without backend submission
- Configured Vite build pipeline for partial injection, full reload on HTML partial updates, and production build output

## 👤 Author
**GoIT Student**  
GitHub: https://github.com/vitaliifedunyk
