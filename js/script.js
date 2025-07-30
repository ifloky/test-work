document.addEventListener("DOMContentLoaded", () => {
  
  // Burger
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");

  const closeMenu = () => {
    nav.classList.remove("is-open");
    burger.classList.remove("is-active");
  };

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("is-open");
    burger.classList.toggle("is-active");
  });

  document.addEventListener("click", (e) => {
    const isClickInsideMenu = nav.contains(e.target);
    const isClickOnBurger = burger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
      closeMenu();
    }
  });


  // Range 
  const range = document.querySelector("input[type='range']");
  const label = range?.closest("label");
  const percentSpan = label?.querySelector("div span:last-child"); 

  if (range && percentSpan) {
    percentSpan.textContent = `${range.value} %`;

    range.addEventListener("input", () => {
      percentSpan.textContent = `${range.value} %`;
    });
  }

});