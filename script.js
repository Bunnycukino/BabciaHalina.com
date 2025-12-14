// ================================================================
// BABCIA HALINA - GŁÓWNY SKRYPT JAVASCRIPT
// Wersja 2.0 - Zaktualizowana 2025
// ================================================================

// ----------------------------------------------------------------
// 1. DANE PRODUKTÓW - GALERIA
// ----------------------------------------------------------------
const products = [
    { 
        id: 1, 
        name: "Aniołek Lily", 
        description: "Ręcznie robiony aniołek na prezent lub dekorację świąteczną. Unikatowy design.", 
        image: "assets/produkty/IMG_3993.jpeg", 
        status: "Na Zamówienie",
        category: "aniolki"
    },
    { 
        id: 2, 
        name: "Pajacyki", 
        description: "Urocze, szyte maskotki, idealne dla najmłodszych. Zapytaj o dostępne kolory.", 
        image: "assets/produkty/IMG_4464.jpeg", 
        status: "Na Zamówienie",
        category: "dzieci"
    },
    { 
        id: 3, 
        name: "Ubranko dla dziecka", 
        description: "Delikatne, ręcznie dziergane ubranko dla malucha. Idealne na chrzest lub sesję zdjęciową.", 
        image: "assets/produkty/IMG_4161.jpeg", 
        status: "Na Zamówienie",
        category: "dzieci"
    },
    { 
        id: 4, 
        name: "Buciki", 
        description: "Ciepłe, dziergane buciki niemowlęce. Zapewniają komfort i stylowy wygląd.", 
        image: "assets/produkty/IMG_4162.jpeg", 
        status: "Na Zamówienie",
        category: "dzieci"
    },
    { 
        id: 5, 
        name: "Czerwony Aniołek", 
        description: "Aniołek w intensywnym, czerwonym kolorze. Doskonay akcent do każdego wnętrza.", 
        image: "assets/produkty/IMG_4167.jpeg", 
        status: "Na Zamówienie",
        category: "aniolki"
    },
    { 
        id: 6, 
        name: "Bombki 😍", 
        description: "Unikalne, ręcznie robione bombki, które dodadzą blasku Twojej choince.", 
        image: "assets/produkty/IMG_4168.jpeg", 
        status: "Na Zamówienie",
        category: "dekoracje"
    },
    { 
        id: 7, 
        name: "Koszyk różyczek", 
        description: "Ozdobny koszyczek z haftowanymi lub dzierganymi różyczkami.", 
        image: "assets/produkty/IMG_4169.jpeg", 
        status: "Na Zamówienie",
        category: "dekoracje"
    },
    { 
        id: 8, 
        name: "Kurczaczki", 
        description: "Wielkanocna dekoracja: urocze, małe kurczaczki na świąteczny stół.", 
        image: "assets/produkty/IMG_4115.jpeg", 
        status: "Na Zamówienie",
        category: "dekoracje"
    },
    { 
        id: 9, 
        name: "Króliczek", 
        description: "Ręcznie robiony króliczek, idealny jako maskotka lub dekoracja Wielkanocna.", 
        image: "assets/produkty/IMG_4116.jpeg", 
        status: "Na Zamówienie",
        category: "dekoracje"
    },
    { 
        id: 10, 
        name: "Koszyczek Wielkanocny", 
        description: "Mały, ozdobny koszyczek, idealny do święconki lub jako dekoracja.", 
        image: "assets/produkty/IMG_4118.jpeg", 
        status: "Na Zamówienie",
        category: "dekoracje"
    },
    { 
        id: 11, 
        name: "Buciki dla dzieciuszka", 
        description: "Wyjątkowe buciki niemowlęce, idealny pomysł na prezent.", 
        image: "assets/produkty/IMG_4119.jpeg", 
        status: "Na Zamówienie",
        category: "dzieci"
    },
    { 
        id: 12, 
        name: "Aniołek 2", 
        description: "Inny wariant aniołka, wykonany z dbaością o każdy detal.", 
        image: "assets/produkty/IMG_3992.jpeg", 
        status: "Na Zamówienie",
        category: "aniolki"
    },
    { 
        id: 13, 
        name: "Bałwanki i Aniołek", 
        description: "Zestaw uroczych, zimowych dekoracji. Zapytaj o dostępność całego kompletu.", 
        image: "assets/produkty/IMG_3991.jpeg", 
        status: "Na Zamówienie",
        category: "dekoracje"
    },
    { 
        id: 14, 
        name: "Serweta - Delikatna Koronka", 
        description: "Klasyczna, okrągła serweta koronkowa. Średnica na zamówienie.", 
        image: "assets/produkty/IMG_3986.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 15, 
        name: "Serweta - Gęsty Wzór", 
        description: "Ręcznie robiona serweta z bogatym, gęstym wzorem.", 
        image: "assets/produkty/IMG_3987.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 16, 
        name: "Dzwoneczki", 
        description: "Ozdobne dzwoneczki, idealne na choinkę lub jako świąteczna zawieszka.", 
        image: "assets/produkty/IMG_3988.jpeg", 
        status: "Na Zamówienie",
        category: "dekoracje"
    },
    { 
        id: 17, 
        name: "Serweta Misa", 
        description: "Serweta formowana w kształcie misy, idealna na owoce lub słodycze.", 
        image: "assets/produkty/IMG_3989.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 18, 
        name: "Serweta - Duża", 
        description: "Duża serweta stołowa, idealna do salonu. Wymiary na życzenie.", 
        image: "assets/produkty/IMG_3990.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 19, 
        name: "Serweta - Finezyjny Wzór", 
        description: "Serweta o unikatowym, finezyjnym wzorze. Prawdziwe arcydzieło rękodzieła.", 
        image: "assets/produkty/IMG_3966.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 20, 
        name: "Serweta - Klasyczna", 
        description: "Elegancka, klasyczna serweta koronkowa, pasująca do każdego wnętrza.", 
        image: "assets/produkty/IMG_3967.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 21, 
        name: "Serweta - Okrągła", 
        description: "Serweta o idealnym okrągłym kształcie. Zapytaj o dostępne kolory nici.", 
        image: "assets/produkty/IMG_3968.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 22, 
        name: "Serweta - Kwadratowa", 
        description: "Serweta w kształcie kwadratu. Geometryczny wzór idealny na stolik kawowy.", 
        image: "assets/produkty/IMG_3969.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 23, 
        name: "Serweta - Mała", 
        description: "Komplet małych serwetek, idealnych pod filiżanki i kubki.", 
        image: "assets/produkty/IMG_3964.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 24, 
        name: "Serweta - Owalna", 
        description: "Elegancka serweta na podłużny stół lub komodę.", 
        image: "assets/produkty/IMG_3965.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 25, 
        name: "Serweta - Płatek Śniegu", 
        description: "Serweta z motywem zimowym lub kwiatowym. Zapytaj o szczegóły.", 
        image: "assets/produkty/IMG_3958.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 26, 
        name: "Wielkanocna Dekoracja", 
        description: "Zestaw figurek i dekoracji świątecznych. Stworzony specjalnie na Wielkanoc.", 
        image: "assets/produkty/IMG_3963.jpeg", 
        status: "Na Zamówienie",
        category: "dekoracje"
    },
    { 
        id: 27, 
        name: "Serweta - Rękodzieło", 
        description: "Kolejna piękna serweta z mojej kolekcji. Gwarancja najwyższej jakości.", 
        image: "assets/produkty/IMG_3962.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    },
    { 
        id: 28, 
        name: "Aniołek - Mały", 
        description: "Subtelny, mniejszy aniołek. Idealny jako zawieszka lub dodatek do prezentu.", 
        image: "assets/produkty/IMG_3927.jpg", 
        status: "Na Zamówienie",
        category: "aniolki"
    },
    { 
        id: 29, 
        name: "Serweta Kwadrat", 
        description: "Serweta kwadratowa, doskonaa pod wazon lub ramkę na zdjęcia.", 
        image: "assets/produkty/IMG_3960.jpeg", 
        status: "Na Zamówienie",
        category: "serwety"
    }
];

// ----------------------------------------------------------------
// 2. INICJALIZACJA PO ZAŁADOWANIU DOM
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initGallery();
    initFilters();
    initModals();
    initContactForm();
    initAdminPanel();
    initScrollEffects();
});

