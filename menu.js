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