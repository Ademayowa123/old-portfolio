const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');

function openMenu(){
  navMenu.classList.add('is-open');
  navToggle.setAttribute('aria-expanded', 'true');
}
function closeMenu(){
  navMenu.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', openMenu);
navClose?.addEventListener('click', closeMenu);

navMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

const tabLinks = document.querySelectorAll('.tabs__link');
const tabPanels = document.querySelectorAll('.tabs__panel');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.dataset.tab;

    tabLinks.forEach(l => {
      l.classList.remove('is-active');
      l.setAttribute('aria-selected', 'false');
    });
    link.classList.add('is-active');
    link.setAttribute('aria-selected', 'true');

    tabPanels.forEach(panel => {
      panel.classList.toggle('is-active', panel.id === target);
    });
  });
});

const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Thanks — your message is ready to send. Connect a form service to deliver it.';
  contactForm.reset();
});

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero__tag, .hero__line, .hero__sub, .hero__actions').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 120 + i * 110);
  });
});