// ----------------------------------------------------------------
// 3. NAWIGACJA
// ----------------------------------------------------------------
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let lastScroll = 0;
    
    // Ukrywanie/pokazywanie nawigacji przy przewijaniu
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });
    
    // Menu mobilne
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Zamykanie menu po kliknięciu w link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Płynne przewijanie
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ----------------------------------------------------------------
// 4. GALERIA
// ----------------------------------------------------------------
function initGallery() {
    const productGrid = document.getElementById('product-grid');
    
    if (!productGrid) return;
    
    renderProducts(products);
}

function renderProducts(productsToRender) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.category = product.category;
        
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="gallery-item-image" loading="lazy" onerror="this.src='assets/placeholder.jpg'">
            <div class="gallery-item-content">
                <h3 class="gallery-item-title">${product.name}</h3>
                <p class="gallery-item-description">${product.description}</p>
                <span class="gallery-item-status">${product.status}</span>
            </div>
        `;
        
        // Kliknięcie otwiera modal ze zdjęciem
        item.addEventListener('click', () => {
            openImageModal(product.image, product.name);
        });
        
        productGrid.appendChild(item);
    });
}

// ----------------------------------------------------------------
// 5. FILTRY KATEGORII
// ----------------------------------------------------------------
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Aktywny przycisk
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            if (filter === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === filter);
                renderProducts(filtered);
            }
        });
    });
}

// ----------------------------------------------------------------
// 6. MODALE
// ----------------------------------------------------------------
function initModals() {
    const imageModal = document.getElementById('imageModal');
    const modalClose = document.querySelector('.modal-close');
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            imageModal.style.display = 'none';
        });
    }
    
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                imageModal.style.display = 'none';
            }
        });
    }
}

function openImageModal(imageSrc, caption) {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (imageModal && modalImage) {
        modalImage.src = imageSrc;
        modalCaption.textContent = caption;
        imageModal.style.display = 'flex';
    }
}

// ----------------------------------------------------------------
// 7. FORMULARZ KONTAKTOWY
// ----------------------------------------------------------------
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            // Tutaj możesz dodać wysyłkę do serwera
            console.log('Formularz wysłany:', formData);
            
            alert('✅ Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.');
            contactForm.reset();
        });
    }
}

// ----------------------------------------------------------------
// 8. PANEL ADMINISTRATORA
// ----------------------------------------------------------------
const ADMIN_PASSWORD = 'galleria sztuki';
let isAdminLoggedIn = false;

function initAdminPanel() {
    const adminLink = document.getElementById('adminLink');
    const adminModal = document.getElementById('adminModal');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const closeModal = document.querySelector('.modal .close');
    
    if (adminLink) {
        adminLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (isAdminLoggedIn) {
                window.location.href = 'admin.html';
            } else {
                adminModal.classList.add('active');
                adminModal.style.display = 'flex';
            }
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            adminModal.classList.remove('active');
            adminModal.style.display = 'none';
        });
    }
    
    if (adminModal) {
        adminModal.addEventListener('click', (e) => {
            if (e.target === adminModal) {
                adminModal.classList.remove('active');
                adminModal.style.display = 'none';
            }
        });
    }
    
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const password = document.getElementById('adminPassword').value;
            const errorMessage = document.getElementById('loginError');
            
            if (password === ADMIN_PASSWORD) {
                isAdminLoggedIn = true;
                sessionStorage.setItem('adminLoggedIn', 'true');
                window.location.href = 'admin.html';
            } else {
                errorMessage.textContent = '❌ Nieprawidłowe hasło!';
                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 3000);
            }
        });
    }
}

// ----------------------------------------------------------------
// 9. EFEKTY PRZEWIJANIA
// ----------------------------------------------------------------
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Obserwuj elementy galerii
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
}

// ----------------------------------------------------------------
// 10. EKSPORT DLA PANELU ADMINA
// ----------------------------------------------------------------
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, ADMIN_PASSWORD };
}