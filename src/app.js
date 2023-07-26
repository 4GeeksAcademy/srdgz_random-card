/* eslint-disable */
import "./style.css";

window.onload = () => {
  newCard();
  document.querySelector(".button").addEventListener("click", newCard);
};

setInterval(newCard, 10000);

function newCard() {
  let elem = document.querySelector(".card");
  elem.classList.forEach(clase => {
    if (clase != "card") {
      elem.classList.remove(clase);
    }
  });
  elem.classList.add(generateRandomSuit());
  elem.innerHTML = generateRandomNumber();
}

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["heart", "diamond", "spade", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
