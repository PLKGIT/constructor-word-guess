// Word.js

// Initialize
//-----------------------------------------------------------------
//-----------------------------------------------------------------

// Include required values
//-----------------------------------------------------------------
var Letter = require("./letter.js");

// Logic
//-----------------------------------------------------------------
//-----------------------------------------------------------------

// Create Word() constructor
// Passes gameWord from index.js
//-----------------------------------------------------------------
function Word(gameWord) {
    // Create and initialize arrays
    this.myArray = [];
    this.myDisplay = ["_"];
    this.letters = gameWord;
    // Loops through letters array
    // Creates a new letter using letters.js and pushes to myArray
    this.addletters = function () {
        this.letters.forEach((element) => {
            this.myArray.push(new Letter(element));
        });
        // Loops through myArray array
        // Sets guessed boolean to true if any letter values = " "
        this.myArray.forEach((element) => {
            if (element.letter === " ") {
                element.guessed = true;
            }
        });

    };
    // Calls addletters() function
    this.addletters();

    // Loops through myArray array
    // Calls the display() function in letters.js
    // Passes letter and guessed from myArray to display() function
    this.displayWord = function () {
        this.myDisplay = [];
        // Pushes results to myDisplay Array
        this.myArray.forEach((element) => {
            this.myDisplay.push(Letter.prototype.display(element.letter, element.guessed));
        });
        // Concatenates and displays contents of myDisplay array in uppercase
        console.log(this.myDisplay.join(' ').toUpperCase());
    };

    // Loops through myArray array
    // If gameWord letter has not already been guessed, calls the check() function in letters.js
    // Passing userGuess and game word letter from myArray to check() function
    this.checkWord = function () {
        this.myArray.forEach((element) => {
            if (element.guessed === false) {
                element.guessed = Letter.prototype.check(Word.prototype.userGuess, element.letter);
            }
        });
    }
};

// Makes the Word constructor available externally
//-----------------------------------------------------------------
module.exports = Word;