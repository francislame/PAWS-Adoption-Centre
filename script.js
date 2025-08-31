window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const introDogPrints1 = document.getElementById("intro-dog-prints1");
  const main = document.getElementById("main");

  // Optional scale effect
  setTimeout(() => {
    introDogPrints1.style.transform = "scale(2.5)";
  }, 300);

  // Wait for slide animation to finish
  introDogPrints1.addEventListener("animationend", () => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";

    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
      main.style.transition = "opacity 1s ease";
      main.style.opacity = "1"; // fade in main content
      document.body.style.overflow = "auto"; // allow scrolling
    }, 1000); // matches the opacity transition
  });
});
