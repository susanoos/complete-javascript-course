'use strict';
// grabs the text of the html element we choose
// editing the html element and setting its text content to another string
// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent = 0;
// document.querySelector('.number').textContent = 0;

// ============================================

// // setting value
// document.querySelector('.guess').value = 23;

// ====================================

const number = document.querySelector('.number');
const message = document.querySelector('.message');
const body = document.querySelector('body');

let scoreText = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let score = 20;
let highScoreNum = 0;

// random number generator
const randomNumberGenerator = () => {
  let randNum = Math.trunc(Math.random() * 20) + 1;
  return randNum;
};

let randomNumber = randomNumberGenerator();

const game = () => {
  document.querySelector('.check').addEventListener('click', function () {
    //   game logic
    let guess = Number(document.querySelector('.guess').value);
    //   no input
    if (!guess) {
      message.textContent = 'No Number!';

      // when player guesses correct number
    } else if (guess === randomNumber) {
      number.textContent = randomNumber;
      message.textContent = 'Correct Number!';
      highScoreNum += score;
      highScore.textContent = highScoreNum;

      // changing css style using DOM manipulation
      body.style.backgroundColor = '#60b347';
      number.style.width = '30rem';

      // guess is too high
    } else if (guess > randomNumber) {
      if (score > 1) {
        message.textContent = 'Too High!';
        score--;
        scoreText.textContent = score;
      } else {
        message.textContent = 'Game over!';
        score = 0;
        scoreText.textContent = score;
      }

      // guess is too low
    } else if (guess < randomNumber) {
      if (score > 1) {
        message.textContent = 'Too Low!';
        score--;
        scoreText.textContent = score;
      } else {
        message.textContent = 'Game over!';
        score = 0;
        scoreText.textContent = score;
        body.style.backgroundColor = '#D2042D';
      }
    }
  });
};

const again = () => {
  document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    body.style.backgroundColor = '#222';
    number.textContent = '?';
    scoreText.textContent = score;
    message.textContent = 'Start guessing...';
    randomNumber = randomNumberGenerator();
    Number((document.querySelector('.guess').value = ''));

    // game();
  });
};
game();
again();

// resets game to default
// document.querySelector('.again').addEventListener('click', function () {
//   location.reload();
// });
