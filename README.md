# YachtJet - Luxury Yacht Rental Landing Page

A landing page for luxury yacht rentals, built using **Tailwind CSS** for
modern, utility-first styling.

## Live Demo

The live project can be found at: **https://vitaliifedunyk.github.io/yachtjet/**

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vitaliifedunyk/yachtjet.git
   cd yachtjet
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

#### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The project will be available at `http://localhost:5173` (or the port shown in
the terminal).

#### Build for Production

The project is automatically built and deployed to GitHub Pages via GitHub
Actions when you push changes to the `main` branch. No manual build step is
required.

If you want to test the production build locally:

```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

#### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Automatic Deployment

The project uses GitHub Actions for continuous deployment. Every push to the
`main` branch automatically:

- Installs dependencies
- Builds the project
- Deploys to GitHub Pages

The deployment workflow is configured in `.github/workflows/deploy.yml`.

---

## Technologies Used

- **Vite** - Build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **HTML5** - Markup structure
- **JavaScript (ES6+)** - Interactive functionality
- **Vite Plugins** - HTML inject, full reload, PostCSS sort media queries

---

## Project Structure

```
yachtjet/
├── src/
│   ├── css/          # Styles and Tailwind configuration
│   ├── img/          # Images and assets (responsive, retina support)
│   ├── partials/     # HTML partials/components
│   │   ├── header.html
│   │   ├── menu.html
│   │   ├── hero.html
│   │   ├── about.html
│   │   ├── yacht-selection.html
│   │   ├── benefits.html
│   │   ├── rent-form.html
│   │   ├── reviews.html
│   │   └── footer.html
│   ├── index.html    # Main HTML file
│   └── main.js       # Main JavaScript file
├── public/           # Static assets
├── package.json      # Project dependencies and scripts
└── vite.config.js    # Vite configuration
```

---

# YachtJet - Лендінг для Оренди Розкішних Яхт

Лендінг для оренди розкішних яхт, побудований з використанням **Tailwind CSS**
для сучасного, utility-first стилювання.

## Демо

Живий проект знаходиться за адресою:
**https://vitaliifedunyk.github.io/yachtjet/**

---

## Початок Роботи

### Вимоги

- Node.js (рекомендовано v18 або вище)
- npm або yarn менеджер пакетів

### Встановлення

1. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/vitaliifedunyk/yachtjet.git
   cd yachtjet
   ```

2. Встановіть залежності:
   ```bash
   npm install
   ```

### Запуск Проекту

#### Режим Розробки

Запустіть сервер розробки з hot module replacement:

```bash
npm run dev
```

Проект буде доступний за адресою `http://localhost:5173` (або порт, показаний у
терміналі).

#### Збірка для Продакшну

Проект автоматично збирається та деплоїться на GitHub Pages через GitHub Actions
при push змін до гілки `main`. Ручна збірка не потрібна.

Якщо ви хочете протестувати продакшн збірку локально:

```bash
npm run build
```

Оптимізовані файли будуть згенеровані в директорії `dist`.

#### Перегляд Продакшн Збірки

Перегляньте продакшн збірку локально:

```bash
npm run preview
```

### Автоматичний Деплой

Проект використовує GitHub Actions для безперервного деплою. Кожен push до гілки
`main` автоматично:

- Встановлює залежності
- Збирає проект
- Деплоїть на GitHub Pages

Workflow деплою налаштований у `.github/workflows/deploy.yml`.

---

## Використані Технології

- **Vite** - Інструмент збірки та сервер розробки
- **Tailwind CSS v4** - Utility-first CSS фреймворк
- **HTML5** - Структура розмітки
- **JavaScript (ES6+)** - Інтерактивна функціональність
- **Vite Плагіни** - HTML inject, full reload, PostCSS sort media queries

---

## Структура Проекту

```
yachtjet/
├── src/
│   ├── css/          # Стилі та конфігурація Tailwind
│   ├── img/          # Зображення та ассети (адаптивні, retina підтримка)
│   ├── partials/     # HTML частини/компоненти
│   │   ├── header.html
│   │   ├── menu.html
│   │   ├── hero.html
│   │   ├── about.html
│   │   ├── yacht-selection.html
│   │   ├── benefits.html
│   │   ├── rent-form.html
│   │   ├── reviews.html
│   │   └── footer.html
│   ├── index.html    # Головний HTML файл
│   └── main.js       # Головний JavaScript файл
├── public/           # Статичні ассети
├── package.json      # Залежності та скрипти проекту
└── vite.config.js    # Конфігурація Vite
```
