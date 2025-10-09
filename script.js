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
navToggle.addEventListener("click", () => navMenu.classList.toggle("show"));

// Scroll-triggered fade-ins
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
fadeEls.forEach((el) => observer.observe(el));

// Auto-generate releases and tracks
const recentReleases = [
  {
    link: "https://open.spotify.com/album/42lInAgunvLT5XdSCbkDNn?si=sUvvsTTIQUy7a9ou5lRfuA",
    cover: "https://i.ibb.co/Ld0FfcXS/Push-or-Shove.jpg",
    title: "Push or Shove",
  },
  {
    link: "https://open.spotify.com/album/6SMOh5yu5oFbu1UQssiu1m?si=D2zjhr0UTt-aKhWF914h9w",
    cover: "https://i.ibb.co/9m6ZNfdN/Batman-and-Robin.jpg",
    title: "Batman and Robin (Dayze x antzmusic2024)",
  },
  {
    link: "https://open.spotify.com/album/2PLgLxwYXcGTjm46qoBM5V?si=GuS5sT44QBa1roxlavr81A",
    cover: "https://i.ibb.co/6Jg258kZ/Standing-Here.jpg",
    title: "Standing Here",
  },
];

const popularTracks = [
  {
    link: "https://open.spotify.com/track/23TDZdUWWp7FPeGBwyGCPu?si=670af4308a174aa3",
    cover: "https://i.ibb.co/1fNbz8DV/Paralyzed.jpg",
    title: "Paralyzed",
  },
  {
    link: "https://open.spotify.com/album/3s5O10n5gW90mYHrzHXTSo?si=Uc9BxnuGR-aZX0ez6sccFg",
    cover: "https://i.ibb.co/4ZZty1gK/COFFIN-TALK.jpg",
    title: "Coffin Talk",
  },
  {
    link: "https://open.spotify.com/album/2LyNkDn72H2bUgLWWkRgS1?si=JP7uf2YhTga21oHTaY_RKg",
    cover: "https://i.ibb.co/tMZfNqkY/Dayze-d-and-Confused.jpg",
    title: "Dayze'd and Confused",
  },
];

function renderGrid(containerId, items, markLatest = false) {
  const grid = document.getElementById(containerId);
  items.forEach((item, index) => {
    const latest = markLatest && index === 0 ? " (Latest)" : "";
    const card = document.createElement("a");
    card.href = item.link;
    card.target = "_blank";
    card.className = "disc-item";
    card.innerHTML = `
      <img src="${item.cover}" alt="${item.title}">
      <div class="disc-title">${item.title}${latest}</div>
    `;
    grid.appendChild(card);
  });
}

renderGrid("recent-releases-grid", recentReleases, true);
renderGrid("popular-tracks-grid", popularTracks, false);
