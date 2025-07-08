// script.js
const produkty = document.querySelectorAll('.produkt');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

produkty.forEach(produkt => {
  observer.observe(produkt);
});
