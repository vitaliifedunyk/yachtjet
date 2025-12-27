import "./css/style.css";

// Menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const burgerIcon = document.getElementById('burger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuToggle && menu && burgerIcon && closeIcon) {
    const toggleIcons = (isOpen) => {
      if (isOpen) {
        burgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        burgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = !menu.classList.contains('hidden');
      
      if (isOpen) {
        // Закриваємо меню
        menu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
        toggleIcons(false);
      } else {
        // Відкриваємо меню
        menu.classList.remove('hidden');
        menuToggle.setAttribute('aria-expanded', 'true');
        toggleIcons(true);
      }
    });

    // Закриваємо меню при кліку на посилання в меню
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
        toggleIcons(false);
      });
    });

    // Кнопка закриття в меню
    const menuClose = document.getElementById('menu-close');
    if (menuClose) {
      menuClose.addEventListener('click', () => {
        menu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
        toggleIcons(false);
      });
    }
  }
});
