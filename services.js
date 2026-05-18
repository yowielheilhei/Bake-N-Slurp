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
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
      longDesc: `
        <p>As our journey continues, we are constantly reminded of how much we have yet to learn. Building this from the ground up has brought a steep learning curve, and we are the first to admit that we've had our share of shortcomings along the way. We realized that while having a product that people love is a beautiful foundation, running and sustaining a business requires so much more.</p>
        <p>Today, we take every single challenge and lapse as a vital lesson. We took a step back to absorb these experiences, using them to make our foundation stronger. We are committed to growing, adapting, and constantly improving behind the scenes so we can overcome future hurdles.</p>
        <p>Whether we are delivering pastries to your doorstep or planning our next big step, our promise remains the exact same: to provide the comforting food and drinks that our ever-growing Bake 'n Slurp family deserves. Thank you for staying with us through every chapter of our story.</p>
      `
    },
    {
      id: 2,
      title: "Custom Pastry Boxes",
      image: "assets/images/services/service2.png",
      alt: "Golden cream-filled pastries in a box",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
      longDesc: "<p>Details about pastry boxes go here. You can add multiple paragraphs just like the first example.</p>"
    },
    {
      id: 3,
      title: "Flowers for Sale",
      image: "assets/images/services/service3.png",
      alt: "Baking cookies on a tray",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
      longDesc: "<p>Details about this service go here.</p>"
    },
    {
        id: 4,
        title: "Service",
        image: "assets/images/services/service4.png",
        alt: "Flower arrangement",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        longDesc: "<p>Details about this service go here.</p>"
    },
    {
        id: 5,
        title: "Service",
        image: "assets/images/services/service5.png",
        alt: "Donut box",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        longDesc: "<p>Details about this service go here.</p>"
    },
    {
        id: 6,
        title: "Service",
        image: "assets/images/services/service6.png",
        alt: "Whole pie",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        longDesc: "<p>Details about this service go here.</p>"
    },
    {
        id: 7,
        title: "Service",
        image: "assets/images/services/service7.png",
        alt: "Fresh flowers for sale",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        longDesc: `
        <p>As our journey continues, we are constantly reminded of how much we have yet to learn. Building this from the ground up has brought a steep learning curve, and we are the first to admit that we've had our share of shortcomings along the way. We realized that while having a product that people love is a beautiful foundation, running and sustaining a business requires so much more.</p>
        <p>Today, we take every single challenge and lapse as a vital lesson. We took a step back to absorb these experiences, using them to make our foundation stronger. We are committed to growing, adapting, and constantly improving behind the scenes so we can overcome future hurdles.</p>
        <p>Whether we are delivering pastries to your doorstep or planning our next big step, our promise remains the exact same: to provide the comforting food and drinks that our ever-growing Bake 'n Slurp family deserves. Thank you for staying with us through every chapter of our story.</p>
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