window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const introLogo = document.getElementById("intro-logo");
  const main = document.getElementById("main");

  setTimeout(() => {
    introLogo.style.transform = "scale(3.6)";
  }, 300);

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";
  }, 2500);

  setTimeout(() => {
    intro.style.display = "none";
    main.style.opacity = "1"; // fade in main
    document.body.style.overflow = "auto";
  }, 3500);
});


