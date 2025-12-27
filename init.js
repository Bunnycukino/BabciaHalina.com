// Force clear and reload products from products.json
(function() {
    console.log('=== INIT: Checking products ===');
    
    // FORCE CLEAR - always clear on first visit in this session
    const sessionKey = 'products_v2_loaded';
    const wasCleared = sessionStorage.getItem(sessionKey);
    
    if (!wasCleared) {
        console.log('First load in session - clearing localStorage');
        localStorage.removeItem('products');
        sessionStorage.setItem(sessionKey, 'true');
    }
    
    const existingProducts = localStorage.getItem('products');
    
    // Check if we need to load products
    if (!existingProducts) {
        console.log('Loading products from products.json...');
        
        fetch('products.json')
            .then(response => response.json())
            .then(products => {
                console.log('Loaded', products.length, 'products');
                console.log('First product:', products[0]);
                localStorage.setItem('products', JSON.stringify(products));
                
                // Reload page once to apply new products
                if (!window.location.search.includes('loaded')) {
                    window.location.href = window.location.pathname + '?loaded=1';
                }
            })
            .catch(error => {
                console.error('Error loading products:', error);
            });
    } else {
        console.log('Products exist in localStorage');
        
        // Verify products are correct (English)
        try {
            const products = JSON.parse(existingProducts);
            const firstProduct = products[0];
            console.log('Current first product:', firstProduct.name);
            
            // If product name is not English (doesn't contain "Angels" or "Baby"), clear it
            const hasEnglishNames = firstProduct.name.includes('Angels') || 
                                   firstProduct.name.includes('Baby') || 
                                   firstProduct.name.includes('Angel');
            
            if (!hasEnglishNames) {
                console.log('Products have wrong encoding! Clearing...');
                localStorage.removeItem('products');
                sessionStorage.removeItem(sessionKey);
                window.location.reload();
            }
        } catch (e) {
            console.error('Error checking products:', e);
        }
    }
})();