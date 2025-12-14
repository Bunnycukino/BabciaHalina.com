// ================================================================
// BABCIA HALINA - GÅÃWNY SKRYPT JAVASCRIPT
// Wersja 2.2 - Naprawione kodowanie UTF-8
// ================================================================

const products = [
    { id: 1, name: "AnioÅek Lily", description: "RÄcznie robiony anioÅek na prezent", image: "assets/produkty/IMG_3993.jpeg", status: "Na ZamÃ³wienie", category: "aniolki" },
    { id: 2, name: "Pajacyki", description: "Urocze maskotki dla najmÅodszych", image: "assets/produkty/IMG_4464.jpeg", status: "Na ZamÃ³wienie", category: "dzieci" },
    { id: 3, name: "Ubranko dla dziecka", description: "Delikatne, dziergane ubranko dla malucha", image: "assets/produkty/IMG_4161.jpeg", status: "Na ZamÃ³wienie", category: "dzieci" },
    { id: 4, name: "Buciki", description: "CiepÅe buciki niemowlÄce", image: "assets/produkty/IMG_4162.jpeg", status: "Na ZamÃ³wienie", category: "dzieci" },
    { id: 5, name: "Czerwony AnioÅek", description: "AnioÅek w intensywnym czerwonym kolorze", image: "assets/produkty/IMG_4167.jpeg", status: "Na ZamÃ³wienie", category: "aniolki" },
    { id: 6, name: "Bombki", description: "RÄcznie robione bombki na choinkÄ", image: "assets/produkty/IMG_4168.jpeg", status: "Na ZamÃ³wienie", category: "dekoracje" },
    { id: 7, name: "Koszyk rÃ³Å¼yczek", description: "Ozdobny koszyczek z haftowanymi rÃ³Å¼yczkami", image: "assets/produkty/IMG_4169.jpeg", status: "Na ZamÃ³wienie", category: "dekoracje" },
    { id: 8, name: "Kurczaczki", description: "Wielkanocna dekoracja na ÅwiÄteczny stÃ³Å", image: "assets/produkty/IMG_4115.jpeg", status: "Na ZamÃ³wienie", category: "dekoracje" },
    { id: 9, name: "KrÃ³liczek", description: "RÄcznie robiony krÃ³liczek wielkanocny", image: "assets/produkty/IMG_4116.jpeg", status: "Na ZamÃ³wienie", category: "dekoracje" },
    { id: 10, name: "Koszyczek Wielkanocny", description: "MaÅy koszyczek idealny do ÅwiÄconki", image: "assets/produkty/IMG_4118.jpeg", status: "Na ZamÃ³wienie", category: "dekoracje" },
    { id: 11, name: "Buciki dla dzieciuszka", description: "WyjÄtkowe buciki niemowlÄce", image: "assets/produkty/IMG_4119.jpeg", status: "Na ZamÃ³wienie", category: "dzieci" },
    { id: 12, name: "AnioÅek", description: "Wykonany z dbaÅoÅciÄ o kaÅ¼dy detal", image: "assets/produkty/IMG_3992.jpeg", status: "Na ZamÃ³wienie", category: "aniolki" },
    { id: 13, name: "BaÅwanki i AnioÅek", description: "Zestaw uroczych zimowych dekoracji", image: "assets/produkty/IMG_3991.jpeg", status: "Na ZamÃ³wienie", category: "dekoracje" },
    { id: 14, name: "Serweta - Delikatna Koronka", description: "Klasyczna okrÄgÅa serweta koronkowa", image: "assets/produkty/IMG_3986.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 15, name: "Serweta - GÄsty WzÃ³r", description: "Serweta z bogatym gÄstym wzorem", image: "assets/produkty/IMG_3987.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 16, name: "Dzwoneczki", description: "Ozdobne dzwoneczki na choinkÄ", image: "assets/produkty/IMG_3988.jpeg", status: "Na ZamÃ³wienie", category: "dekoracje" },
    { id: 17, name: "Serweta Misa", description: "Serweta w ksztaÅcie misy na owoce", image: "assets/produkty/IMG_3989.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 18, name: "Serweta - DuÅ¼a", description: "DuÅ¼a serweta stoÅowa do salonu", image: "assets/produkty/IMG_3990.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 19, name: "Serweta - Finezyjny WzÃ³r", description: "Serweta o unikatowym finezyjnym wzorze", image: "assets/produkty/IMG_3966.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 20, name: "Serweta - Klasyczna", description: "Elegancka klasyczna serweta koronkowa", image: "assets/produkty/IMG_3967.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 21, name: "Serweta - OkrÄgÅa", description: "Serweta o idealnym okrÄgÅym ksztaÅcie", image: "assets/produkty/IMG_3968.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 22, name: "Serweta - Kwadratowa", description: "Serweta kwadratowa na stolik kawowy", image: "assets/produkty/IMG_3969.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 23, name: "Serweta - MaÅa", description: "Komplet maÅych serwetek pod filiÅ¼anki", image: "assets/produkty/IMG_3964.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 24, name: "Serweta - Owalna", description: "Elegancka serweta na podÅuÅ¼ny stÃ³Å", image: "assets/produkty/IMG_3965.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 25, name: "Serweta - PÅatek Åniegu", description: "Serweta z motywem zimowym", image: "assets/produkty/IMG_3958.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 26, name: "Wielkanocna Dekoracja", description: "Zestaw figurek ÅwiÄtecznych na Wielkanoc", image: "assets/produkty/IMG_3963.jpeg", status: "Na ZamÃ³wienie", category: "dekoracje" },
    { id: 27, name: "Serweta - RÄkodzieÅo", description: "PiÄkna serweta z mojej kolekcji", image: "assets/produkty/IMG_3962.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 28, name: "AnioÅek - MaÅy", description: "Subtelny mniejszy anioÅek", image: "assets/produkty/IMG_3927.jpg", status: "Na ZamÃ³wienie", category: "aniolki" },
    { id: 29, name: "Serweta Kwadrat", description: "Serweta kwadratowa pod wazon", image: "assets/produkty/IMG_3960.jpeg", status: "Na ZamÃ³wienie", category: "serwety" },
    { id: 1765735595826, name: "rafal", description: "oddam za darmo (zaplace za przesylke)", image: "assets/produkty/IMG_1765735594453.jpg", status: "Na Zamówienie", category: "aniolki" }
];;

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initGallery();
    initFilters();
    initModals();
    initContactForm();
    initAdminPanel();
    initScrollEffects();
});

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        lastScroll = currentScroll;
    });
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        });
    });
}

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
        item.addEventListener('click', () => {
            openImageModal(product.image, product.name);
        });
        productGrid.appendChild(item);
    });
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
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

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
}

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
                errorMessage.textContent = 'â NieprawidÅowe hasÅo!';
                setTimeout(() => { errorMessage.textContent = ''; }, 3000);
            }
        });
    }
}

function initScrollEffects() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
}