// stap 1: zoek de menu-button op en sla die op in een variabele
let deMenuButton = document.querySelector("header nav:nth-of-type(1) > button");
let deSluitButton = document.querySelector("header nav:nth-of-type(1) > nav button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deMenuButton.addEventListener("click", toggleMenu);
deSluitButton.addEventListener("click", toggleMenu);

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() { 
let deNav = document.querySelector("header nav:nth-of-type(1) > nav");
  deNav.classList.toggle("open");
}



