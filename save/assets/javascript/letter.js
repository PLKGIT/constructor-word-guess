// Constructor for Letter
function Letter(data) {
    this.letter = data;
    this.guessed = false;
    this.display = function () {
        var wordDisplay = [];
        for (var i = 0; i < data.length; i++) {
            if (this.guessed === this.true) {
                wordDisplay.push(this.letter)
            } else {
                wordDisplay.push("_")
            };
        }
        console.log(wordDisplay.join(' '));
    };
    this.check = function (userGuess) {
        for (var i = 0; i < data.length; i++) {
            if (userGuess === this.letter) {
                this.guessed = true;
            } else {
                this.guessed = false;
            };
        }
    }
}

// Make Letter constructor available outside of letter.js
module.exports = Letter;