/**
 * services.js
 * Page-specific logic for the Services page.
 * Renders the page hero banner, service cards, and handles the modal popup.
 */

// ─── DATA ────────────────────────────────────────────────────────────────────

// You can expand the description here to match the long text in your popup image
const SERVICES_DATA = [
    {
      id: 1,
      title: "Pasabuy",
      image: "assets/images/services/service1.png", 
      alt: "Ube cheese donuts",
      shortDesc: "Hand-carried delivery of premium, cream-filled Ube sugar donuts.",
      longDesc: `
        <p>This service sources and delivers popular, freshly baked purple Ube donuts stuffed with rich cream cheese filling directly to your home.</p>
        <p>It is a hassle-free way to enjoy famous regional treats without traveling or waiting in long lines.</p>
        `
    },
    {
      id: 2,
      title: "Custom Pastry Boxes",
      image: "assets/images/services/service2.png",
      alt: "Golden cream-filled pastries in a box",
      shortDesc: "Baker's choice boxes of pillowy, custard-filled brioche donuts.",
      longDesc: `
        <p>These boxes feature golden, sugar-dusted donuts packed with smooth and creamy vanilla custard</p>
        <p>Perfect for sharing with family, bringing to parties, or gifting to fellow dessert lovers.</p>
      `
    },
    {
      id: 3,
      title: "Tart and Pastry Platters",
      image: "assets/images/services/service3.png",
      alt: "Baking cookies on a tray",
      shortDesc: "Delicate, artisanal tartlets  topped with a buttery streusel",
      longDesc: `
        <p>Our pastry platters feature bite-sized tartlets baked to a flawless golden-brown crisp and topped with an irresistible, crumbly streusel.</p>
        <p>Beautifully arranged and ready to serve, they are the ideal centerpieces for your meetings, parties, or weekend brunches.</p>
      `
        
    },
    {
        id: 4,
        title: "Premium Floral Bouquets",
        image: "assets/images/services/service4.png",
        alt: "Flower arrangement",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        longDesc: `
          <p>Brighten up someone's day with our masterfully curated flower arrangements, featuring rich colors and elegant wrapping.</p>
          <p>Whether it is an anniversary, a graduation, or just a sweet surprise, these premium bouquets speak louder than words.</p>
        `
    },
    {
        id: 5,
        title: "Assorted Gourmet Donut Boxes",
        image: "assets/images/services/service5.png",
        alt: "Donut box",
        shortDesc: "A curated box of premium, artisanal donuts featuring unique glazes and decadent toppings.",
        longDesc:`
          <p>Indulge in a handpicked selection of gourmet donuts featuring custom glazes, rich fillings, and unique flavor combinations.</p>
          <p>Specially packaged to ensure freshness, these boxes bring the Ultimate donut-shop experience right to your dining table.</p>
        `
    },
    {
        id: 6,
        title: "Authentic Buco Pie Delivery",
        image: "assets/images/services/service6.png",
        alt: "Freshly baked authentic buco pie box",
        shortDesc: "Freshly baked, authentic buco pie loaded with tender young coconut meat and a flaky crust.",
        longDesc: `
          <p>Enjoy the authentic flavor of traditional Filipino buco pie, loaded with thick layers of tender young coconut inside a buttery, flaky pastry crust.</p>
          <p>We source these regional favorites fresh and handle delivery with absolute care, ensuring they arrive warm and satisfyingly crisp.</p>
        `
    },
    {
        id: 7,
        title: "Fresh Flower Pop-Up",
        image: "assets/images/services/service7.png",
        alt: "Fresh flowers for sale",
        shortDesc: "Catch our vibrant pop-up stands featuring a beautiful selection of seasonal, hand-picked flowers.",
        longDesc: `
          <p>Bring nature’s finest colors into your home with our seasonal, hand-picked flower pop-up markets setup directly in local communities.</p>
          <p>Whether you are selecting individual stems to design your own arrangement or purchasing a pre-bundled bundle, we bring fresh, beautiful blooms closer to you.</p>
        `
    }
  ];
  
  // ─── COMPONENTS ──────────────────────────────────────────────────────────────
  
  function renderPageHero({ title, imageSrc, imageAlt = "" }) {
    const container = document.getElementById("page-hero");
    if (!container) return;
  
    container.innerHTML = `
      <section class="services-hero" aria-label="${title} page banner">
        <img src="${imageSrc}" alt="${imageAlt}" aria-hidden="true" />
        <h1 class="page-hero-title">${title}</h1>
      </section>
    `;
  }
  
  function createServiceCard(service) {
    const article = document.createElement("div");
    article.className = "service-card";
    
    // Add data attribute so we know which card was clicked
    article.setAttribute("data-id", service.id); 
  
    article.innerHTML = `
      <div class="card-img-container">
          <img src="${service.image}" alt="${service.alt}">
      </div>
      <div class="card-content">
          <h3>${service.title}</h3>
          <p>${service.shortDesc}</p>
          <span class="read-more">Continue Reading &rarr;</span>
      </div>
    `;
  
    return article;
  }
  
  function renderServicesGrid(data = SERVICES_DATA) {
    const container = document.getElementById("services-grid");
    if (!container) return;
  
    container.innerHTML = "";
  
    data.forEach((service) => {
      container.appendChild(createServiceCard(service));
    });
  }
  
  // ─── MODAL LOGIC ─────────────────────────────────────────────────────────────

  function initModal() {
    const modal = document.getElementById("serviceModal");
    const closeBtn = document.querySelector(".close-modal");
    const servicesGrid = document.getElementById("services-grid");

    // Elements inside the modal to update
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");

    // Open Modal when a card is clicked
    servicesGrid.addEventListener("click", function(e) {
        // Find the closest parent card element that was clicked
        const clickedCard = e.target.closest('.service-card');
        
        if (clickedCard) {
            const serviceId = parseInt(clickedCard.getAttribute('data-id'));
            // Find the correct data from our array
            const serviceData = SERVICES_DATA.find(s => s.id === serviceId);

            if (serviceData) {
                // Populate the modal
                modalImg.src = serviceData.image;
                modalImg.alt = serviceData.alt;
                modalTitle.textContent = serviceData.title;
                // Use innerHTML because longDesc contains <p> tags
                modalDesc.innerHTML = serviceData.longDesc || `<p>${serviceData.shortDesc}</p>`;

                // Show the modal
                modal.style.display = "block";
                
                // Prevent scrolling on the body while modal is open
                document.body.style.overflow = "hidden";
            }
        }
    });

    // Close Modal when clicking the 'X' (or back arrow)
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
    });

    // Close Modal when clicking outside the modal content box
    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
  }
  
  // ─── INIT ─────────────────────────────────────────────────────────────────────
  
  document.addEventListener("DOMContentLoaded", function () {
    renderPageHero({
      title: "SERVICES",
      imageSrc: "assets/images/services-hero.png", // Make sure this path is correct
      imageAlt: "Services background",
    });
  
    renderServicesGrid();
    initModal(); // Initialize the popup logic
  });