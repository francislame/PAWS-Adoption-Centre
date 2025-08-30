window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const introDogPrints1 = document.getElementById("intro-dog-prints1");
  const main = document.getElementById("main");

  // Scale after a small delay if needed
  setTimeout(() => {
    introDogPrints1.style.transform = "scale(2.5)";
  }, 300);

  // Wait for the slideAndHide animation to finish
  introDogPrints1.addEventListener("animationend", () => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";

    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
      main.style.opacity = "1";
      document.body.style.overflow = "auto";
    }, 1000); // wait for opacity transition
  });
});