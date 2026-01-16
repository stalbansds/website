/*  
  🔷 MOBILE NAVIGATION TOGGLE
  This function opens and closes the hamburger menu on mobile.
  It works by adding/removing the "show" class from the nav menu.
*/

/* =====================================================
   🔷 MOBILE NAVIGATION TOGGLE
===================================================== */
function toggleMenu() {
  const nav = document.getElementById("navLinks");

  // Open/close mobile menu
  nav.classList.toggle("show");
}



/* =====================================================
   🔷 SPLASH SCREEN AUTO-HIDE (Optional)
===================================================== */
setTimeout(() => {
  const splash = document.getElementById("splash-screen");
  if (splash) splash.style.display = "none";
}, 1500); // 1s video + 1s fade



/* =====================================================
   🔷 SLIDESHOW LOGIC
===================================================== */

// Current slide index
let currentSlide = 0;


/* -----------------------------------------------------
   Show a specific slide
----------------------------------------------------- */
function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides + deactivate dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  // Show selected slide + activate dot
  slides[n].style.display = "block";
  dots[n].classList.add("active");
}



/* -----------------------------------------------------
   Initialize slideshow on page load
----------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Show first slide
  showSlide(currentSlide);

  // Auto-slide every 3 seconds
  setInterval(() => {
    const totalSlides = document.getElementsByClassName("slide").length;
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 3000);
});



/* =====================================================
   🔷 STORIES PAGE MODAL LOGIC
===================================================== */

function openModal(imageSrc, storyText) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalText = document.getElementById("modal-text");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  modalText.textContent = storyText;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


