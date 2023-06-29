
/*---------------- constants --------------*/
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Create categories through objects/arrays
let categories = [
{
name: 'Animals',
words: [
{ word: 'lion', hint: 'The king of the jungle.' },
{ word: 'elephant', hint: 'The largest land mammal.' },
{ word: 'giraffe', hint: 'Known for its long neck.' },
{ word: 'penguin', hint: 'A flightless bird that lives in Antarctica.' },
{ word: 'dolphin', hint: 'A highly intelligent marine mammal.' }
]
},
{
name: 'Fruits',
words: [
{ word: 'apple', hint: 'A round and juicy fruit.' },
{ word: 'banana', hint: 'A yellow fruit with a curved shape.' },
{ word: 'orange', hint: 'A citrus fruit with a bright color.' },
{ word: 'strawberry', hint: 'A small, sweet fruit often used in desserts.' },
{ word: 'watermelon', hint: 'A large fruit with a refreshing red flesh.' }
]
},
{
name: 'Countries',
words: [
{ word: 'unitedstates', hint: 'The land of the free and the home of the brave.' },
{ word: 'japan', hint: 'Known for its rich cultural heritage and advanced technology.' },
{ word: 'brazil', hint: 'Famous for its vibrant Carnival and beautiful beaches.' },
{ word: 'australia', hint: 'A country known for its unique wildlife, such as kangaroos and koalas.' },
{ word: 'egypt', hint: 'Home to the ancient pyramids and the Nile River.' }
]
}
];

let chosenCategory;     // Selected category
var getHint ;           // Word getHint
let word ;              // Selected word
let guess ;             // Player guess
let guesses = [ ];      // Stored guesses
let lives ;             // Lives
let counter ;           // Count correct guesses
let space;              // Number of spaces in word '-'

/*------------ app's state (variables) -----------*/

const buttonsContainer = document.getElementById('buttons');
const categoryNameElement = document.getElementById('categoryName');
const clueElement = document.getElementById('clue');
const hintButton = document.getElementById('hint');
const holdElement = document.getElementById('hold');
const myLivesElement = document.getElementById('mylives');

/*----------- cached element references ----------*/

//Create buttons from alphabet
alphabet.forEach(letter => {
const button = document.createElement('button');
button.textContent = letter;
button.addEventListener('click', () => handleButtonClick(letter));
buttonsContainer.appendChild(button);
});

//Create buttons for each category
categories.forEach(category => {
const button = document.createElement('button');
button.className = 'category-button'; 
button.textContent = category.name;
button.addEventListener('click', () => handleCategoryButtonClick(category));
buttonsContainer.appendChild(button);
});


/*--------------- functions -----------*/
//When category buttons are pressed
function handleCategoryButtonClick(category) {
chosenCategory = category;
const randomIndex = Math.floor(Math.random() * category.words.length);
word = category.words[randomIndex].word;
getHint = category.words[randomIndex].hint;
lives = 6;
counter = 0;
space = 0;
guesses = [];
render();
createAlphabetButtons();
}

function disableAlphabetButtons() {
const alphabetButtons = document.querySelectorAll('#buttons button');
alphabetButtons.forEach(button => {
button.disabled = true;
});
}
//Function to click on each button and add/do not add if correct/incorrect
function handleButtonClick(letter) {
const clickedButton = document.querySelector(`button[data-letter="${letter}"]`);
clickedButton.disabled = true;

if (guesses.indexOf(letter) === -1) {
guesses.push(letter);
if (word.indexOf(letter) === -1) {
lives--;
} else {
// Check if the guessed letter is correct
let correctGuess = false;
for (let i = 0; i < word.length; i++) {
if (word[i] === letter) {
correctGuess = true;
counter++;
holdElement.textContent = holdElement.textContent.slice(0, 2 * i) + letter + holdElement.textContent.slice(2 * i + 1);
}
}
if (!correctGuess) {
lives--;
}
}
}
render();

if (counter === word.length) {
// Word guessed correctly
disableAlphabetButtons();
holdElement.textContent = "You win!";
}

if (lives === 0) {
// Game over, word not guessed
disableAlphabetButtons();
holdElement.textContent = "You ran out of lives!";
}
}

//Get random word from chosen category        
function getRandomWord(wordArray) {
const randomIndex = Math.floor(Math.random() * wordArray.length);
return wordArray[randomIndex];
}
//Create alphabet buttons through DOM
function createAlphabetButtons() {
const alphabetButtonsContainer = document.getElementById('buttons');
alphabetButtonsContainer.innerHTML = '';

alphabet.forEach(letter => {
const button = document.createElement('button');
button.textContent = letter;
button.dataset.letter = letter;
button.addEventListener('click', () => handleButtonClick(letter));
alphabetButtonsContainer.appendChild(button);
});}

//Render game after category is chosen
function render() {
categoryNameElement.textContent = "You chose category: " + chosenCategory.name;

holdElement.textContent = '';
for (let i = 0; i < word.length; i++) {
  if (guesses.includes(word[i])) {
    holdElement.textContent += word[i] + ' ';
  } else {
    holdElement.textContent += '_ ';
  }
}
clueElement.textContent = `Your hint - ${getHint}`;

myLivesElement.textContent = `Lives: ${lives}`;
}

function restartGame() {
chosenCategory = null;
getHint = null;
word = null;
guess = null;
guesses = [];
lives = 0;
counter = 0;
space = 0;

holdElement.textContent = '';
categoryNameElement.textContent = 'Re-choose your category to start again';
clueElement.textContent = '';
myLivesElement.textContent = '';

const alphabetButtons = document.querySelectorAll('#buttons button');
alphabetButtons.forEach((button) => {
button.disabled = false;
});

const categoryButtons = document.querySelectorAll('.category-button');
categoryButtons.forEach((button) => {
button.removeEventListener('click', handleCategoryButtonClick);
});

categories.forEach((category) => {
const button = document.createElement('button');
button.className = 'category-button';
button.textContent = category.name;
button.addEventListener('click', () => handleCategoryButtonClick(category));
buttonsContainer.appendChild(button);
});
}
const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', restartGame);