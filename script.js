// ================================================================
// BABCIA HALINA - GÃÂÃÂWNY SKRYPT JAVASCRIPT
// Wersja 2.0 - Zaktualizowana 2025
// ================================================================

// ----------------------------------------------------------------
// 1. DANE PRODUKTÃÂW - GALERIA
// ----------------------------------------------------------------
const products = [
    { 
        id: 1, 
        name: "AnioÃÂek Lily", 
        description: "RÃÂcznie robiony anioÃÂek na prezent lub dekoracjÃÂ ÃÂwiÃÂtecznÃÂ. Unikatowy design.", 
        image: "assets/produkty/IMG_3993.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "aniolki"
    },
    { 
        id: 2, 
        name: "Pajacyki", 
        description: "Urocze, szyte maskotki, idealne dla najmÃÂodszych. Zapytaj o dostÃÂpne kolory.", 
        image: "assets/produkty/IMG_4464.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dzieci"
    },
    { 
        id: 3, 
        name: "Ubranko dla dziecka", 
        description: "Delikatne, rÃÂcznie dziergane ubranko dla malucha. Idealne na chrzest lub sesjÃÂ zdjÃÂciowÃÂ.", 
        image: "assets/produkty/IMG_4161.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dzieci"
    },
    { 
        id: 4, 
        name: "Buciki", 
        description: "CiepÃÂe, dziergane buciki niemowlÃÂce. ZapewniajÃÂ komfort i stylowy wyglÃÂd.", 
        image: "assets/produkty/IMG_4162.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dzieci"
    },
    { 
        id: 5, 
        name: "Czerwony AnioÃÂek", 
        description: "AnioÃÂek w intensywnym, czerwonym kolorze. Doskonay akcent do kaÃÂ¼dego wnÃÂtrza.", 
        image: "assets/produkty/IMG_4167.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "aniolki"
    },
    { 
        id: 6, 
        name: "Bombki Ã°ÂÂÂ", 
        description: "Unikalne, rÃÂcznie robione bombki, ktÃÂ³re dodadzÃÂ blasku Twojej choince.", 
        image: "assets/produkty/IMG_4168.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dekoracje"
    },
    { 
        id: 7, 
        name: "Koszyk rÃÂ³ÃÂ¼yczek", 
        description: "Ozdobny koszyczek z haftowanymi lub dzierganymi rÃÂ³ÃÂ¼yczkami.", 
        image: "assets/produkty/IMG_4169.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dekoracje"
    },
    { 
        id: 8, 
        name: "Kurczaczki", 
        description: "Wielkanocna dekoracja: urocze, maÃÂe kurczaczki na ÃÂwiÃÂteczny stÃÂ³ÃÂ.", 
        image: "assets/produkty/IMG_4115.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dekoracje"
    },
    { 
        id: 9, 
        name: "KrÃÂ³liczek", 
        description: "RÃÂcznie robiony krÃÂ³liczek, idealny jako maskotka lub dekoracja Wielkanocna.", 
        image: "assets/produkty/IMG_4116.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dekoracje"
    },
    { 
        id: 10, 
        name: "Koszyczek Wielkanocny", 
        description: "MaÃÂy, ozdobny koszyczek, idealny do ÃÂwiÃÂconki lub jako dekoracja.", 
        image: "assets/produkty/IMG_4118.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dekoracje"
    },
    { 
        id: 11, 
        name: "Buciki dla dzieciuszka", 
        description: "WyjÃÂtkowe buciki niemowlÃÂce, idealny pomysÃÂ na prezent.", 
        image: "assets/produkty/IMG_4119.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dzieci"
    },
    { 
        id: 12, 
        name: "AnioÃÂek 2", 
        description: "Inny wariant anioÃÂka, wykonany z dbaoÃÂciÃÂ o kaÃÂ¼dy detal.", 
        image: "assets/produkty/IMG_3992.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "aniolki"
    },
    { 
        id: 13, 
        name: "BaÃÂwanki i AnioÃÂek", 
        description: "Zestaw uroczych, zimowych dekoracji. Zapytaj o dostÃÂpnoÃÂÃÂ caÃÂego kompletu.", 
        image: "assets/produkty/IMG_3991.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dekoracje"
    },
    { 
        id: 14, 
        name: "Serweta - Delikatna Koronka", 
        description: "Klasyczna, okrÃÂgÃÂa serweta koronkowa. ÃÂrednica na zamÃÂ³wienie.", 
        image: "assets/produkty/IMG_3986.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 15, 
        name: "Serweta - GÃÂsty WzÃÂ³r", 
        description: "RÃÂcznie robiona serweta z bogatym, gÃÂstym wzorem.", 
        image: "assets/produkty/IMG_3987.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 16, 
        name: "Dzwoneczki", 
        description: "Ozdobne dzwoneczki, idealne na choinkÃÂ lub jako ÃÂwiÃÂteczna zawieszka.", 
        image: "assets/produkty/IMG_3988.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dekoracje"
    },
    { 
        id: 17, 
        name: "Serweta Misa", 
        description: "Serweta formowana w ksztaÃÂcie misy, idealna na owoce lub sÃÂodycze.", 
        image: "assets/produkty/IMG_3989.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 18, 
        name: "Serweta - DuÃÂ¼a", 
        description: "DuÃÂ¼a serweta stoÃÂowa, idealna do salonu. Wymiary na ÃÂ¼yczenie.", 
        image: "assets/produkty/IMG_3990.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 19, 
        name: "Serweta - Finezyjny WzÃÂ³r", 
        description: "Serweta o unikatowym, finezyjnym wzorze. Prawdziwe arcydzieÃÂo rÃÂkodzieÃÂa.", 
        image: "assets/produkty/IMG_3966.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 20, 
        name: "Serweta - Klasyczna", 
        description: "Elegancka, klasyczna serweta koronkowa, pasujÃÂca do kaÃÂ¼dego wnÃÂtrza.", 
        image: "assets/produkty/IMG_3967.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 21, 
        name: "Serweta - OkrÃÂgÃÂa", 
        description: "Serweta o idealnym okrÃÂgÃÂym ksztaÃÂcie. Zapytaj o dostÃÂpne kolory nici.", 
        image: "assets/produkty/IMG_3968.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 22, 
        name: "Serweta - Kwadratowa", 
        description: "Serweta w ksztaÃÂcie kwadratu. Geometryczny wzÃÂ³r idealny na stolik kawowy.", 
        image: "assets/produkty/IMG_3969.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 23, 
        name: "Serweta - MaÃÂa", 
        description: "Komplet maÃÂych serwetek, idealnych pod filiÃÂ¼anki i kubki.", 
        image: "assets/produkty/IMG_3964.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 24, 
        name: "Serweta - Owalna", 
        description: "Elegancka serweta na podÃÂuÃÂ¼ny stÃÂ³ÃÂ lub komodÃÂ.", 
        image: "assets/produkty/IMG_3965.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 25, 
        name: "Serweta - PÃÂatek ÃÂniegu", 
        description: "Serweta z motywem zimowym lub kwiatowym. Zapytaj o szczegÃÂ³ÃÂy.", 
        image: "assets/produkty/IMG_3958.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 26, 
        name: "Wielkanocna Dekoracja", 
        description: "Zestaw figurek i dekoracji ÃÂwiÃÂtecznych. Stworzony specjalnie na Wielkanoc.", 
        image: "assets/produkty/IMG_3963.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "dekoracje"
    },
    { 
        id: 27, 
        name: "Serweta - RÃÂkodzieÃÂo", 
        description: "Kolejna piÃÂkna serweta z mojej kolekcji. Gwarancja najwyÃÂ¼szej jakoÃÂci.", 
        image: "assets/produkty/IMG_3962.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    { 
        id: 28, 
        name: "AnioÃÂek - MaÃÂy", 
        description: "Subtelny, mniejszy anioÃÂek. Idealny jako zawieszka lub dodatek do prezentu.", 
        image: "assets/produkty/IMG_3927.jpg", 
        status: "Na ZamÃÂ³wienie",
        category: "aniolki"
    },
    { 
        id: 29, 
        name: "Serweta Kwadrat", 
        description: "Serweta kwadratowa, doskonaa pod wazon lub ramkÃÂ na zdjÃÂcia.", 
        image: "assets/produkty/IMG_3960.jpeg", 
        status: "Na ZamÃÂ³wienie",
        category: "serwety"
    },
    {
        id: 1765729517900,
        name: "jablko",
        description: "art",
        image: "assets/produkty/IMG_1765729516587.jpg",
        status: "Na ZamÃ³wienie",
        category: "dekoracje"
    },
    {
        id: 1765733489604,
        name: "Rafał mój syn",
        description: "Oddam za darmo (zapłacę za przesyłkę)",
        image: "assets/produkty/IMG_1765733486842.jpeg",
        status: "Na Zamówienie",
        category: "aniolki"
    }
];;;

// ----------------------------------------------------------------
// 2. INICJALIZACJA PO ZAÃÂADOWANIU DOM
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
    
    // Zamykanie menu po klikniÃÂciu w link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // PÃÂynne przewijanie
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
        
        // KlikniÃÂcie otwiera modal ze zdjÃÂciem
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
            
            // Tutaj moÃÂ¼esz dodaÃÂ wysyÃÂkÃÂ do serwera
            console.log('Formularz wysÃÂany:', formData);
            
            alert('Ã¢ÂÂ DziÃÂkujÃÂ za wiadomoÃÂÃÂ! Odpowiem najszybciej jak to moÃÂ¼liwe.');
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
                errorMessage.textContent = 'Ã¢ÂÂ NieprawidÃÂowe hasÃÂo!';
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