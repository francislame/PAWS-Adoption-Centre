window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const introDogPrints1 = document.getElementById("intro-dog-prints1");
  const main = document.getElementById("main");
  const menu = document.getElementById("menu");

  //Dogprint intro size
  setTimeout(() =>
  {
    introDogPrints1.style.transform = "scale(2)";
  }, 300);

  // This will wait for the dog print animation to complete
  introDogPrints1.addEventListener("animationend", () => 
  {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";
    setTimeout(() => 
    {
      intro.style.display = "none";
      
      
      //Main logo animation start
      main.style.display = "block";
      setTimeout(() => 
      {
        main.style.opacity = "1";
        document.body.style.overflow = "auto";
      }, 50);

      main.style.transition = "opacity 1s ease";

      main.style.opacity = "0";
      setTimeout(() => 
      {
        main.style.display = "none";
      }, 3000);

      menu.style.display = "block"; 
        setTimeout(() => {
          menu.style.opacity = "1";
        }, 3000);
    }, 1000);
  });
});
