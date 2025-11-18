document.addEventListener('DOMContentLoaded', function() {
  // Aktualizacja roku w stopce
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;

  // Inicjalizacja lightboxa
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  // Obsługa kliknięć na zdjęcia produktów
  document.querySelectorAll('.produkt img').forEach(img => {
    img.addEventListener('click', function() {
      lightboxImg.src = this.src;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Blokada scrollowania
    });
  });

  // Zamknięcie lightboxa
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Przywrócenie scrollowania
  }

  // Animacja produktów
  const productObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        productObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.produkt').forEach(product => {
    productObserver.observe(product);
  });

  // Płynne przewijanie do sekcji
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20,
          behavior: 'smooth'
        });
        
        // Aktualizacja URL bez przeładowania strony
        history.pushState(null, null, targetId);
      }
    });
  });
});
// Na dole pliku dodaj:
document.querySelectorAll('.video-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const iframe = wrapper.querySelector('iframe');
    if (iframe) iframe.src += "&autoplay=1";
  });
});
// Istniejący kod... + carousel init
document.addEventListener('DOMContentLoaded', function() {
  // ... twój stary kod ...

  // Tiny Slider dla produktów
  if (typeof tns !== 'undefined') {
    tns({
      container: '#product-carousel',
      items: 3,
      slideBy: 'page',
      autoplay: true,
      autoplayTimeout: 4000,
      controls: false,
      nav: false,
      responsive: {
        768: { items: 1 },
        1024: { items: 2 }
      }
    });

    // Video carousel
    tns({
      container: '#video-carousel',
      items: 1,
      autoplay: false,
      controls: false,
      nav: false
    });
  }

  // Hover gleam animation (już w CSS, ale JS dla smooth)
  document.querySelectorAll('.produkt').forEach(el => {
    el.addEventListener('mouseenter', () => el.style.animation = 'gleam 1s ease-in-out');
  });
});
