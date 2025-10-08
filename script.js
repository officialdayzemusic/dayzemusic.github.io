// Intro screen show once per session
window.addEventListener("load", () => {
  const intro = document.getElementById("intro-screen");
  const hasSeenIntro = sessionStorage.getItem("introShown");

  if (!hasSeenIntro) {
    setTimeout(() => {
      intro.classList.add("hidden");
      sessionStorage.setItem("introShown", "true");
    }, 2500);
  } else {
    intro.style.display = "none";
  }
});

// Navigation toggle (mobile)
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".site-nav ul");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Scroll-triggered fade-ins
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);
fadeEls.forEach((el) => observer.observe(el));
