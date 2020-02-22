// Require Letter
// var Letter = require("./letter.js");

// Constructor for Word
function Word(gameWord) {
    this.letterArray = gameWord;
}

// Make Word constructor available outside of word.js
module.exports = Word;