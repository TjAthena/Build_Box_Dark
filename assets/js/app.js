function showPinFap(index) {
  const displays = document.querySelectorAll(".pin-display-fap");
  const buttons = document.querySelectorAll(".pin-button-fap");

  displays.forEach((el, i) => {
    el.classList.toggle("active-fap", i === index);
  });

  buttons.forEach((btn, i) => {
    btn.classList.toggle("active-fap", i === index);
  });
}

function showPinFap(index) {
  const buttons = document.querySelectorAll(".pin-button-fap");
  const contents = document.querySelectorAll(".pin-display-fap");

  buttons.forEach((btn) => btn.classList.remove("active-fap"));
  contents.forEach((div) => div.classList.remove("active-fap"));

  const selectedBtn = buttons[index];
  const selectedContent = document.getElementById(`pin${index}-fap`);

  if (selectedBtn) selectedBtn.classList.add("active-fap");
  if (selectedContent) selectedContent.classList.add("active-fap");
}

// Slideshow Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Add event listeners for left and right arrow buttons
document.getElementById("nextSlide").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("prevSlide").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4500);

// Initially display the first slide
showSlide(currentSlide);

document.addEventListener("DOMContentLoaded", () => {
  const words = ["Quality", "Trust", "Commitment"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150;
  const eraseSpeed = 100;
  const delayBetweenWords = 1000;

  const dynamicText = document.querySelector(".dynamic-word-abt");

  function typeEffect() {
    const currentWord = words[index];

    if (!isDeleting) {
      dynamicText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    } else {
      dynamicText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
      }
      setTimeout(typeEffect, eraseSpeed);
    }
  }

  typeEffect();
});

function showProduct(productId) {
  // Hide all products
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    product.classList.remove("active");
  });

  // Show the selected product
  const selectedProduct = document.getElementById(productId);
  selectedProduct.classList.add("active");
}

function changeImage(button, direction) {
  const imageBox = button.closest(".image-box");
  const images = imageBox.querySelectorAll("img");
  let currentIndex = -1;

  images.forEach((img, index) => {
    if (img.classList.contains("active")) {
      currentIndex = index;
      img.classList.remove("active");
    }
  });

  // Fallback if none active yet
  if (currentIndex === -1) currentIndex = 0;

  const newIndex = (currentIndex + direction + images.length) % images.length;
  images[newIndex].classList.add("active");
}

// On load: initialize first image as active
document.querySelectorAll(".image-box").forEach((box) => {
  const imgs = box.querySelectorAll("img");
  if (imgs.length > 0) imgs[0].classList.add("active");
});

window.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("#product-buttons button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove 'active' from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' to clicked one
      this.classList.add("active");
    });
  });
});


