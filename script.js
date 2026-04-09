/* --- NAVIGATION LOGIC --- */
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) { // Check if burger exists to prevent errors
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
}

/* --- PRODUCT DATA --- */
const products = [
    {
        id: 1,
        name: "Alufolie Extra Stark 1100 gr.",
        images: ["public/products/Alufolie Extra Stark 1100 gr..webp"]
    },
    {
        id: 2,
        name: "Bagasse Salat Schale rund mit Bagasse Deckel",
        images: ["public/products/Bagasse Salat Schale rund mit Bagasse Deckel.webp"]
    },
    {
        id: 3,
        name: "Bagasse Schale rund mit Bagasse Deckel",
        images: ["public/products/Bagasse Schale rund mit Bagasse Deckel.webp"]
    },
    {
        id: 4,
        name: "Besteck aus Plastik",
        images: ["public/products/Besteck aus Plastik.webp"]
    },
    {
        id: 5,
        name: "Deckel für Kaffeebecher",
        images: ["public/products/Deckel für Kaffeebecher.webp"]
    },
    {
        id: 6,
        name: "Dönerbox 26 oz",
        images: ["public/products/Dönerbox 26 oz.webp"]
    },
    {
        id: 7,
        name: "Dönerbox Schwarz",
        images: ["public/products/Dönerbox Schwarz.webp"]
    },
    {
        id: 8,
        name: "Dönertüte Braun",
        images: ["public/products/Dönertüte Braun.webp"]
    },
    {
        id: 9,
        name: "Dönertüte",
        images: ["public/products/Dönertüte.webp"]
    },
    {
        id: 10,
        name: "Foodbox für Asiatische Gerichte",
        images: ["public/products/Foodbox für Asiatische Gerichte.webp"]
    },
    {
        id: 11,
        name: "Hamburgerbox aus Bagasse gross mit Deckel",
        images: ["public/products/Hamburgerbox aus Bagasse gross mit Deckel.webp"]
    },
    {
        id: 12,
        name: "Kaffeebecher und Deckel",
        images: ["public/products/Kaffeebecher.webp"]
    },
    {
        id: 13,
        name: "Klarsichtbecher für Soßen 125 cc",
        images: ["public/products/Klarsichtbecher für Soßen 125 cc.webp"]
    },
    {
        id: 14,
        name: "Klarsichtbecher für Soßen 250 cc",
        images: ["public/products/Klarsichtbecher für Soßen 250 cc.webp"]
    },
    {
        id: 15,
        name: "Menübox aus Bagasse mit Deckel 2 geteilt",
        images: ["public/products/Menübox aus Bagasse mit Deckel 2 geteilt.webp"]
    },
    {
        id: 16,
        name: "Menübox aus Bagasse mit Deckel 3 geteilt",
        images: ["public/products/Menübox aus Bagasse mit Deckel 3 geteilt.webp"]
    },
    {
        id: 17,
        name: "Menübox aus Bagasse mit Deckel",
        images: ["public/products/Menübox aus Bagasse mit Deckel.webp"]
    },
    {
        id: 18,
        name: "Müllbeutel Blau 25 Stück pro Rolle",
        images: ["public/products/Müllbeutel Blau 25 Stück pro Rolle.webp"]
    },
    {
        id: 19,
        name: "Sil-Pack Servietten",
        images: ["public/products/Sil-Pack Servietten.webp"]
    },
    {
        id: 20,
        name: "Soßenbecher 50-80-100 cc",
        images: ["public/products/Soßenbecher 50-80-100 cc.webp"]
    },
    {
        id: 21,
        name: "Tragetaschen 45 cm",
        images: ["public/products/Tragetaschen 45 cm.webp"]
    },
    {
        id: 22,
        name: "Tragetaschen 48 cm",
        images: ["public/products/Tragetaschen 48 cm.webp"]
    }
];

/* --- GENERATOR FUNCTION --- */
function loadProducts() {
    const container = document.getElementById('product-container');

    // Safety check: if html ID is missing, stop here
    if (!container) return;

    container.innerHTML = '';

    products.forEach(product => {
        const mainImage = product.images[0];

        const productHTML = `
            <div class="product-card">
                <img src="${mainImage}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <a href="product.html?id=${product.id}" class="btn" style="padding: 5px 15px; margin-top: 10px;">Zum Produkt</a>                </div>
            </div>
        `;

        container.innerHTML += productHTML;
    });
}

/* --- INITIALIZE --- */
// Run everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    loadProducts();
});