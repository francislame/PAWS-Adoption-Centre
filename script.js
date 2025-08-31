window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const introDogPrints1 = document.getElementById("intro-dog-prints1");
  const main = document.getElementById("main");

  setTimeout(() => 
  {
    introDogPrints1.style.transform = "scale(2)";
  }, 300);

  // Wait for slide animation to finish
  introDogPrints1.addEventListener("animationend", () => 
    {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";

    setTimeout(() => {
      intro.style.display = "none";

      main.style.display = "block";
      setTimeout(() => 
        {
        main.style.opacity = "1"; // fade in
        document.body.style.overflow = "auto";
        }, 50);

      main.style.transition = "opacity 1s ease";

      main.style.opacity = "0";
      setTimeout(() => 
        {
        main.style.display = "none";
        }, 3000);

      document.body.style.overflow = "auto"; // allow scrolling
    }, 1000); // matches the opacity transition
  });
});
