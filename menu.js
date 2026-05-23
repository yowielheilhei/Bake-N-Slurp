// ==========================================
// 1. PRODUCT DATABASE
// ==========================================
const products = [
    // I added "isBestSeller: true" to a few items here so your new category works!
    { name: "Carrot Cake", category: "cakes", image: "assets/images/menu/carrot_cake.jpg", isBestSeller: true },
    { name: "Yema Cake", category: "cakes", image: "assets/images/menu/yema_cake.jpg"}, 
    { name: "Sunflower Cake", category: "cakes", image: "assets/images/menu/sunflower_cake.jpg" },
    { name: "Red Velvet Cream Cake", category: "cakes", image: "assets/images/menu/red_velvet_cream_cake.jpg" },
    { name: "Moist Choco Ganache Cake", category: "cakes", image: "assets/images/menu/moist_choco_ganache_cake.jpg" },
    { name: "Decadent Chocolate Cake", category: "cakes", image: "assets/images/menu/decradent_chocolate_cake.jpg" },
    { name: "Chiffon Coquette Cake", category: "cakes", image: "assets/images/menu/chiffon_coquette_cake.jpg" },
    { name: "Number 7 Cake", category: "cakes", image: "assets/images/menu/number_cake_(7).jpg" },
    { name: "Number 10 Cake", category: "cakes", image: "assets/images/menu/number_cake_(10).jpg" },
    { name: "Vanilla Dulce De Leche", category: "cakes", image: "assets/images/menu/vanilla_dulce_de_leche.jpg" },
    { name: "Ube De Leche", category: "cakes", image: "assets/images/menu/ube_de_leche.jpg" },
    { name: "Party Cheesecake", category: "cakes", image: "assets/images/menu/party_cheesecake.jpg" },
    { name: "Burnt Basque Cheesecake", category: "cakes", image: "assets/images/menu/burnt_basque_cheesecake.jpg" },
    { name: "Blueberry Cheesecake", category: "cakes", image: "assets/images/menu/blueberry_cheesecake.jpg" },
    { name: "Biscoff Cheesecake", category: "cakes", image: "assets/images/menu/biscoff_cheesecake.jpg" },
    { name: "6x4 Cupcake", category: "cakes", image: "assets/images/menu/6x4_cupcake.jpg" },
    { name: "Customized Cake (Blue)", category: "cakes", image: "assets/images/menu/customized_cake_plain.jpg" },
    { name: "Customized Cake (Yellow)", category: "cakes", image: "assets/images/menu/customized_cake_banana.jpg" },
    { name: "Customized Cake (Green)", category: "cakes", image: "assets/images/menu/customized_cake_matcha.jpg" },
    { name: "Customized Cake (Candy)", category: "cakes", image: "assets/images/menu/customized_cake_candy.jpg" },
    { name: "Customized Cake (Cars)", category: "cakes", image: "assets/images/menu/customized_cake_cars.jpg" },
    { name: "Customized Cake (Chicken)", category: "cakes", image: "assets/images/menu/customized_cake_chick.jpg" },
    { name: "Customized Cake (Christening)", category: "cakes", image: "assets/images/menu/customized_cake_christening.jpg" },
    { name: "Customized Cake (Farm)", category: "cakes", image: "assets/images/menu/customized_cake_farm.jpg" },
    { name: "Customized Cake (Fruits)", category: "cakes", image: "assets/images/menu/customized_cake_fruits.jpg" },
    { name: "Customized Cake (Kuromi)", category: "cakes", image: "assets/images/menu/customized_cake_kuromi.jpg" },
    
    { name: "Chicken Sandwich", category: "sandwiches", image: "assets/images/menu/chicken_sandwich.jpg", isBestSeller: true },
    { name: "Sausage Sandwich", category: "sandwiches", image: "assets/images/menu/sausage_sandwich.jpg" },
    { name: "Sausage Overload Sandwich", category: "sandwiches", image: "assets/images/menu/sausage_overload_sandwich.jpg" },
    { name: "Spam Overload Sandwich", category: "sandwiches", image: "assets/images/menu/spam_overload_sandwich.jpg" },
    { name: "Egg Toast (Cheesy Egg)", category: "sandwiches", image: "assets/images/menu/egg_toast_cheesy_egg.jpg" },
    { name: "Egg Toast (Cheesy Spam)", category: "sandwiches", image: "assets/images/menu/egg_toast_cheesy_spam.jpg" },
    { name: "Egg Toast (Cheesy Bacon and Mushroom)", category: "sandwiches", image: "assets/images/menu/egg_toast_cheesy_bacon_and_mushroom.jpg" },

    { name: "Chocolate Chip Cookie", category: "treats", image: "assets/images/menu/chocolate_chip_cookie.jpg" },
    { name: "Oatmeal Cookie", category: "treats", image: "assets/images/menu/oatmeal_cookie.jpg" },
    { name: "Assorted Banana Loafies", category: "treats", image: "assets/images/menu/assorted_banana_loafies.jpg" },
    { name: "Baked Kani Sushi", category: "treats", image: "assets/images/menu/baked_kani_sushi.jpg" },
    { name: "Mango Kani Salad", category: "treats", image: "assets/images/menu/mango_kani_salad.jpg" },
    { name: "Garden Salad", category: "treats", image: "assets/images/menu/garden_salad.jpg" },
    { name: "Banana Biscoff", category: "treats", image: "assets/images/menu/banana_biscoff.jpg" },
    { name: "Mocha Biscoff", category: "treats", image: "assets/images/menu/mocha_biscoff.jpg" },
    { name: "Chicken Alfredo", category: "treats", image: "assets/images/menu/chicken_alfredo.jpg" },
    { name: "Creme De Fruta", category: "treats", image: "assets/images/menu/creme_de_fruta.jpg" },
    { name: "Fresh Lumpia", category: "treats", image: "assets/images/menu/fresh_lumpia.jpg"},
    { name: "Graham Floats", category: "treats", image: "assets/images/menu/graham_floats.jpg" },
    { name: "Lasagna", category: "treats", image: "assets/images/menu/lasagna.jpg" },
    { name: "Chicken Popcorn with Barkada Fries", category: "treats", image: "assets/images/menu/chicken_popcorn_with_barkada_fries.jpg" },
    { name: "Chicken Wrap", category: "treats", image: "assets/images/menu/chicken_wrap.jpg" },
    { name: "Waffle French Toast", category: "treats", image: "assets/images/menu/waffle_french_toast.jpg" },
    { name: "Waffwich", category: "treats", image: "assets/images/menu/waffwich.jpg" },
    
    { name: "Mango Tapioca", category: "drinks", image: "assets/images/menu/mango_tapioca.jpg" },
    { name: "Iced Dark Cocoa", category: "drinks", image: "assets/images/menu/iced_dark_cocoa.jpg" },
    { name: "Mocha", category: "drinks", image: "assets/images/menu/mocha.jpg" },
    { name: "Biscoff Latte", category: "drinks", image: "assets/images/menu/biscoff_latte.jpg" },
    { name: "Spanish Latte", category: "drinks", image: "assets/images/menu/spanish_latte.jpg" },
    { name: "Chocochip Cookie", category: "drinks", image: "assets/images/menu/chocochip_cookie.jpg" },
    { name: "Chocolate Float", category: "drinks", image: "assets/images/menu/chocolate_float.jpg" },
    { name: "Fresh Lemonade", category: "drinks", image: "assets/images/menu/fresh_lemonade.jpg" },
    { name: "Honey Lemon Green Tea", category: "drinks", image: "assets/images/menu/honey_lemon_green_tea.jpg" },
    { name: "Lemon Jasmine Green Tea", category: "drinks", image: "assets/images/menu/lemon_jasmine_green_tea.jpg" },
    { name: "Strawberry Lemonade", category: "drinks", image: "assets/images/menu/strawberry_lemonade.jpg" },
    { name: "Matcha Banana Pudding", category: "drinks", image: "assets/images/menu/matcha_banana_pudding.jpg" },
    { name: "Matcha Float", category: "drinks", image: "assets/images/menu/matcha_float.jpg" },
    { name: "Matcha Latte", category: "drinks", image: "assets/images/menu/matcha_latte.jpg"},
    { name: "Milky Mango", category: "drinks", image: "assets/images/menu/milky_mango.jpg" },
    { name: "Milky Nutella", category: "drinks", image: "assets/images/menu/milky_nutella.jpg" },
    { name: "Milky Strawberry", category: "drinks", image: "assets/images/menu/milky_strawberry.jpg", isBestSeller: true },
];

