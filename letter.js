// letter.js

// global variable(s)
var display = "";
var rightGuess = "";

// Letter constructor function
function Letter(data) {
    this.letter = data;
    this.guessed = false;
}

// Letter constructor prototype functions

// Display function
Letter.prototype.display = function (x, y) {
    if (y === true) {
        display = x;
    } else {
        display = "_";
    }
    return display;
};

// Check function
Letter.prototype.check = function (x, y) {
    if (x === y) {
        rightGuess = true;
    } else {
        rightGuess = false;
    }
    return rightGuess;
};

module.exports = Letter;