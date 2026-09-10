/**
 * SABANAFLEX - CORE JAVASCRIPT APPLICATION
 * Mobile Navigation, Sticky Header, Hubs Selector & FAQ Accordion.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isOpen = navMenu.classList.contains('active');
      mobileToggle.innerHTML = isOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      });
    });
  }

  // 2. Sticky Header elevation on scroll
  const mainHeader = document.querySelector('.main-header');
  if (mainHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    });
  }

  // 3. Hubs Selector in Cobertura Section
  const hubCards = document.querySelectorAll('.hub-card');
  hubCards.forEach(card => {
    card.addEventListener('click', () => {
      hubCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // 4. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all other open items
        faqItems.forEach(f => f.classList.remove('active'));
        // If it wasn't active, open it
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 5. Terms & Conditions Modal Logic
  const termsModal = document.getElementById('termsModal');
  const openTermsButtons = document.querySelectorAll('.open-terms-modal');
  const closeTermsButtons = document.querySelectorAll('.close-terms-modal');

  if (termsModal) {
    const openModal = (e) => {
      if (e) e.preventDefault();
      termsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = (e) => {
      if (e) e.preventDefault();
      termsModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    openTermsButtons.forEach(btn => btn.addEventListener('click', openModal));
    closeTermsButtons.forEach(btn => btn.addEventListener('click', closeModal));

    // Close on backdrop click
    termsModal.addEventListener('click', (e) => {
      if (e.target === termsModal) {
        closeModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && termsModal.classList.contains('active')) {
        closeModal();
      }
    });
  }
});