// ==========================================
// 2. PRODUCT DESCRIPTIONS DATABASE
// ==========================================
const PRODUCT_DESCRIPTIONS = {
    "Carrot Cake": "Perfectly spiced, moist, and packed with flavor, topped with a generous swirl of rich cream frosting and a delicate crunch. A timeless classic done right.",
    "Yema Cake": "A Filipino favorite! Airy chiffon cake smothered in a smooth, velvety, and sweet yema custard glaze, beautifully finished with a drizzle of caramel.",
    "Sunflower Cake": "Brighten up any celebration with this beautifully piped masterpiece. Beneath the stunning, vibrant sunflower frosting lies a cake that tastes just as amazing as it looks.",
    "Red Velvet Cream Cake": "Deep, luxurious red velvet layers with a hint of cocoa, beautifully contrasted with thick swirls of smooth cream frosting and classic red velvet crumbs.",
    "Moist Choco Ganache Cake": "Pure chocolate indulgence. A decadently moist chocolate cake enrobed in a rich, velvety ganache and coated in chocolate sprinkles for the ultimate texture.",
    "Decadent Chocolate Cake": "Sleek, elegant, and intensely rich. These premium chocolate cakes feature a glass-like chocolate mirror finish with elegant gold accents-perfect for gifting or personal pampering.",
    "Chiffon Coquette Cake": "Beautifully aesthetic and completely on-trend. A light, fluffy chiffon cake adorned with delicate pink ribbons and vintage piping-almost too pretty to slice!",
    "Number 7 Cake": "Level up the birthday magic with this vibrant, custom-shaped number cake! Featuring a playful Pokemon theme complete with Pikachu yellow frosting and miniature Poke Balls.",
    "Number 10 Cake": "Celebrate the big double-digits with an elegant, nature-inspired masterpiece. This custom number cake is beautifully adorned with earthy sage-green frosting and delicate floral accents.",
    "Vanilla Dulce De Leche": "A heavenly pairing of classic, fragrant vanilla cake topped with a rich, buttery, and deeply caramelized dulce de leche center, framed by elegant white piping.",
    "Ube De Leche": "The ultimate Filipino flavor fusion. Vibrant, earthy ube cake topped with a generous layer of creamy, melt-in-your-mouth leche flan. A true crowd-pleaser!",
    "Party Cheesecake": "Can't choose just one flavor? This sampler wheel lets you try them all! Featuring a variety of rich, creamy cheesecake slices. The perfect party centerpiece.",
    "Burnt Basque Cheesecake": "Intentionally torched to caramelized perfection on the outside, revealing a brilliantly rich, custard-like, ultra-creamy center.",
    "Blueberry Cheesecake": "A smooth, velvety cream cheese base set on a buttery crust, topped with a generous layer of sweet, tangy whole blueberries.",
    "Biscoff Cheesecake": "The ultimate cookie-butter indulgence. Creamy cheesecake infused and topped with smooth Lotus Biscoff spread and a crunchy biscuit border.",        
    "6x4 Cupcake": "A perfect party box featuring a delicious, shareable mix of bite-sized, beautifully frosted cupcakes.",
    "Customized Cake (Blue)": "Monochromatic perfection. A sleek, vibrant blue celebration cake adorned with elegant textures and surrounded by a matching set of beautifully frosted cupcakes.",
    "Customized Cake (Yellow)": "Radiant and golden. Celebrate a golden milestone with this sophisticated cake, beautifully decorated with bright yellow roses, delicate pearls, and an elegant topper.",
    "Customized Cake (Green)": "Fresh, modern, and youthful. A stunning sage and mint green cake featuring trendy textured ribbing, topped with delicate floral rosettes.",
    "Customized Cake (Candy)": "A sweet-tooth's dream come true! This explosive pink-and-purple creation is overflowing with miniature donuts, lollipops, and candy toppings.",
    "Customized Cake (Cars)": "Ready, set, celebrate! Zoom into the party with this action-packed Cars-themed cake, complete with checkered racetrack flags.",
    "Customized Cake (Chicken)": "Bright, cheerful, and full of fun! Featuring playful little chicks and a bold sky-blue base, this adorable cake is perfect for a toddler's birthday.",
    "Customized Cake (Kuromi)": "Boldly cute and full of attitude. This pastel purple and black Kuromi-themed cake features the iconic character surrounded by matching star-topped cupcakes.",
    "Customized Cake (Christening)": "Elegant, peaceful, and beautifully crafted. Welcome your little angel with this soft pastel-blue cake, topped with a sleeping baby figurine.",
    "Customized Cake (Farm)": "Down on the farm! Bring the countryside to your party with this incredibly detailed red-barn cake, surrounded by friendly fondant farm animals.",
    "Customized Cake (Fruits)": "Sweet, healthy, and delightfully cheerful. A vibrant garden-themed cake decorated with adorable, smiling cartoon fruit characters.",
    
    "Chicken Sandwich": "Thick, satisfying layers of seasoned chicken, crisp fresh greens, and flavorful dressing tucked neatly between soft, wholesome bread.",
    "Sausage Sandwich": "A hearty comfort favorite featuring savory, grilled sausage, fresh lettuce, and melted cheese for a perfect midday fuel-up.",
    "Sausage Overload Sandwich": "For the true meat lover. A soft brioche bun splitting at the seams with a juicy sausage, loaded with crisp lettuce, fresh toppings, and signature sauces.",
    "Spam Overload Sandwich": "Pure comfort in a box. Thick, savory slices of grilled Spam layered with fresh greens and completely smothered in a rich, velvety cheese sauce.",
    "Egg Toast (Cheesy Egg)": "Simple, creamy perfection. Thick-cut, buttery toasted brioche bread stuffed with soft, fluffy scrambled eggs and heavily drizzled with a rich cheese sauce.",
    "Egg Toast (Cheesy Spam)": "The ultimate sweet-and-savory combo. Soft scrambled eggs paired with thick-cut, salty grilled Spam, tucked into toast and topped with cheese sauce.",
    "Egg Toast (Cheesy Bacon and Mushroom)": "An elevated breakfast favorite. Fluffy eggs topped with crisp, smoky bacon pieces and earthy, savory sautéed mushrooms, finished with a generous blanket of cheese.",

    "Mango Kani Salad": "A refreshing, colorful mix of sweet ripe mangoes, shredded kani (crab sticks), and crisp greens drizzled with a creamy, savory dressing.",
    "Garden Salad": "Keep it light and fresh with a crisp, vibrant mix of healthy greens and garden vegetables, packed to go.",
    "Chocolate Chip Cookie": "Chunky, rustic cookies loaded with premium chocolate chunks and baked to a perfect golden-brown crispness.",
    "Oatmeal Cookie": "Wholesome, chewy oatmeal cookies packed with texture and just the right amount of comforting sweetness.",
    "Assorted Banana Loafies": "Moist, naturally sweetened mini banana breads featuring a variety of delicious toppings like chocolate chips, nuts, and crumbles.",
    "Baked Kani Sushi": "A warm, creamy, and savory pan of baked sushi rice layered with seasoned kani, Japanese mayo, and a perfect torch finish.",
    "Banana Biscoff": "A heavenly fusion of moist, fresh banana cake swirled with deeply caramelized Lotus Biscoff cookie spread.",
    "Mocha Biscoff": "Bold, rich mocha cake layers infused with coffee notes and paired with a smooth, spiced Biscoff cookie butter topping.",        
    "Chicken Alfredo": "Rich, creamy, and deeply comforting. Tender pasta tossed in a velvety, garlic-infused white sauce, loaded with seasoned chicken and savory toppings.",
    "Lasagna": "Layers of perfectly cooked pasta sheets, a robust and meaty red sauce, and a generous, bubbling blanket of melted cheese baked to golden perfection.",
    "Fresh Lumpia": "A classic Filipino favorite! A wholesome medley of fresh, seasoned vegetables wrapped in a soft wrapper, served with a rich, sweet-savory brown sauce and crushed peanuts.",
    "Creme De Fruta": "A stunning, nostalgic dessert featuring layers of soft sponge cake and creamy custard, topped with a vibrant arrangement of sweet peaches, cherries, and a clear gelatin glaze.",
    "Graham Floats": "A crowd-pleasing tropical treat made with layers of sweet, fluffy cream and honey graham crackers, piled high with juicy, fresh ripe mangoes.",
    "Chicken Popcorn with Barkada Fries": "The ultimate sharing basket! Crispy, bite-sized golden chicken popcorn paired with a generous serving of classic fries and a savory dipping sauce.",
    "Chicken Wrap": "A clean and convenient bite. Tender, seasoned chicken and crisp vegetables tucked inside a warm, lightly toasted tortilla wrap, served with a flavorful dipping sauce.",
    "Waffle French Toast": "The ultimate brunch mashup. A thick, fluffy waffle prepared French-toast style, topped with a scoop of ice cream, crushed cookies, and a decadent drizzle of chocolate syrup.",
    "Waffwich": "A spectacular dessert sandwich! A crisp, golden waffle folded and loaded with a rich cream filling, heavily drizzled with chocolate, and finished with a crunch of sliced almonds.",
    
    "Mango Tapioca": "Creamy, refreshing, and packed to the brim with flavor! A delightful milk-based drink loaded with chewy tapioca pearls and sweet mango jelly cubes.",
    "Iced Dark Cocoa": "For the true chocolate lover. An intensely rich, bittersweet dark cocoa blend poured over ice and topped with a creamy, velvety milk layer.",
    "Mocha": "The perfect marriage of bold, freshly brewed espresso and rich chocolate, balanced with smooth milk over ice.",
    "Spanish Latte": "A beautifully layered, velvety espresso treat sweetened with a touch of condensed milk for a smooth, classic finish.",
    "Biscoff Latte": "Espresso meets cookie butter! A rich iced latte lined with indulgent Lotus Biscoff spread and topped with a crunchy biscuit.",
    "Fresh Lemonade": "Crisp, clean, and incredibly refreshing. Made with freshly squeezed lemons to deliver the perfect balance of sweet and tangy.",
    "Strawberry Lemonade": "A vibrant, fruity twist on a classic. Zesty fresh lemonade infused with sweet, real strawberry bits.",
    "Honey Lemon Green Tea": "A soothing, ice-cold blend of premium green tea, naturally sweetened with honey and brightened with fresh lemon slices.",
    "Lemon Jasmine Green Tea": "Light and highly aromatic. Fragrant jasmine green tea paired with a refreshing splash of citrus.",
    "Chocochip Cookie": "A blended, ice-cold chocolate dream packed with crunchy cookie bits and topped with a rich chocolate drizzle.",
    "Chocolate Float": "An ultra-rich, icy chocolate beverage topped with a generous scoop of creamy ice cream and chocolate syrup.",
    "Matcha Float": "Premium, earthy iced matcha latte elevated with a velvety scoop of vanilla ice cream on top.",
    "Milky Mango": "A wonderfully smooth, sweet, and creamy milk blend loaded with real, tropical mango flavor.",
    "Milky Nutella": "Decadent and nutty. A creamy milk base heavily marbled with rich, authentic Nutella chocolate spread.",
    "Milky Strawberry": "Pure berries-and-cream perfection! This gorgeous, layered drink swirls sweet strawberry bits with velvety milk for a classic comfort drink that tastes like childhood.",
    "Matcha Latte": "Authentic, vibrant green tea powder whisked to perfection and combined with smooth, creamy milk over ice.",
    "Matcha Banana Pudding": "The ultimate dessert in a cup! Earthy matcha layers meet the sweet, comforting flavors of creamy banana pudding.",
      
    // If a product doesn't have a specific description above, it will use this one:
    "Default": "A delicious, freshly baked treat made with love at Bake 'n Slurp. Click the button below to secure your order!"
};

