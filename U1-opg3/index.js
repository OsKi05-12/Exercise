"use strict";
// Variabler til at holde styr på computerens og brugerens valg
let computerensValg;
let brugerensValg;

// HTML-elementer til at vise spillerens valg
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

// Knapperne til at vælge sten, papir eller saks
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// HTML-elementer til at vise resultatet af spillet
const draw = document.querySelector("#draw");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");

// Event listeners til sten(rock)
rockBtn.addEventListener("click", rockClicked);

function rockClicked() {
  console.log("Rock Clicked");

  brugerensValg = "rock";

  traefferValg();
}

// Event listeners til papir(paper)
paperBtn.addEventListener("click", paperClicked);

function paperClicked() {
  console.log("Paper Clicked");

  brugerensValg = "paper";

  traefferValg();
}

// Event listeners til saks(scissors)
scissorsBtn.addEventListener("click", scissorClicked);

function scissorClicked() {
  console.log("Scissor Clicked");

  brugerensValg = "scissors";

  traefferValg();
}

// Funktion der håndterer valget af computerens valg
function traefferValg() {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");

  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  console.log("brugerensValg:", brugerensValg);

  const tilfaeldigtTal = Math.floor(Math.random() * 3);

  if (tilfaeldigtTal === 0) {
    computerensValg = "rock";
  } else if (tilfaeldigtTal === 1) {
    computerensValg = "paper";
  } else {
    computerensValg = "scissors";
  }

  nedTaelling();
}

// Funktion der håndterer nedtællingen og viser valgene
function nedTaelling() {
  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", visValg, { once: true });
}

// Funktion der viser valgene og afgør resultatet
function visValg() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  player1.classList.add(brugerensValg);

  player2.classList.add(computerensValg);

  afgoerResultat();
}

// Funktion der afgør resultatet af spillet
function afgoerResultat() {
  console.log("brugerensValg:", brugerensValg);
  console.log("computerensValg:", computerensValg);

  if (brugerensValg === computerensValg) {
    draw.classList.remove("hidden");
  } else if (
    (brugerensValg === "rock" && computerensValg === "scissors") ||
    (brugerensValg === "paper" && computerensValg === "rock") ||
    (brugerensValg === "scissors" && computerensValg === "paper")
  ) {
    win.classList.remove("hidden");
  } else {
    lose.classList.remove("hidden");
  }
}
