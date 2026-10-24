/**
 * Site Pessoal / Portfólio Minimalista Editorial
 * Script principal (Vanilla JS ES2020+)
 */

document.documentElement.classList.add('js');

(function () {
  'use strict';

  /**
   * Atualiza o ano no rodapé
   */
  function initFooterYear() {
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();
    yearElements.forEach((el) => {
      el.textContent = currentYear;
    });
  }

  /**
   * Menu Mobile Acessível
   */
  function initMobileNav() {
    const toggleBtn = document.querySelector('[data-nav-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const mainContent = document.querySelector('main');
    const footerContent = document.querySelector('footer');

    if (!toggleBtn || !mobileMenu) return;

    let isOpen = false;

    function openMenu() {
      isOpen = true;
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.setAttribute('aria-label', 'Fechar menu');
      mobileMenu.classList.add('is-open');
      document.body.classList.add('no-scroll');

      if (mainContent) mainContent.setAttribute('inert', '');
      if (footerContent) footerContent.setAttribute('inert', '');

      // Altera o ícone de menu para fechar (troca do SVG inline)
      const menuIcon = toggleBtn.querySelector('.icon-menu');
      const closeIcon = toggleBtn.querySelector('.icon-close');
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      }

      // Foca no primeiro link do menu
      const firstLink = mobileMenu.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      }
    }

    function closeMenu() {
      if (!isOpen) return;
      isOpen = false;
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Abrir menu');
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');

      if (mainContent) mainContent.removeAttribute('inert');
      if (footerContent) footerContent.removeAttribute('inert');

      const menuIcon = toggleBtn.querySelector('.icon-menu');
      const closeIcon = toggleBtn.querySelector('.icon-close');
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }

      toggleBtn.focus();
    }

    toggleBtn.addEventListener('click', function () {
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Tecla Escape para fechar
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    });

    // Fechar ao clicar em qualquer link do menu
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Fechar se a janela for redimensionada para desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768 && isOpen) {
        closeMenu();
      }
    });
  }

  /**
   * Filtros de Projetos (projetos.html)
   */
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const cards = document.querySelectorAll('.project-card[data-category]');
    const statusText = document.querySelector('[data-filter-status]');
    const emptyState = document.querySelector('[data-empty-state]');
    const resetBtn = document.querySelector('[data-reset-filter]');

    if (!filterButtons.length || !cards.length) return;

    function applyFilter(category) {
      let visibleCount = 0;

      cards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        const shouldShow = category === 'all' || cardCategory === category;

        if (shouldShow) {
          card.hidden = false;
          visibleCount++;
        } else {
          card.hidden = true;
        }
      });

      // Atualiza botões
      filterButtons.forEach((btn) => {
        const isCurrent = btn.getAttribute('data-filter') === category;
        btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
      });

      // Atualiza status acessível
      if (statusText) {
        if (visibleCount === 0) {
          statusText.textContent = 'Nenhum projeto';
        } else if (visibleCount === 1) {
          statusText.textContent = '1 projeto';
        } else {
          statusText.textContent = `${visibleCount} projetos`;
        }
      }

      // Atualiza estado vazio
      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.classList.add('is-visible');
        } else {
          emptyState.classList.remove('is-visible');
        }
      }
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        const category = this.getAttribute('data-filter');
        applyFilter(category);
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        applyFilter('all');
      });
    }
  }

  /**
   * Copiar E-mail com Feedback Acessível
   */
  function initCopyEmail() {
    const copyButtons = document.querySelectorAll('[data-copy-email]');

    copyButtons.forEach((btn) => {
      btn.addEventListener('click', async function () {
        const email =
          this.getAttribute('data-email') ||
          this.getAttribute('data-copy-email');
        const feedbackEl =
          this.parentElement.querySelector('[data-copy-feedback]') ||
          document.querySelector(
            `[data-copy-feedback="${this.getAttribute('data-feedback-id')}"]`
          );

        if (!email) return;

        let success = false;

        // Tenta API moderna
        if (navigator.clipboard && navigator.clipboard.writeText) {
          try {
            await navigator.clipboard.writeText(email);
            success = true;
          } catch (err) {
            success = false;
          }
        }

        // Fallback para execCommand
        if (!success) {
          const textarea = document.createElement('textarea');
          textarea.value = email;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          textarea.style.pointerEvents = 'none';
          document.body.appendChild(textarea);
          textarea.select();
          try {
            success = document.execCommand('copy');
          } catch (e) {
            success = false;
          }
          document.body.removeChild(textarea);
        }

        const originalBtnText = btn.innerHTML;

        if (success) {
          btn.innerHTML = `
            <svg class="icon icon-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Copiado!</span>
          `;
          if (feedbackEl) {
            feedbackEl.textContent = 'E-mail copiado para a área de transferência.';
          }

          setTimeout(() => {
            btn.innerHTML = originalBtnText;
            if (feedbackEl) {
              feedbackEl.textContent = '';
            }
          }, 2000);
        } else {
          if (feedbackEl) {
            feedbackEl.textContent =
              'Não foi possível copiar. Selecione o e-mail acima.';
            setTimeout(() => {
              feedbackEl.textContent = '';
            }, 3000);
          }
        }
      });
    });
  }

  /**
   * Reveal ao Rolar com IntersectionObserver
   */
  function initReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (!revealElements.length) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-revealed');
            }, Math.min(index * 60, 180));
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  /**
   * Voltar ao Topo Suave
   */
  function initBackToTop() {
    const backToTopButtons = document.querySelectorAll('[data-back-to-top]');
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    backToTopButtons.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
      });
    });
  }

  // Inicialização de todos os módulos ao carregar o DOM
  document.addEventListener('DOMContentLoaded', function () {
    initFooterYear();
    initMobileNav();
    initProjectFilters();
    initCopyEmail();
    initReveal();
    initBackToTop();
  });
})();
