'use strict';

// Select the elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

// getting the buttons el
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// To hold the current score
let score = 0;

// Active player
let active = 0;

// getting the player current score el
const currentEl = document.getElementById(`current--${active}`);
const current1El = document.getElementById('current--1');

// Start the game with both players score having zero
score0El.textContent = 0;
score1El.textContent = 0;
// The dice is invicible at the beginning
diceEl.classList.add('hidden');

// User rolls a dice
btnRoll.addEventListener('click', function() {
    // Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    // display dice roll
    diceEl.classList.remove('hidden');
    if (dice === 1) {
        // switch the player
        document.querySelector(`.player--${active}`).classList.remove('player--active');
        active = active === 0 ? 1 : 0;
        document.querySelector(`.player--${active}`).classList.toggle('player--active');
        currentEl.textContent = 0;
    } else {
        score += dice;
        currentEl.textContent = score;
    }
})

btnHold.addEventListener('click', function() {
    score0El.textContent = score;
    if (score >= 100) {
        
    }
})


