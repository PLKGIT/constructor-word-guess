// Require Letter
var Letter = require("./letter.js");

// Constructor for Word
function Word(gameWord) {
    // var wordDisplay=[];
    this.letterArray = gameWord;
    this.text;
    this.letterArray.forEach((element) => {
        text = new Letter(element);
        text.check(Word.prototype.userGuess);
        text.display();
        // if (text.guessed === true) {
        //     wordDisplay.push(text.letter)
        // } else {
        //     wordDisplay.push("_")
        // };
        // return wordDisplay;
    })
    // text.display(wordDisplay);
    
}
// Make Word constructor available outside of word.js
module.exports = Word;