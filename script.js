// Product data - prices are in PLN
const products = [
    { id: 1, name: "one.jpg", price: 50, image: "assets/produkty/torba.jpg" },
    { id: 2, name: "Szal wełniany", price: 80, image: "assets/produkty/szal.jpg" },
    // Add more products here as needed
    // Format: { id: 3, name: "Serwetka", price: 25, image: "assets/produkty/serwetka.jpg" }
];

// Auto-generate product cards
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('products');
    
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">${product.price} zł</p>
                    <button class="add-to-cart snipcart-add-item"
                        data-item-id="${product.id}"
                        data-item-price="${product.price}"
                        data-item-url="/"
                        data-item-name="${product.name}"
                        data-item-image="${product.image}">
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
});
