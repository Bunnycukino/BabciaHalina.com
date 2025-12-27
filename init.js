// Inicjalizacja - czyszczenie starych danych i ladowanie nowych
(function() {
    console.log('=== INIT: Sprawdzanie danych produktow ===');
    
    // Sprawdz czy sa stare dane z blednym kodowaniem
    const oldProducts = localStorage.getItem('products');
    let needsReload = false;
    
    if (oldProducts) {
        // Sprawdz czy dane zawieraja znieksztalcone znaki
        if (oldProducts.includes('\\u00') || oldProducts.includes('&#') || 
            oldProducts.includes('Ä') || oldProducts.includes('Å') || 
            oldProducts.includes('Ã') || oldProducts.includes('\\xc4')) {
            console.log('UWAGA: Wykryto stare dane z blednym kodowaniem!');
            console.log('Czyszczenie localStorage...');
            localStorage.removeItem('products');
            needsReload = true;
        }
    }
    
    // Jesli nie ma produktow lub byly zle, zaladuj z JSON
    if (!localStorage.getItem('products')) {
        console.log('Ladowanie produktow z products.json...');
        
        fetch('products.json')
            .then(response => response.json())
            .then(products => {
                console.log('Zaladowano', products.length, 'produktow z products.json');
                localStorage.setItem('products', JSON.stringify(products));
                
                if (needsReload && !window.location.search.includes('reloaded')) {
                    console.log('Przeladowanie strony z nowymi danymi...');
                    window.location.href = window.location.pathname + '?reloaded=1';
                }
            })
            .catch(error => {
                console.error('Blad ladowania products.json:', error);
            });
    } else {
        console.log('Produkty juz zaladowane w localStorage');
    }
})();