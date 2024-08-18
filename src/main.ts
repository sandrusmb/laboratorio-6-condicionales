import "./style.css";

let score: number = 0;
const cardButton = document.querySelector(".card-button");
const stopButton = document.querySelector(".stop-button");
const resetButton = document.querySelector(".reset-button");
const container = document.querySelector(".card-container");
const containerSecondary = document.querySelector(".container-secondary");

function showScore() {
  let scoreContainer = document.querySelector(".score");
  if (scoreContainer !== null) {
    scoreContainer.textContent = "Puntuación:" + " " + score.toString();
  }
}

function giveMeCard(): number {
  let cardNumber = Math.floor(Math.random() * 10) + 1;
  if (cardNumber > 7) {
    cardNumber += 2;
  }
  console.log(cardNumber);
  return cardNumber;
}

function showCard(card: number): void {
  let cardImageUrl =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";

  if (container !== null) {
    switch (card) {
      case 1:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        break;
      case 2:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        break;
      case 3:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        break;
      case 4:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        break;
      case 5:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        break;
      case 6:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        break;
      case 7:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        break;
      case 10:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        break;
      case 11:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        break;
      case 12:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        break;
      default:
        cardImageUrl =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        break;
    }

    container.innerHTML += `<img class="card" src="${cardImageUrl}" alt="Carta"/>`;
  }
}

function calculateScore(card: number): void {
  let cardValue: number;

  switch (card) {
    case 1:
      cardValue = 1;
      break;
    case 2:
      cardValue = 2;
      break;
    case 3:
      cardValue = 3;
      break;
    case 4:
      cardValue = 4;
      break;
    case 5:
      cardValue = 5;
      break;
    case 6:
      cardValue = 6;
      break;
    case 7:
      cardValue = 7;
      break;
    case 10:
      cardValue = 0.5;
      break;
    case 11:
      cardValue = 0.5;
      break;
    case 12:
      cardValue = 0.5;
      break;
    default:
      cardValue = 0;
      break;
  }
  score += cardValue;
  showScore();
}

function showMessage() {
  if (score > 7.5) {
    alert("Game over");
  } else if (score < 4) {
    alert("Has sido muy conservador");
  } else if (score === 5) {
    alert("Te ha entrado el canguelo eh?");
  } else if (score === 6 || score == 7) {
    alert("Casi casi...");
  } else if (score === 7.5) {
    alert("¡ Lo has clavado! ¡Enhorabuena!");
  }
}

function disableCardButton() {
  if (cardButton !== null) {
    cardButton.setAttribute("disabled", "true");
  }
}

function enableCardButton() {
  if (cardButton !== null) {
    cardButton.removeAttribute("disabled");
  }
}

function whatIsNext() {
  if (containerSecondary !== null) {
    containerSecondary.innerHTML += `<button class="button next-button">¿Qué hubiera pasado?</button>`;

    const nextButton = document.querySelector(".next-button");
    if (nextButton !== null) {
      nextButton.addEventListener("click", () => {
        const card = giveMeCard();
        showCard(card);
      });
    }
  }
}

function reset() {
  score = 0;
  showScore();

  if (container !== null) {
    container.innerHTML = "";
  }

  enableCardButton();
}

if (cardButton !== null) {
  cardButton.addEventListener("click", () => {
    const card = giveMeCard();
    showCard(card);
    calculateScore(card);
  });
}

if (stopButton !== null) {
  stopButton.addEventListener("click", () => {
    showMessage();
    disableCardButton();
    whatIsNext();
  });
}

if (resetButton !== null) {
  resetButton.addEventListener("click", reset);
}

enableCardButton();
showScore();
