/* --- NAVIGATION LOGIC --- */
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger) { // Check if burger exists to prevent errors
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
        name: "Premium Soap",
        price: 12.00,
        images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500"]
    },
    {
        id: 2,
        name: "Essential Oil",
        price: 24.50,
        images: ["https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=500"]
    },
    {
        id: 3,
        name: "Body Cream",
        price: 18.00,
        images: ["https://images.unsplash.com/photo-1556228720-1987594a8da9?w=500"]
    },
    {
        id: 4,
        name: "Facial Scrub",
        price: 15.99,
        images: ["https://images.unsplash.com/photo-1585232561307-2f843963877d?w=500"]
    },
    {
        id: 5,
        name: "Coffee Scrub",
        price: 14.50,
        images: ["https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500"]
    },
    {
        id: 6,
        name: "Bath Salts",
        price: 9.99,
        images: ["https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500"]
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
                    <span class="price">€${product.price.toFixed(2)}</span>
                    <a href="#" class="btn" style="padding: 5px 15px; margin-top: 10px;">Add to Cart</a>
                </div>
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