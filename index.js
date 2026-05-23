const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

function updateSlides(index) {
  // Remove active class from current slide
  slides[currentIndex].classList.remove('active');
  
  // Update index contextually
  currentIndex = index;
  
  // Handle boundary loops
  if (currentIndex >= slides.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  
  // Add active class to new slide
  slides[currentIndex].classList.add('active');
}

// Event Listeners for buttons
nextBtn.addEventListener('click', () => {
  updateSlides(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  updateSlides(currentIndex - 1);
});

// Optional: Auto-play every 5 seconds
setInterval(() => {
  updateSlides(currentIndex + 1);
}, 5000);