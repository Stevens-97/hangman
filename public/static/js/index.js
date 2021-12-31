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
    let blanks = '';
    for (let i = 0; i < letters.length; i++) {
        blanks += '_ ';
    }
    h4Element.innerText = blanks;
}

// // Loop through game

function loopGame(wordArray) {
    console.log(wordArray);
    let gameOn = true;
    let level = 0;
    while (gameOn) {
        level += 1;
        clearBlanks();
        let letters = generateLetterArray(getWord(wordArray, level));
        console.log(`letters are ${letters}`);
        generateBlanks(letters);
        let guessGame = true;
        while (guessGame) {
            console.log('We entered guessing section, ending now!');
            guessGame = false;
            gameOn = false;
        }
    }
}
