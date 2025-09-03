window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const introDogPrints1 = document.getElementById("intro-dog-prints1");
  const main = document.getElementById("main");
  const menu = document.getElementById("menu");

  setTimeout(() => {
    introDogPrints1.style.transform = "scale(2)";
  }, 300);

  introDogPrints1.addEventListener("animationend", () => {

    intro.style.transition = "opacity 1s ease";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";


      main.style.display = "block";
      main.style.transition = "opacity 1s ease";
      setTimeout(() => {
        main.style.opacity = "1";
        document.body.style.overflow = "auto";
      }, 50);

      setTimeout(() => {
        menu.style.display = "block";
        menu.style.transition = "opacity 1s ease";
        menu.style.opacity = "1";
      }, 1500);


      setTimeout(() => {
        window.location.href = "home.html";
      }, 5000);
    }, 1000);
  });
});
