'use strict';

// Selecting the elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

// Selecting the player elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Selecting the players score elements
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

// Selecting the game buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial conditions when the game start
let currentScore, activePlayer, scores, stillPlaying;

const init = function () {
  diceEl.classList.add('hidden');

  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  stillPlaying = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

const switchPlayer = function () {
  // Adjust the current player score === 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // switch the active player
  activePlayer = activePlayer ? 0 : 1;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Initialize the game state
init();

// When a player rolls the dice
btnRoll.addEventListener('click', function () {
  if (stillPlaying) {
    // generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // remove the hidden class from the dice and display the random dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // check if rolled dice === 1 or not
    if (dice !== 1) {
      // add score to the current player
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (stillPlaying) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      stillPlaying = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
