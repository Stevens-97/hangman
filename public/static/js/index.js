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

const URL = 'http://localhost:3000';
let letters;
let lives;
let blanks;
let guessedLetters = [];
let blanksArray;
let tracker = 0;
newBlanks = [];
const generalButton = document.querySelector('#general-div');

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

    hideThemesShowGame();
    loopGame(generateListofWords(data));
}

// // Clear screen
const themesSection = document.querySelector('.themes');
const gameSection = document.querySelector('.hangman-game');

function hideThemesShowGame() {
    themesSection.classList.toggle('hide-section');
    gameSection.classList.toggle('hide-section');
}

// // generate list of words
function generateListofWords(data) {
    let wordArray = [];
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
    let blanks = [];
    for (let x = 0; x < letters.length; x++) {
        blanks += '_ ';
    }
    h4Element.innerText = blanks;
    return blanks;
}

// Check player guess

function checkPlayerGuess(guess, letters, blanks, lives) {
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
    if (CheckGuessIsCorrectOrNot(correctLetters)) {
        let check = CheckGuessIsCorrectOrNot(correctLetters);
        console.log(check);
        tracker++;
        return fillInH4Element(
            correctLetterIndex,
            correctLetters,
            blanks,
            guess
        );
    } else {
        lives--;
        correctLetterIndex = [];
        correctLetters = [];
        return fillInH4Element(
            correctLetterIndex,
            correctLetters,
            blanks,
            guess
        );
    }
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
function guessLetters(letters, blanks, lives, guess) {
    console.log(letters, blanks, lives, guess);

    console.log('We entered guessing section, ending now!');
    blanks = checkPlayerGuess(guess, letters, blanks, lives);
    console.log(blanks);
    return blanks;
}

// Handling player guess
const form = document.querySelector('#guess-form');
const input = document.querySelector('#guess-input');

form.addEventListener('submit', playerGuess);

function playerGuess() {
    console.log('playerguess repeats');
    let guess = input.value;
    console.log(letters, blanks, lives, guess);
    blanks = guessLetters(letters, blanks, lives, guess);
    console.log(blanks);
}
// Loop through game

function loopGame(wordArray) {
    console.log(wordArray);
    level = 0;
    lives = 5;
    // while (gameOn) {
    level += 1;
    clearBlanks();
    letters = generateLetterArray(getWord(wordArray, level));
    console.log(`letters are ${letters}`);
    blanks = generateBlanks(letters);
}
