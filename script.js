window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const introLogo = document.getElementById("intro-logo");
  const main = document.getElementById("main");

  // Animate zoom
  setTimeout(() => {
    introLogo.style.transform = "scale(3.6)"; // Zoom to match 550px
  }, 300);

  // After animation, show main content
  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";
  }, 2500);

  setTimeout(() => {
    intro.style.display = "none";
    main.style.display = "block";
  }, 3500);
});