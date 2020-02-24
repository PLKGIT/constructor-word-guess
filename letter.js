// letter.js

// Initialize
//-----------------------------------------------------------------
//-----------------------------------------------------------------

// Set global variables
//-----------------------------------------------------------------
var display = "";
var rightGuess = "";

// Logic
//-----------------------------------------------------------------
//-----------------------------------------------------------------

// Create Letter() constructor
//-----------------------------------------------------------------

// Game word letter to be guessed and guessed booleen parameter, set to false
function Letter(data) {
    this.letter = data;
    this.guessed = false;
}

// Create Letter() constructor prototype functions
//-----------------------------------------------------------------

// Display function
// Accepts letter and guessed values from word.js
//-----------------------------------------------------------------
Letter.prototype.display = function (x, y) {
    // Checks whether letter has been guessed
    if (y === true) {
        // If guessed, sets display variable to the letter
        display = x;
    } else {
        // If not guessed, sets display variable to an underscore
        display = "_";
    }
    // Returns display variable to word.js function that called it
    return display;
};

// Check function
// Accepts gameWord letter and user's guess from word.js
//-----------------------------------------------------------------
Letter.prototype.check = function (x, y) {
    // Checks whether user guess matches the letter
    if (x === y) {
        // If matched, sets rightGuess variable to true
        rightGuess = true;
    } else {
        // If not matched, sets rightGuess variable to false
        rightGuess = false;
    }
    // Returns rightGuess variable to word.js function that called it
    return rightGuess;
};

// Makes the Letter constructor available externally
//-----------------------------------------------------------------
module.exports = Letter;