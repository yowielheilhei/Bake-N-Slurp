/**
 * our-story.js
 * Handles the popup logic for the Our Story page
 */

// 1. We store the "full" stories here so they don't clutter your HTML!
const STORY_DATA = {
    "Our Journey to Bake 'n Slurp": `
        <p>Our path wasn't a straight line. We started at home with a beverage concept called "D'stressitea," hoping to offer the same comfort I found in food to others. When that struggled to gain traction online, we didn't give up. We pivoted to bottling "Korean Fruit Milk," selling it to tourists who gave us the beautiful feedback we needed to keep going.</p>
        <p>Every bottle we sold taught us something new about what our community loved. It was those small moments of connection that inspired us to expand into baking.</p>
    `,
    "How We Started": `
        <p>It all started when we had no plans of opening a business at all. At the time, I had recently resigned from my job to heal from mental stress and emotional trauma, finding my only comfort in good food and quiet visits to local coffee shops.</p>
        <p>During this difficult season, my partner, Albert, lost his aunt. Money was incredibly tight, and we couldn't even afford to buy flowers for the wake. Looking at a fresh harvest of bananas we had at home, an idea sparked: why not bake banana muffins instead of buying flowers that would just wither away?</p>
        <p>That single batch of muffins changed everything. The comforting aroma and the joy it brought to our family during a dark time made us realize the true power of baking.</p>
    `,
    "Looking Ahead": `
        <p>As our journey continues, we are constantly reminded of how much we have yet to learn. Building this from the ground up has brought a steep learning curve, and we are the first to admit that we've had our share of shortcomings along the way. We realized that while having a product that people love is a beautiful foundation, running and sustaining a business requires so much more.</p>
        <p>Today, we take every single challenge and lapse as a vital lesson. We took a step back to absorb these experiences, using them to make our foundation stronger. We are committed to growing, adapting, and constantly improving behind the scenes so we can overcome future hurdles.</p>
        <p>Whether we are delivering pastries to your doorstep or planning our next big step, our promise remains the exact same: to provide the comforting food and drinks that our ever-growing Bake 'n Slurp family deserves. Thank you for staying with us through every chapter of our story.</p>
    `
};

// 2. The Logic that makes the popup work
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("storyModal");
    const closeBtn = document.querySelector(".close-modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");

    // Listen for clicks on ANY 'Continue Reading' button
    const continueButtons = document.querySelectorAll(".continue-btn");

    continueButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault(); // Stop the page from jumping to the top

            // Find the closest section to the button that was clicked
            const parentSection = this.closest(".story-section");
            
            // Grab the specific title and image from that section
            const titleText = parentSection.querySelector("h3").innerText;
            const imageSrc = parentSection.querySelector("img").src;

            // Fill the popup with that data
            modalTitle.innerText = titleText;
            modalImg.src = imageSrc;
            
            // Inject the long paragraphs from our STORY_DATA variable above
            if (STORY_DATA[titleText]) {
                modalDesc.innerHTML = STORY_DATA[titleText];
            } else {
                // If no long story is written yet, just use the short text
                modalDesc.innerHTML = `<p>${parentSection.querySelector("p").innerText}</p>`;
            }

            // Show the popup and lock the background screen from scrolling
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; 
        });
    });

    // Close when clicking the back arrow
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close when clicking the dark background outside the box
    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});