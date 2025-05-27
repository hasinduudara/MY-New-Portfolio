function toggleMenu() {
  const nav = document.querySelector("nav ul");
  const burger = document.querySelector(".burger");
  nav.classList.toggle("active");
  burger.classList.toggle("active");
}

function closeMenu() {
  const nav = document.querySelector("nav ul");
  const burger = document.querySelector(".burger");
  nav.classList.remove("active");
  burger.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector("#hero h1");
  const text = "Hi, I'm Hasindu Udara.";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      const span = document.createElement("span");
      span.textContent = text.charAt(index);
      span.style.opacity = "0";
      span.style.transition = "opacity 0.3s ease";
      heroText.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
      }, 50);

      index++;
      setTimeout(typeEffect, 150); // Adjust typing speed here
    } else {
      setTimeout(() => {
        heroText.textContent = ""; // Clear text
        index = 0; // Reset index
        typeEffect(); // Restart typing
      }, 2000); // Pause before restarting
    }
  }

  heroText.textContent = ""; // Clear initial text
  typeEffect();
});
