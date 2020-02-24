// Word.js
// Required Items
var Letter = require("./letter.js");

// Word constructor function
function Word(gameWord) {
    this.myArray = [];
    this.myDisplay = ["_"];
    this.letters = gameWord;
    this.addletters = function () {
        this.letters.forEach((element) => {
            this.myArray.push(new Letter(element));
        });

        this.myArray.forEach((element) => {
            if (element.letter === " "){
                element.guessed = true;
            }
        });

    };
    this.addletters();
    this.displayWord = function () {
        this.myDisplay = [];
        this.myArray.forEach((element) => {
            this.myDisplay.push(Letter.prototype.display(element.letter, element.guessed));
        });
        console.log(this.myDisplay.join(' '));
    };
    this.checkWord = function () {
        this.myArray.forEach((element) => {
            if (element.guessed === false){
                element.guessed = Letter.prototype.check(Word.prototype.userGuess, element.letter);
            }
        });
    }
};

module.exports = Word;