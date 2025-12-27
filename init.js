// FORCE RELOAD with new products file
(function() {
    console.log('=== INIT v2: Loading fresh products ===');
    
    // Use NEW localStorage key to completely bypass old data
    const NEW_KEY = 'products_v2';
    const OLD_KEY = 'products';
    
    // Remove old key
    if (localStorage.getItem(OLD_KEY)) {
        console.log('Removing old products data...');
        localStorage.removeItem(OLD_KEY);
    }
    
    // Check if we have new products
    const products = localStorage.getItem(NEW_KEY);
    
    if (!products) {
        console.log('Loading products from products-v2.json...');
        
        fetch('products-v2.json')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load');
                return response.json();
            })
            .then(data => {
                console.log('SUCCESS! Loaded', data.length, 'products');
                console.log('First product:', data[0].name);
                
                // Store in NEW key
                localStorage.setItem(NEW_KEY, JSON.stringify(data));
                
                // Also set in old key for backward compatibility with script.js
                localStorage.setItem(OLD_KEY, JSON.stringify(data));
                
                console.log('Products saved to localStorage');
                
                // Reload once
                if (!window.location.search.includes('v2loaded')) {
                    console.log('Reloading page with new products...');
                    window.location.href = window.location.pathname + '?v2loaded=1';
                }
            })
            .catch(error => {
                console.error('ERROR loading products:', error);
            });
    } else {
        console.log('Products v2 already loaded');
        
        // Make sure old key also has the data
        if (!localStorage.getItem(OLD_KEY)) {
            localStorage.setItem(OLD_KEY, products);
        }
    }
})();