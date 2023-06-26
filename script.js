
/*---------------- constants --------------*/
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

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
  