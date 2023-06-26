
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

let categories;         // Array of topics
let chosenCategory;     // Selected catagory
var getHint ;           // Word getHint
let word ;              // Selected word
let guess ;             // Player Guess
let guesses = [ ];      // Stored geusses
let lives ;             // Lives
let counter ;           // Count correct guesses
let space;              // Number of spaces in word '-'

/*------------ app's state (variables) -----------*/

const buttonsContainer = document.getElementById('buttons');


/*----------- cached element references ----------*/

alphabet.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => handleButtonClick(letter));
    buttonsContainer.appendChild(button);
  });

/*------------ event listeners -----------*/




/*--------------- functions -----------*/
function handleButtonClick(letter) {
    // Do something with the clicked letter
    console.log(`Clicked letter: ${letter}`);
  }
  