// Skrypt ładujący produkty z products.json do localStorage
(async function() {
    try {
        // Sprawdzanie czy localStorage zawiera złe dane
        const existingProducts = localStorage.getItem('products');
        const hasInvalidEncoding = existingProducts && (existingProducts.includes('\u00c4') || existingProducts.includes('\u00c5') || existingProducts.includes('\u0141') || existingProducts.includes('\u0142'));
        
        // Załaduj produkty jeśli localStorage jest pusty lub zawiera złe kodowanie
        if (!existingProducts || hasInvalidEncoding) {
            console.log('Wykryto brak lub błędne kodowanie produktów, ładowanie z products.json...');
            
            const response = await fetch('products.json');
            if (!response.ok) {
                throw new Error('Nie udało się załadować products.json');
            }
            
            const products = await response.json();
            
            // Zapisz do localStorage
            localStorage.setItem('products', JSON.stringify(products));
            console.log('Produkty poprawnie załadowane z products.json:', products.length, 'produktów');
            
            // Odśwież stronę raz, aby nowe dane zostały załadowane
            if (hasInvalidEncoding) {
                console.log('Wymuszanie odświeżenia strony...');
                window.location.reload();
            }
        } else {
            console.log('Produkty już załadowane poprawnie w localStorage');
        }
    } catch (error) {
        console.error('Błąd podczas ładowania produktów:', error);
    }
})();