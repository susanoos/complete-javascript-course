'use strict';
const player1 = document.querySelector('.player--0');
const player1Score = document.getElementById('score--0');
const p1CurrentScore = document.getElementById('current--0');
const player2 = document.querySelector('.player--1');
const p2CurrentScore = document.getElementById('current--1');
const player2Score = document.getElementById('score--1');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldDice = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let p1Score = 0;
let p2Score = 0;

player1Score.textContent = 0;
player2Score.textContent = 0;

// Generates a random dice
const rollDice = () => {
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  return dice;
};

btnRollDice.addEventListener('click', () => {
  let randomDice = rollDice();
  dice.src = `dice-${randomDice}.png`;
  if (player1.classList.contains('player--active')) {
    player1CurrentScore += randomDice;
    p1CurrentScore.textContent = player1CurrentScore;
  } else {
    player2CurrentScore += randomDice;
    p2CurrentScore.textContent = player2CurrentScore;
  }
});

btnHoldDice.addEventListener('click', () => {
  if (player1.classList.contains('player--active')) {
    p1Score += player1CurrentScore;
    player1Score.textContent = p1Score;
    player1CurrentScore = 0;
    p1CurrentScore.textContent = player1CurrentScore;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    p2Score += player2CurrentScore;
    player2Score.textContent = p2Score;
    player2CurrentScore = 0;
    p2CurrentScore.textContent = player2CurrentScore;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
});
