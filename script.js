// Intro screen show once per session
window.addEventListener("load", () => {
  const intro = document.getElementById("intro-screen");
  const hasSeenIntro = sessionStorage.getItem("introShown");

  if (!hasSeenIntro) {
    // Show the intro, then hide it after 2.5 seconds
    setTimeout(() => {
      intro.classList.add("hidden");
      // Wait for fade transition to finish, then remove from layout
      setTimeout(() => {
        intro.style.display = "none";
      }, 1200);
      sessionStorage.setItem("introShown", "true");
    }, 2500);
  } else {
    intro.style.display = "none";
  }
});
