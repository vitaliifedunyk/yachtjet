# Vanilla Tailwind Project

Проект на базі Vite з Tailwind CSS та додатковими плагінами для розробки сучасних веб-додатків.

A Vite-based project with Tailwind CSS and additional plugins for modern web development.

## 🚀 Як запустити / How to Run

### Встановлення залежностей / Install Dependencies

```bash
npm install
```

### Запуск dev сервера / Run Development Server

```bash
npm run dev
```

Відкрийте браузер за адресою `http://localhost:5173`

Open your browser at `http://localhost:5173`

### Збірка для продакшну / Build for Production

```bash
npm run build
```

### Попередній перегляд збірки / Preview Production Build

```bash
npm run preview
```

## 📦 Встановлені залежності / Installed Dependencies

### Основні залежності / Main Dependencies

- **@tailwindcss/vite** (^4.1.18) - Офіційний плагін Vite для Tailwind CSS v4. Дозволяє використовувати Tailwind CSS без додаткової конфігурації.

  - Official Vite plugin for Tailwind CSS v4. Allows using Tailwind CSS without additional configuration.

- **tailwindcss** (^4.1.18) - Утилітарний CSS фреймворк для швидкої розробки сучасних інтерфейсів.

  - Utility-first CSS framework for rapid UI development.

- **vite-plugin-html-inject** (^1.1.2) - Плагін для інжекції HTML частин (partials) в основний HTML файл. Дозволяє використовувати компонентний підхід до HTML.

  - Plugin for injecting HTML partials into the main HTML file. Enables component-based approach to HTML.

- **vite-plugin-full-reload** (^1.2.0) - Плагін для автоматичного перезавантаження сторінки при зміні файлів. Корисний для роботи з HTML partials.
  - Plugin for automatic page reload on file changes. Useful when working with HTML partials.

### Dev залежності / Dev Dependencies

- **vite** (^7.2.4) - Сучасний інструмент для збірки фронтенд проєктів з швидкою розробкою.
  - Modern build tool for frontend projects with fast development experience.

## 🏗️ Структура проекту / Project Structure

```
vanilla-tailwind/
├── index.html          # Головний HTML файл / Main HTML file
├── vite.config.js      # Конфігурація Vite / Vite configuration
├── package.json        # Залежності та скрипти / Dependencies and scripts
└── src/
    ├── main.js         # Точка входу JavaScript / JavaScript entry point
    ├── css/
    │   └── style.css   # Головний CSS файл з Tailwind / Main CSS file with Tailwind
    ├── img/            # Зображення / Images
    ├── partials/       # HTML частини для інжекції / HTML partials for injection
    └── public/         # Статичні файли / Static files
```

## 🔧 Конфігурація / Configuration

### Vite Config

Проект налаштований з:

- Tailwind CSS через офіційний плагін
- HTML injection для роботи з partials
- Автоматичне визначення base path для GitHub Pages

The project is configured with:

- Tailwind CSS via official plugin
- HTML injection for working with partials
- Automatic base path detection for GitHub Pages

## 🌐 GitHub Pages Deployment

Проект налаштований для автоматичного деплою на GitHub Pages через GitHub Actions.

The project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Як це працює / How it works

1. При push в гілку `main` або `master` автоматично запускається workflow

   - On push to `main` or `master` branch, workflow automatically starts

2. Виконується збірка проекту (`npm run build`)

   - Project build is executed (`npm run build`)

3. Створюється/оновлюється гілка `gh-pages` з результатами збірки

   - `gh-pages` branch is created/updated with build results

4. Сайт стає доступним на GitHub Pages
   - Site becomes available on GitHub Pages

### Налаштування в GitHub / GitHub Settings

1. Перейдіть в Settings → Pages репозиторію

   - Go to Settings → Pages in repository

2. Виберіть Source: "Deploy from a branch"

   - Select Source: "Deploy from a branch"

3. Виберіть Branch: `gh-pages` / `/ (root)`

   - Select Branch: `gh-pages` / `/ (root)`

4. Збережіть налаштування
   - Save settings

Після першого деплою сайт буде доступний за адресою:
`https://ваш-username.github.io/назва-репозиторію/`

After first deployment, the site will be available at:
`https://your-username.github.io/repository-name/`

## 📝 Скрипти / Scripts

- `npm run dev` - Запуск dev сервера з hot reload

  - Start development server with hot reload

- `npm run build` - Збірка проекту для продакшну

  - Build project for production

- `npm run preview` - Попередній перегляд зібраного проекту
  - Preview built project

## 🎨 Використання Tailwind CSS / Using Tailwind CSS

Tailwind CSS вже налаштований і готовий до використання. Просто використовуйте утилітарні класи в HTML:

Tailwind CSS is already configured and ready to use. Just use utility classes in HTML:

```html
<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <h1 class="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>
</div>
```

## 📚 Додаткова інформація / Additional Information

- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
