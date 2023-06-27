
/*---------------- constants --------------*/
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

let categories = [
{
name: 'Animals',
words: ['lion', 'elephant', 'giraffe', 'penguin', 'dolphin'],
hints: ['The king of the jungle.', 'The largest land mammal.', 'Known for its long neck.', 'A flightless bird that lives in Antarctica.', 'A highly intelligent marine mammal.']
},
{
name: 'Fruits',
words: ['apple', 'banana', 'orange', 'strawberry', 'watermelon'],
hints: ['A round and juicy fruit.', 'A yellow fruit with a curved shape.', 'A citrus fruit with a bright color.', 'A small, sweet fruit often used in desserts.', 'A large fruit with a refreshing red flesh.']
},
{
name: 'Countries',
words: ['unitedstates', 'japan', 'brazil', 'australia', 'egypt'],
hints: ['The land of the free and the home of the brave.', 'Known for its rich cultural heritage and advanced technology.', 'Famous for its vibrant Carnival and beautiful beaches.', 'A country known for its unique wildlife, such as kangaroos and koalas.', 'Home to the ancient pyramids and the Nile River.']
}
];

let chosenCategory;     // Selected catagory
var getHint ;           // Word getHint
let word ;              // Selected word
let guess ;             // Player Guess
let guesses = [ ];      // Stored geusses
let lives ;             // Livess
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

alphabet.forEach(letter => {
const button = document.createElement('button');
button.textContent = letter;
button.addEventListener('click', () => handleButtonClick(letter));
buttonsContainer.appendChild(button);
});

categories.forEach(category => {
const button = document.createElement('button');
button.textContent = category.name;
button.addEventListener('click', () => handleCategoryButtonClick(category));
buttonsContainer.appendChild(button);
});

hintButton.addEventListener('click', handleHintButtonClick);
/*------------ event listeners -----------*/

/*--------------- functions -----------*/
function handleCategoryButtonClick(category) {
chosenCategory = category;
word = getRandomWord(category.words);
getHint = getRandomHint(category.hints);
lives = 6;
counter = 0;
space = 0;
guesses = [];
render();
createAlphabetButtons();
}

function handleHintButtonClick() {
getHint = getRandomHint(chosenCategory.hints);
render();
}

function handleButtonClick(letter) {
if (guesses.indexOf(letter) === -1) {
guesses.push(letter);
if (word.indexOf(letter) === -1) {
lives--;
} else {
counter++;
}
}

if (counter === word.length) {
// Word guessed correctly
disableAlphabetButtons();
}

if (lives === 0) {
// Game over, word not guessed
disableAlphabetButtons();
}
}
        
function getRandomWord(wordArray) {
const randomIndex = Math.floor(Math.random() * wordArray.length);
return wordArray[randomIndex];
}

function getRandomHint(hintArray) {
const randomIndex = Math.floor(Math.random() * hintArray.length);
return hintArray[randomIndex];
}

function render() {
categoryNameElement.textContent = chosenCategory.name;
if (getHint) {
clueElement.textContent = `Your hint - ${getHint}`;
} else {
clueElement.textContent = '';
}

}