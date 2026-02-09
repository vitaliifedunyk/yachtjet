# YachtJet - TailwindCSS Rewrite & Extension

🌐 Читати: [English](README.md) | [Українською](README.uk.md)

## 📄 Description
YachtJet — це повністю незалежний адаптивний лендінг-проєкт для оренди розкішних яхт. Ця версія є TailwindCSS переписом і розширенням макета YachtJet, реалізованим як модульний frontend-проєкт для портфоліо.

## 🔗 Live Demo
Live demo: https://vitaliifedunyk.github.io/yachtjet/

## 🧩 Features
- Модульна структура сторінки з partial-блоками: `header`, `menu`, `hero`, `about`, `yacht-selection`, `benefits`, `rent-form`, `reviews`, `footer`
- Повністю адаптивний макет для mobile, tablet, laptop і desktop
- Мобільне off-canvas меню з overlay, анімаціями відкриття/закриття, stagger-анімацією елементів і блокуванням скролу сторінки
- Якірна навігація по секціях із плавним скролом
- Адаптивні зображення через `<picture>` з WebP і retina-джерелами (`1x/2x`)
- Картки яхт, блок переваг, відгуки клієнтів і соціальні посилання
- Клієнтська валідація форми оренди для обов'язкових полів (`full name`, `email`, `phone`) з очищенням форми після валідного надсилання

## 🛠 Tech Stack
- HTML5
- Tailwind CSS v4
- JavaScript (ES modules, vanilla JS)
- Vite 5
- Vite-плагіни: `@tailwindcss/vite`, `vite-plugin-html-inject`, `vite-plugin-full-reload`
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
└── README.uk.md
```

## 🚀 How to Run Locally
```bash
npm install
npm run dev
npm run build
npm run preview
```

## 🧠 What Was Implemented
- Зібрано повний UI лендінгу із семантичними секціями та повторно використовуваними HTML partials
- Реалізовано адаптивність через кастомні breakpoints Tailwind (`375/768/1280/1440`) і адаптивні відступи контейнера
- Додано інтерактивну JS-логіку для станів/анімацій мобільного меню та навігації по секціях
- Додано клієнтські перевірки форми (обов'язкові поля + валідність email) без бекенд-відправки
- Налаштовано Vite-пайплайн для інʼєкції partials, full reload при оновленні HTML partials і продакшн-збірки

## 👤 Author
**GoIT Student**  
GitHub: https://github.com/vitaliifedunyk
