// ================================================================
// BABCIA HALINA - MAIN JAVASCRIPT
// Version 3.0 - Clean UTF-8 encoding with English descriptions
// ================================================================

const products = [
    { id: 1, name: "Angel Lily", description: "Handmade angel as a gift", image: "assets/produkty/IMG_3993.jpeg", status: "On Order", category: "aniolki" },
    { id: 2, name: "Little Spiders", description: "Cute mascots for the youngest", image: "assets/produkty/IMG_4464.jpeg", status: "On Order", category: "dzieci" },
    { id: 3, name: "Baby Outfit", description: "Delicate, knitted outfit for baby", image: "assets/produkty/IMG_4161.jpeg", status: "On Order", category: "dzieci" },
    { id: 4, name: "Baby Booties", description: "Warm baby booties", image: "assets/produkty/IMG_4162.jpeg", status: "On Order", category: "dzieci" },
    { id: 5, name: "Red Angel", description: "Angel in intense red color", image: "assets/produkty/IMG_4167.jpeg", status: "On Order", category: "aniolki" },
    { id: 6, name: "Christmas Baubles", description: "Handmade Christmas tree ornaments", image: "assets/produkty/IMG_4168.jpeg", status: "On Order", category: "dekoracje" },
    { id: 7, name: "Rose Basket", description: "Decorative basket with embroidered roses", image: "assets/produkty/IMG_4169.jpeg", status: "On Order", category: "dekoracje" },
    { id: 8, name: "Easter Chicks", description: "Easter decoration for festive table", image: "assets/produkty/IMG_4115.jpeg", status: "On Order", category: "dekoracje" },
    { id: 9, name: "Easter Bunny", description: "Handmade Easter bunny", image: "assets/produkty/IMG_4116.jpeg", status: "On Order", category: "dekoracje" },
    { id: 10, name: "Easter Basket", description: "Small basket perfect for Easter", image: "assets/produkty/IMG_4118.jpeg", status: "On Order", category: "dekoracje" },
    { id: 11, name: "Baby Shoes", description: "Special baby booties", image: "assets/produkty/IMG_4119.jpeg", status: "On Order", category: "dzieci" },
    { id: 12, name: "Angel", description: "Made with attention to every detail", image: "assets/produkty/IMG_3992.jpeg", status: "On Order", category: "aniolki" },
    { id: 13, name: "Snowmen and Angel", description: "Set of cute winter decorations", image: "assets/produkty/IMG_3991.jpeg", status: "On Order", category: "dekoracje" },
    { id: 14, name: "Doily - Delicate Lace", description: "Classic round lace doily", image: "assets/produkty/IMG_3986.jpeg", status: "On Order", category: "serwety" },
    { id: 15, name: "Doily - Dense Pattern", description: "Doily with rich dense pattern", image: "assets/produkty/IMG_3987.jpeg", status: "On Order", category: "serwety" },
    { id: 16, name: "Christmas Bells", description: "Decorative bells for Christmas tree", image: "assets/produkty/IMG_3988.jpeg", status: "On Order", category: "dekoracje" },
    { id: 17, name: "Bowl Doily", description: "Doily shaped like fruit bowl", image: "assets/produkty/IMG_3989.jpeg", status: "On Order", category: "serwety" },
    { id: 18, name: "Doily - Large", description: "Large table doily for living room", image: "assets/produkty/IMG_3990.jpeg", status: "On Order", category: "serwety" },
    { id: 19, name: "Doily - Fine Pattern", description: "Doily with unique fine pattern", image: "assets/produkty/IMG_3966.jpeg", status: "On Order", category: "serwety" },
    { id: 20, name: "Doily - Classic", description: "Elegant classic lace doily", image: "assets/produkty/IMG_3967.jpeg", status: "On Order", category: "serwety" },
    { id: 21, name: "Doily - Round", description: "Doily with perfect round shape", image: "assets/produkty/IMG_3968.jpeg", status: "On Order", category: "serwety" },
    { id: 22, name: "Doily - Square", description: "Square doily for coffee table", image: "assets/produkty/IMG_3969.jpeg", status: "On Order", category: "serwety" },
    { id: 23, name: "Doily - Small", description: "Set of small doilies for cups", image: "assets/produkty/IMG_3964.jpeg", status: "On Order", category: "serwety" },
    { id: 24, name: "Doily - Oval", description: "Elegant doily for long table", image: "assets/produkty/IMG_3965.jpeg", status: "On Order", category: "serwety" },
    { id: 25, name: "Doily - Snowflake", description: "Doily with winter motif", image: "assets/produkty/IMG_3958.jpeg", status: "On Order", category: "serwety" },
    { id: 26, name: "Easter Decoration", description: "Set of Easter holiday figures", image: "assets/produkty/IMG_3963.jpeg", status: "On Order", category: "dekoracje" },
    { id: 27, name: "Doily - Handcraft", description: "Beautiful doily from my collection", image: "assets/produkty/IMG_3962.jpeg", status: "On Order", category: "serwety" },
    { id: 28, name: "Angel - Small", description: "Subtle smaller angel", image: "assets/produkty/IMG_3927.jpg", status: "On Order", category: "aniolki" },
    { id: 29, name: "Square Doily", description: "Square doily for vase", image: "assets/produkty/IMG_3960.jpeg", status: "On Order", category: "serwety" },
    { id: 1765735595826, name: "Rafal", description: "Free giveaway (pay shipping only)", image: "assets/produkty/IMG_1765735594453.jpg", status: "On Order", category: "aniolki" },
    { id: 1765825451966, name: "Pine Cones", description: "Pine cones decoration", image: "assets/produkty/IMG_1765825449814.jpg", status: "On Order", category: "dekoracje" },
    { id: 1765829202675, name: "Angels", description: "Angels collection", image: "assets/produkty/IMG_1765829199893.jpg", status: "On Order", category: "aniolki" },
    { id: 1766493359422, name: "Candles", description: "Decorative candles", image: "assets/produkty/IMG_1766493356330.jpg", status: "On Order", category: "dekoracje" },
    { id: 1766493522358, name: "Candles", description: "Decorative candles", image: "assets/produkty/IMG_1766493519662.jpg", status: "On Order", category: "dekoracje" }
];

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
                errorMessage.textContent = 'Wrong password!';
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