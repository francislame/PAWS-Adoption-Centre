window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const introDogPrints1 = document.getElementById("intro-dog-prints1");
  const main = document.getElementById("main");
  const menu = document.getElementById("menu");

  // Dogprint intro size
  setTimeout(() => {
    introDogPrints1.style.transform = "scale(2)";
  }, 300);

  // Wait for the dog print animation to complete
  introDogPrints1.addEventListener("animationend", () => {
    // Fade out intro
    intro.style.transition = "opacity 1s ease";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";

      // Show main logo
      main.style.display = "block";
      main.style.transition = "opacity 1s ease";
      setTimeout(() => {
        main.style.opacity = "1";
        document.body.style.overflow = "auto"; // allow scrolling
      }, 50);

      // Show menu after main fades in
      setTimeout(() => {
        menu.style.display = "block";
        menu.style.transition = "opacity 1s ease";
        menu.style.opacity = "1";
      }, 1500); // give main ~1.5s to appear

      // Redirect to home.html after all animations
      setTimeout(() => {
        window.location.href = "home.html";
      }, 5000); // total wait = intro fade + main + menu
    }, 1000); // wait for intro fade
  });
});
