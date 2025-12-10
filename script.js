document.addEventListener('DOMContentLoaded', function() {
    // Lista produktów Babci Haliny - automatycznie wczytywana do sekcji "Galeria Prac"
    
    // UWAGA: Ścieżki do zdjęć (assets/produkty/...) są zgodne z Twoim opisem.
    // Zachęcam do rozszerzenia opisów produktów!
    const products = [
        { 
            id: 1, 
            name: "Aniołek Lily", 
            description: "Ręcznie robiony aniołek na prezent lub dekorację świąteczną. Unikatowy design.", 
            image: "assets/produkty/IMG_3993.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 2, 
            name: "Pajacyki", 
            description: "Urocze, szyte maskotki, idealne dla najmłodszych. Zapytaj o dostępne kolory.", 
            image: "assets/produkty/IMG_4464.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 3, 
            name: "Ubranko dla dziecka", 
            description: "Delikatne, ręcznie dziergane ubranko dla malucha. Idealne na chrzest lub sesję zdjęciową.", 
            image: "assets/produkty/IMG_4161.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 4, 
            name: "Buciki", 
            description: "Ciepłe, dziergane buciki niemowlęce. Zapewniają komfort i stylowy wygląd.", 
            image: "assets/produkty/IMG_4162.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 5, 
            name: "Czerwony Aniołek", 
            description: "Aniołek w intensywnym, czerwonym kolorze. Doskonały akcent do każdego wnętrza.", 
            image: "assets/produkty/IMG_4167.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 6, 
            name: "Bombki 😍", 
            description: "Unikalne, ręcznie robione bombki, które dodadzą blasku Twojej choince.", 
            image: "assets/produkty/IMG_4168.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 7, 
            name: "Koszyk różyczek", 
            description: "Ozdobny koszyczek z haftowanymi lub dzierganymi różyczkami.", 
            image: "assets/produkty/IMG_4169.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 8, 
            name: "Kurczaczki", 
            description: "Wielkanocna dekoracja: urocze, małe kurczaczki na świąteczny stół.", 
            image: "assets/produkty/IMG_4115.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 9, 
            name: "Króliczek", 
            description: "Ręcznie robiony króliczek, idealny jako maskotka lub dekoracja Wielkanocna.", 
            image: "assets/produkty/IMG_4116.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 10, 
            name: "Koszyczek Wielkanocny", 
            description: "Mały, ozdobny koszyczek, idealny do święconki lub jako dekoracja.", 
            image: "assets/produkty/IMG_4118.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 11, 
            name: "Buciki dla dzieciuszka", 
            description: "Wyjątkowe buciki niemowlęce, idealny pomysł na prezent.", 
            image: "assets/produkty/IMG_4119.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 12, 
            name: "Aniołek 2", 
            description: "Inny wariant aniołka, wykonany z dbałością o każdy detal.", 
            image: "assets/produkty/IMG_3992.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 13, 
            name: "Bałwanki i Aniołek", 
            description: "Zestaw uroczych, zimowych dekoracji. Zapytaj o dostępność całego kompletu.", 
            image: "assets/produkty/IMG_3991.jpeg", 
            status: "Na Zamówienie"
        },
        // Serwety zróżnicowane, aby unikać powtarzania tego samego tytułu
        { 
            id: 14, 
            name: "Serweta - Delikatna Koronka", 
            description: "Klasyczna, okrągła serweta koronkowa. Średnica na zamówienie.", 
            image: "assets/produkty/IMG_3986.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 15, 
            name: "Serweta - Gęsty Wzór", 
            description: "Ręcznie robiona serweta z bogatym, gęstym wzorem.", 
            image: "assets/produkty/IMG_3987.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 16, 
            name: "Dzwoneczki", 
            description: "Ozdobne dzwoneczki, idealne na choinkę lub jako świąteczna zawieszka.", 
            image: "assets/produkty/IMG_3988.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 17, 
            name: "Serweta Misa", 
            description: "Serweta formowana w kształcie misy, idealna na owoce lub słodycze.", 
            image: "assets/produkty/IMG_3989.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 18, 
            name: "Serweta - Duża", 
            description: "Duża serweta stołowa, idealna do salonu. Wymiary na życzenie.", 
            image: "assets/produkty/IMG_3990.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 19, 
            name: "Serweta - Finezyjny Wzór", 
            description: "Serweta o unikatowym, finezyjnym wzorze. Prawdziwe arcydzieło rękodzieła.", 
            image: "assets/produkty/IMG_3966.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 20, 
            name: "Serweta - Klasyczna", 
            description: "Elegancka, klasyczna serweta koronkowa, pasująca do każdego wnętrza.", 
            image: "assets/produkty/IMG_3967.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 21, 
            name: "Serweta - Okrągła", 
            description: "Serweta o idealnym okrągłym kształcie. Zapytaj o dostępne kolory nici.", 
            image: "assets/produkty/IMG_3968.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 22, 
            name: "Serweta - Kwadratowa", 
            description: "Serweta w kształcie kwadratu. Geometryczny wzór idealny na stolik kawowy.", 
            image: "assets/produkty/IMG_3969.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 23, 
            name: "Serweta - Mała", 
            description: "Komplet małych serwetek, idealnych pod filiżanki i kubki.", 
            image: "assets/produkty/IMG_3964.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 24, 
            name: "Serweta - Owalna", 
            description: "Elegancka serweta na podłużny stół lub komodę.", 
            image: "assets/produkty/IMG_3965.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 25, 
            name: "Serweta - Płatek Śniegu", 
            description: "Serweta z motywem zimowym lub kwiatowym. Zapytaj o szczegóły.", 
            image: "assets/produkty/IMG_3958.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 26, 
            name: "Wielkanocna Dekoracja", 
            description: "Zestaw figurek i dekoracji świątecznych. Stworzony specjalnie na Wielkanoc.", 
            image: "assets/produkty/IMG_3963.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 27, 
            name: "Serweta - Rękodzieło", 
            description: "Kolejna piękna serweta z mojej kolekcji. Gwarancja najwyższej jakości.", 
            image: "assets/produkty/IMG_3962.jpeg", 
            status: "Na Zamówienie"
        },
        { 
            id: 28, 
            name: "Aniołek - Mały", 
            description: "Subtelny, mniejszy aniołek. Idealny jako zawieszka lub dodatek do prezentu.", 
            image: "assets/produkty/IMG_3927.jpg", 
            status: "Na Zamówienie"
        },
        { 
            id: 29, 
            name: "Serweta Kwadrat", 
            description: "Serweta kwadratowa, doskonała pod wazon lub ramkę na zdjęcia.", 
            image: "assets/produkty/IMG_3960.jpeg", 
            status: "Na Zamówienie"
        }
    ];

    const productListElement = document.getElementById('product-list');

    // 2. Funkcja do Renderowania Produktów
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Funkcja onerror służy jako zabezpieczenie, jeśli plik zdjęcia nie zostanie znaleziony
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='placeholder.jpg';">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Status:</strong> <span style="color: #ff6600; font-weight: bold;">${product.status}</span></p>
            <a href="#kontakt" class="cta-button">Zapytaj o Wykonanie</a>
        `;

        productListElement.appendChild(card);
    });
});
