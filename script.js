// 1. Galeria produktów (powiększenie zdjęć po kliknięciu)
document.querySelectorAll('.produkt img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';

        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.style.maxWidth = '80%';
        modalImg.style.maxHeight = '80%';

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});

// 2. Prosty koszyk (opcjonalnie)
const koszyk = [];
const przyciskiDodaj = document.querySelectorAll('.produkt button');

if (przyciskiDodaj.length > 0) {
    przyciskiDodaj.forEach(przycisk => {
        przycisk.addEventListener('click', (e) => {
            const produkt = e.target.closest('.produkt');
            const nazwa = produkt.querySelector('h3').textContent;
            const cena = produkt.querySelector('p').textContent;
            koszyk.push({ nazwa, cena });
            alert(`Dodano do koszyka: ${nazwa} (
