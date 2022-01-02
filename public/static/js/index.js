// Handle user click
// Create function to use API (getWordById)
// Pull out information needed.
// Display word on screen (replacing letters with '_')
// Allow users to enter single characters
// Check if the guess is correct/incorrect
//  - If guess is incorrect, player loses a life
//      -- Check if player lifes equals five
//          -- If so, player loses, otherwise can guess again
//  - If guess is correct, replace all matching '_'s with the letter
//      -- Check if the word has been guessed, if so, player wins, otherwise guess again

const hangmanImages = [
    './static/js/images/stage7.jpg',
    './static/js/images/stage6.jpg',
    './static/js/images/stage5.jpg',
    './static/js/images/stage4.jpg',
    './static/js/images/stage3.jpg',
    './static/js/images/stage2.jpg',
    './static/js/images/stage1.jpg',
];
const URL = 'http://localhost:3000';
let letters;
let lives;
let blanks;
let guessedLetters = [];
// let blanksArray;
let tracker = 0;
let level = 0;
newBlanks = [];
let wordArray = [];
let previousLetters = [];
let updatedBlanks;
const generalButton = document.querySelector('#general-div');
const h5Element = document.querySelector('h5');

// Get word under set theme
async function getTheme(theme) {
    const res = await fetch(`${URL}/words/themes/${theme}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(),
    });
    const data = await res.json();
    data.payload.forEach(function (cases) {
        console.log(cases.word);
    });
    wordArray = [];
    previousLetters = [];
    hideThemesShowGame();
    loopGame(generateListofWords(data));
}

// // Clear screen
const themesSection = document.querySelector('.themes');
const gameSection = document.querySelector('.hangman-game');

function hideThemesShowGame() {
    h5Element.innerText = '';
    themesSection.classList.toggle('hide-section');
    gameSection.classList.toggle('hide-section');
    title.classList.toggle('title');
}

// // generate list of words
function generateListofWords(data) {
    data.payload.forEach((entry) => {
        wordArray.push(entry.word);
    });
    return wordArray;
}

// // Pull word via 'level'

function getWord(wordArray, level) {
    return wordArray[level - 1];
}

// // Generate letter array
function generateLetterArray(word) {
    word = String(word);
    return word.split('');
}

// // Clear blanks
const h4Element = document.querySelector('h4');
function clearBlanks() {
    h4Element.innerText = '';
}

// // Generate word blanks
function generateBlanks(letters) {
    blanks = [];
    for (let x = 0; x < letters.length; x++) {
        blanks += '_ ';
    }
    h4Element.innerText = blanks;
    return blanks;
}

// Check player guess

function checkPlayerGuess(guess, letters, blanks) {
    let correctLetterIndex = [];
    let correctLetters = [];

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === guess) {
            console.log(letters[i]);
            correctLetterIndex.push(i);
            correctLetters.push(letters[i]);
        }
    }
    guessedLetters.push(guess);
    console.log(correctLetterIndex, correctLetters);
    updatePreviousLetters(guess);
    if (CheckGuessIsCorrectOrNot(correctLetters)) {
        let check = CheckGuessIsCorrectOrNot(correctLetters);
        console.log(check);
        previousLetters.push(correctLetters);
        tracker++;
        console.log(blanks, previousLetters);
        if (isWordComplete(blanks, previousLetters)) {
            console.log('Entered correct stage');
            clearPreviousLetters();
            generateNewWord(wordArray);
        } else {
            console.log(blanks);
            return fillInH4Element(
                correctLetterIndex,
                correctLetters,
                blanks,
                guess
            );
        }
    } else {
        console.log(lives);
        updateLives();
        changeHangmanArt();
        console.log(lives);

        if (isPlayerAlive()) {
            correctLetterIndex = [];
            correctLetters = [];
            return fillInH4Element(
                correctLetterIndex,
                correctLetters,
                blanks,
                guess
            );
        } else {
            GameOver();
            return;
        }
    }
}

// Update Level
const levelPTag = document.querySelector('#level');
function updateLevel() {
    levelPTag.innerText = `Level: ${level}`;
}

// Update lives
const livesPTag = document.querySelector('#lives');
function updateLives() {
    lives--;
    livesPTag.innerText = `Lives: ${lives}`;
}

// Show lives initially
function initialShowLives() {
    livesPTag.innerText = `Lives: ${lives}`;
}

// Add to previous letters
const list = document.querySelector('.previous-letters');
function updatePreviousLetters(guess) {
    const li = document.createElement('li');
    li.innerText = guess;
    list.appendChild(li);
}

// Clear previous letters
function clearPreviousLetters() {
    list.innerHTML = '';
}

// Change hangman art
const hangmanBox = document.querySelector('#hangman-image-box');
function changeHangmanArt() {
    hangmanBox.src = hangmanImages[lives];
}

function changeHangmanArtFirstTime() {
    hangmanBox.src = hangmanImages[6];
}

// Check player guess is correct/incorrect
function CheckGuessIsCorrectOrNot(correctLetters) {
    if (correctLetters.length > 0) {
        return true;
    } else {
        // console log only prints false when in ''s.
        return false;
    }
}

// Add correct guess to 'previous letters' section

// Add take away one from lives

// create blanksArray

function createBlanksArray(blanks) {}

// Use blanksArray to edit h4Element
function editH4ElementViaBlanks(blanksArray) {
    if (typeof blanksArray === []) {
        return (h4Element.innerText = blanksArray.join(' '));
    } else {
        return (h4Element.innerText = blanksArray);
    }
}

// Fill in H4 Element after correct guess
function fillInH4Element(correctLetterIndex, correctLetters, blanks, guess) {
    console.log(blanks);
    newBlanks = [];
    if (typeof blanks == typeof '') {
        blanks = blanks.split(' ');

        blanks = blanks.slice(0, -1);

        for (let i = 0; i < blanks.length; i++) {
            newBlanks.push('_');
            console.log(newBlanks);
        }
        for (let i = 0; i < correctLetterIndex.length; i++) {
            newBlanks.splice(correctLetterIndex[i], 1, guess);
        }
    } else {
        newBlanks = blanks;
        for (let i = 0; i < correctLetterIndex.length; i++) {
            newBlanks.splice(correctLetterIndex[i], 1, guess);
        }
    }
    editH4ElementViaBlanks(newBlanks);
    console.log(blanks);
    console.log(correctLetterIndex, correctLetters);

    console.log(typeof newBlanks);
    // h4Element.innerText = blanksArray.join(',');
    editH4ElementViaBlanks(newBlanks);
    return newBlanks;
}

// Loop through guessing
function guessLetters(letters, blanks, guess) {
    console.log(letters, blanks, lives, guess);

    console.log('We entered guessing section, ending now!');
    blanks = checkPlayerGuess(guess, letters, blanks);
    console.log(blanks);
    return blanks;
}

// Handling player guess
const form = document.querySelector('#guess-form');
const input = document.querySelector('#guess-input');

form.addEventListener('submit', playerGuess);

function playerGuess() {
    if (blanks == undefined) {
        blanks = updatedBlanks;
        console.log(blanks);
    }
    console.log(lives);
    console.log('playerguess repeats');
    let guess = input.value;
    console.log(letters, blanks, lives, guess);
    blanks = guessLetters(letters, blanks, guess);
    if (isWordComplete(blanks, previousLetters)) {
        console.log('Entered correct stage');
        clearPreviousLetters();
        generateNewWord(wordArray);
    }
    console.log(blanks);

    return blanks;
}

// Check if player lost

function isPlayerAlive() {
    if (lives == 0) {
        return false;
    } else {
        return true;
    }
}

// game over function
h5Element.addEventListener('click', hideGameShowTheme);

const leftSide = document.querySelector('.hangman-game-left');

function GameOver() {
    h4Element.innerText = '';
    h5Element.innerText = `Game over! Click here to go back to themes!`;
    clearPreviousLetters();
    leftSide.classList.toggle('hide-section');
}

function gameWon() {
    h4Element.innerText = '';
    h5Element.innerText = `You cleared the game! Click here to go back to themes!`;
    clearPreviousLetters();
    leftSide.classList.toggle('hide-section');
}

// Hide game and show themes
const title = document.querySelector('#title');
// title.addEventListener('click', hideGameShowTheme);

function hideGameShowTheme() {
    leftSide.classList.toggle('hide-section');
    themesSection.classList.toggle('hide-section');
    gameSection.classList.toggle('hide-section');
    // title.classList.toggle('title');
    return;
}

// Check blanks left
function checkBlanksLeft() {
    if (typeof blanks == 'object') {
        let amount = 0;
        blanks.forEach((blank) => {
            if (blank != '_') {
                return amount++;
            }
        });
        return amount;
    } else {
        return;
    }
}

// Check if player guess the word
function isWordComplete(blanks, previousLetters) {
    console.log(blanks, previousLetters, letters, tracker);
    let amount = checkBlanksLeft();
    console.log(typeof blanks, amount, letters.length);
    if (amount == letters.length) {
        console.log('I came true!');
        return true;
    } else {
        console.log("I didn't come true!");
        return false;
    }
}

// Loop through game first time

function loopGame(wordArray) {
    console.log(wordArray);
    previousLetters = [];
    lives = 6;
    level = 0;
    level += 1;
    initialShowLives();
    updateLevel();
    changeHangmanArtFirstTime();

    letters = generateLetterArray(getWord(wordArray, level));
    console.log(`letters are ${letters}`);
    blanks = generateBlanks(letters);
}

// loop through game after first textEmphasisStyle:

function generateNewWord(wordArray) {
    console.log(wordArray);
    previousLetters = [];
    lives = 6;
    // while (gameOn) {
    level += 1;
    blanks = '';
    initialShowLives();
    if (level == wordArray.length) {
        gameWon();
    } else {
        updateLevel();
        changeHangmanArtFirstTime();
        letters = generateLetterArray(getWord(wordArray, level));
        console.log(`letters are ${letters}`);
        updatedBlanks = generateBlanks(letters);
        console.log(blanks);
    }
}
