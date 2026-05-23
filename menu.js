// 1. Your Product Database
// Add or edit all your products right here!
const products = [
    { name: "Carrot Cake", category: "cakes", image: "assets/images/services/service1.jpg" },
    { name: "Chocolate Cake", category: "cakes", image: "assets/images/services/service2.jpg" }, // Use actual images later
    { name: "Ham and Cheese Sandwich", category: "sandwiches", image: "assets/images/services/service3.jpg" },
    { name: "Turkey and Avocado Sandwich", category: "sandwiches", image: "assets/images/services/service4.jpg" },
    { name: "BLT Sandwich", category: "sandwiches", image: "assets/images/services/service5.jpg" },
    { name: "Chocolate Chip Cookie", category: "treats", image: "assets/images/services/service6.jpg" },
    { name: "Strawberry Milk", category: "drinks", image: "assets/images/services/service7.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const categoryList = document.getElementById('category-list');
    const categoryTitle = document.getElementById('category-title');
    const searchInput = document.getElementById('search-input');

    // 2. Function to display products on the screen
    function renderProducts(items) {
        productGrid.innerHTML = ''; // Clear the grid first
        if (items.length === 0) {
            productGrid.innerHTML = '<p style="grid-column: 1 / -1;">No products found.</p>';
            return;
        }

        items.forEach(product => {
            const productHTML = `
                <div class="product-item">
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.name}</p>
                </div>
            `;
            productGrid.innerHTML += productHTML;
        });
    }

    // 3. Start by showing all products
    renderProducts(products);

    // 4. Handle Category Clicks
    categoryList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            // Update active styling on the sidebar
            document.querySelectorAll('#category-list li').forEach(li => li.classList.remove('active'));
            e.target.classList.add('active');

            // Get the category clicked
            const selectedCategory = e.target.getAttribute('data-category');
            
            // Update the title
            categoryTitle.textContent = e.target.textContent;

            // Filter the products
            if (selectedCategory === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === selectedCategory);
                renderProducts(filtered);
            }
            
            // Clear search bar when switching categories
            searchInput.value = '';
        }
    });

    // 5. Handle Live Search
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // Find which category is currently active
        const activeCategory = document.querySelector('#category-list li.active').getAttribute('data-category');
        
        // Filter by category AND search term
        const filtered = products.filter(p => {
            const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
            const matchesSearch = p.name.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        renderProducts(filtered);
    });
});


/**
 * menu.js
 * Handles the full-screen product popups
 */

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("productModal");
    const closeBtn = document.querySelector(".close-prod-modal");
    const modalImg = document.getElementById("prod-modal-img");
    const modalTitle = document.getElementById("prod-modal-title");
    const modalDesc = document.getElementById("prod-modal-desc");

    // 1. Your Database of Descriptions! 
    // Just type the exact name of your product, and the text you want to appear.
    const PRODUCT_DESCRIPTIONS = {
        "Red Velvet Cake": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        "Spanish Bread": "Our signature Spanish Bread is perfectly sweet, buttery, and melts in your mouth. Baked fresh every single morning.",
        "Pandesal": "The classic breakfast staple. Soft, fluffy, and best paired with a hot cup of coffee.",
        
        // If a product doesn't have a specific description above, it will use this one:
        "Default": "A delicious, freshly baked treat made with love at Bake 'n Slurp. Click the button below to secure your order!"
    };

    // 2. Find every product on your menu page
    // (This assumes your menu grid items have the class "product-item")
    const products = document.querySelectorAll(".product-item");

    products.forEach(product => {
        // Change the mouse to a pointer so people know they can click it
        product.style.cursor = "pointer"; 

        product.addEventListener("click", function () {
            // Grab the image and title from the specific product you clicked
            const imgSrc = this.querySelector("img").src;
            
            // Assuming your product titles are inside an <h4>, <h3>, or <p> tag inside the grid item
            const titleElement = this.querySelector("h4") || this.querySelector("h3") || this.querySelector("p");
            const titleText = titleElement ? titleElement.innerText : "Delicious Treat";

            // Put the image and title into the popup
            modalImg.src = imgSrc;
            modalTitle.innerText = titleText;

            // Look up the description in our database above
            if (PRODUCT_DESCRIPTIONS[titleText]) {
                modalDesc.innerText = PRODUCT_DESCRIPTIONS[titleText];
            } else {
                modalDesc.innerText = PRODUCT_DESCRIPTIONS["Default"];
            }

            // Open the modal and lock the background screen
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; 
        });
    });

    // 3. Close the modal when the back arrow is clicked
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
});


// ==========================================
// Auto-Select Category from Homepage Link
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Look at the web address and grab the secret "?category=" word
    const urlParams = new URLSearchParams(window.location.search);
    const targetCategory = urlParams.get('category');

    // 2. If a category word exists in the URL...
    if (targetCategory) {
        
        // 3. Find all the clickable category links in your menu sidebar
        // (Assuming your menu css uses .sidebar ul li for the categories)
        const sidebarLinks = document.querySelectorAll('.sidebar ul li');
        
        sidebarLinks.forEach(link => {
            // 4. If the sidebar text matches the secret word (e.g., "Sandwiches" matches "sandwiches")
            if (link.innerText.toLowerCase().includes(targetCategory.toLowerCase())) {
                
                // Automatically "click" that category for the user!
                link.click(); 
            }
        });
    }
});