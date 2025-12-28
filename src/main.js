import './css/style.css';

// Menu toggle functionality with animations
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('[data-menu]');
  const menuContent = menu?.querySelector('.menu-content');
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');
  const menuNavLinks = document.querySelectorAll('.menu-nav-link');
  const menuSocials = menu?.querySelector('.menu-socials');

  // Функція для анімації появи елементів (stagger effect)
  const animateMenuItems = isOpening => {
    const navLinks = Array.from(menuNavLinks);

    navLinks.forEach((link, index) => {
      if (isOpening) {
        setTimeout(
          () => {
            link.classList.remove('opacity-0', '-translate-y-2.5');
            link.classList.add('opacity-100', 'translate-y-0');
          },
          100 + index * 50
        ); // Затримка для кожного елемента
      } else {
        link.classList.remove('opacity-100', 'translate-y-0');
        link.classList.add('opacity-0', '-translate-y-2.5');
      }
    });

    // Анімація соціальних посилань
    if (menuSocials) {
      if (isOpening) {
        setTimeout(
          () => {
            menuSocials.classList.remove('opacity-0', 'translate-y-2.5');
            menuSocials.classList.add('opacity-100', 'translate-y-0');
          },
          100 + navLinks.length * 50
        );
      } else {
        menuSocials.classList.remove('opacity-100', 'translate-y-0');
        menuSocials.classList.add('opacity-0', 'translate-y-2.5');
      }
    }
  };

  // Функція для закриття меню
  const closeMenu = () => {
    if (menu && menuContent) {
      // Анімація закриття контенту
      menuContent.classList.remove('translate-x-0');
      menuContent.classList.add('-translate-x-full');

      // Анімація закриття overlay
      menu.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
      menu.classList.add('opacity-0', 'invisible', 'pointer-events-none');

      // Анімація елементів
      animateMenuItems(false);

      // Відновлення скролу
      document.body.style.overflow = '';
    }
  };

  // Відкриття меню
  if (menuOpenBtn && menu && menuContent) {
    menuOpenBtn.addEventListener('click', () => {
      // Блокування скролу
      document.body.style.overflow = 'hidden';

      // Показ overlay
      menu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
      menu.classList.add('opacity-100', 'visible', 'pointer-events-auto');

      // Анімація появи контенту (невелика затримка для overlay)
      setTimeout(() => {
        menuContent.classList.remove('-translate-x-full');
        menuContent.classList.add('translate-x-0');

        // Анімація елементів меню
        animateMenuItems(true);
      }, 50);
    });
  }

  // Закриття меню кнопкою
  if (menuCloseBtn && menu) {
    menuCloseBtn.addEventListener('click', closeMenu);
  }

  // Закриття при кліку на навігаційні посилання
  menuNavLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          closeMenu();
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }, 300); // Затримка відповідає тривалості анімації
        }
      }
    });
  });

  // Закриття при кліку на overlay (поза меню контентом)
  if (menu) {
    menu.addEventListener('click', e => {
      if (e.target === menu) {
        closeMenu();
      }
    });
  }

  // Form validation
  const rentForm = document.getElementById('rent-form-form');
  if (rentForm) {
    rentForm.addEventListener('submit', e => {
      e.preventDefault();

      const fullName = document.getElementById('user-fullname');
      const email = document.getElementById('user-email');
      const phone = document.getElementById('user-phone');

      // Перевірка обов'язкових полів
      if (!fullName.value.trim()) {
        fullName.focus();
        return false;
      }

      if (!email.value.trim() || !email.validity.valid) {
        email.focus();
        return false;
      }

      if (!phone.value.trim()) {
        phone.focus();
        return false;
      }

      // Якщо всі поля заповнені, можна відправити форму
      // Тут можна додати логіку відправки на сервер
      console.log('Form is valid and ready to submit');
      // rentForm.submit(); // Розкоментуйте, коли буде готовий бекенд

      // Очищаємо форму після успішної валідації
      rentForm.reset();
    });
  }
});
