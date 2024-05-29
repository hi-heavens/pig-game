'use strict';

// Select the elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

// getting the buttons el
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// getting the player current score el
const current0El = document.getElementById('current--0');
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
})


