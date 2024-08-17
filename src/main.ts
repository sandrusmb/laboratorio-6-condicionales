import "./style.css";

let cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const buttonStart = document.querySelector(".button-start");
const card = document.querySelector(".card");

function mixCards() {
  cards.sort(() => Math.random() - 0.5);
  console.log(cards);
  paintCards();
}

function paintCards() {
  console.log(cards);
  let container = document.querySelector(".container");
  if (container !== null) {
    container.innerHTML = "";
    cards.forEach((card) => {
      let img = document.createElement("img");
      img.textContent = card;
      img.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      img.classList.add("card");
      img.classList.add("card" + "-" + card);
      if (container !== null) {
        container.appendChild(img);
      }
    });
  }
}

function turnCard() {
  console.log("hola");
}

if (card !== null) {
  card.addEventListener("click", turnCard);
}

if (buttonStart !== null) {
  buttonStart.addEventListener("click", mixCards);
}
