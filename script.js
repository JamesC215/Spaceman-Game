initialise () {
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




/*----------- cached element references ----------*/

  let showLives = document.getElementById("mylives");
  let showCategory = document.getElementById("scatagory");
  let getHint = document.getElementById("hint");
  let showClue = document.getElementById("clue");


/*------------ event listeners -----------*/




/*--------------- functions -----------*/
// create alphabet ul
 let buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (let i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
}