// ==========================================
// 3. GLOBAL POPUP FUNCTION
// ==========================================
window.openProductModal = function(titleText, imgSrc) {
    const modal = document.getElementById("productModal");
    const modalImg = document.getElementById("prod-modal-img");
    const modalTitle = document.getElementById("prod-modal-title");
    const modalDesc = document.getElementById("prod-modal-desc");

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
};

// ==========================================
// 4. MAIN PAGE LOGIC (Filters & Search)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const categoryList = document.getElementById('category-list');
    const categoryTitle = document.getElementById('category-title');
    const searchInput = document.getElementById('search-input');
    const closeBtn = document.querySelector(".close-prod-modal");
    const modal = document.getElementById("productModal");

    // Function to display products on the screen
    function renderProducts(items) {
        productGrid.innerHTML = ''; // Clear the grid first
        if (items.length === 0) {
            productGrid.innerHTML = '<p style="grid-column: 1 / -1;">No products found.</p>';
            return;
        }

        items.forEach(product => {
            const productHTML = `
                <div class="product-item" style="cursor: pointer;" onclick="openProductModal('${product.name.replace(/'/g, "\\'")}', '${product.image}')">
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.name}</p>
                </div>
            `;
            productGrid.innerHTML += productHTML;
        });
    }

    // Start by showing all products
    renderProducts(products);

    // Handle Category Clicks
    categoryList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            document.querySelectorAll('#category-list li').forEach(li => li.classList.remove('active'));
            e.target.classList.add('active');

            const selectedCategory = e.target.getAttribute('data-category');
            categoryTitle.textContent = e.target.textContent;

            if (selectedCategory === 'all') {
                renderProducts(products);
            } else if (selectedCategory === 'best-sellers') {
                const filtered = products.filter(p => p.isBestSeller === true);
                renderProducts(filtered);
            } else {
                const filtered = products.filter(p => p.category === selectedCategory);
                renderProducts(filtered);
            }
            searchInput.value = '';
        }
    });

    // Handle Live Search
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const activeCategory = document.querySelector('#category-list li.active').getAttribute('data-category');
        
        const filtered = products.filter(p => {
            let matchesCategory = false;
            
            if (activeCategory === 'all') {
                matchesCategory = true;
            } else if (activeCategory === 'best-sellers') {
                matchesCategory = p.isBestSeller === true;
            } else {
                matchesCategory = p.category === activeCategory;
            }
            
            const matchesSearch = p.name.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        renderProducts(filtered);
    });

    // Close the modal when the back arrow is clicked
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        });
    }

    // ==========================================
    // 5. AUTO-SELECT CATEGORY FROM HOMEPAGE
    // ==========================================
    const urlParams = new URLSearchParams(window.location.search);
    const targetCategory = urlParams.get('category');

    if (targetCategory) {
        const sidebarLinks = document.querySelectorAll('.sidebar ul li');
        sidebarLinks.forEach(link => {
            if (link.innerText.toLowerCase().includes(targetCategory.toLowerCase())) {
                link.click(); 
            }
        });
    }
});