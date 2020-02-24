// Initialize
//-------------------------
// Set Max Listeners value
require('events').EventEmitter.defaultMaxListeners = 30;
// Require Inquirer NPM
var inquirer = require("inquirer");
// Require word.js
var Word = require("./assets/javascript/word.js");
// Create an array of game words
var wordsArray = ["Car", "Star Wars", "Bookcase", "Superman and Batman", "Election", "Apple", "Pepsi Cola", "Alligator", "Television Show", "Bicycle", "Laptop", "Masters Degree"];
var counter = 10;
var gameWord = [];
var userGuess = "";

// Logic
//-------------------------

function startGame() {
    // Reset values
    counter = 10;
    gameWord = [];
    userGuess = "";
    // Generate a Random Number between 0 and the length of the wordsArray
    var randomNumber = Math.floor(Math.random() * wordsArray.length);
    // Select a Random Word from wordsArray and store in Word.js array
    gameWord = new Word(wordsArray[randomNumber].toLowerCase().split(""));
    console.log(gameWord);
    promptGuess();
};

function promptGuess() {
    if (counter > 0) {
        inquirer.prompt([
            {
                name: "input",
                message: "Guess a letter"
            }
        ]).then(function (response) {
            userGuess = response.input.toLowerCase();
            Word.prototype.userGuess = userGuess;
            if (gameWord.letterArray.indexOf(Word.prototype.userGuess) === -1) {
                console.log(Word.prototype.userGuess);
                console.log(gameWord.letterArray.indexOf(Word.prototype.userGuess));
                counter--;
                console.log("Sorry, wrong letter!  You have " + counter + " tries remaining.")
                promptGuess();
            }
            else {
                console.log(gameWord.text);
                console.log(gameWord.display);
                console.log(gameWord.letterArray.text);
                promptGuess();
                // if (gameWord.wordDisplay.indexOf("_") === -1) {
                //     console.log("----------------------------------------------------")
                //     console.log("You won!  Let's play again.")
                //     console.log("----------------------------------------------------")
                //     startGame();
                // } else {
                //     promptGuess();
                // };
            };
        });
    } else {
        console.log("----------------------------------------------------")
        console.log("Sorry, you've run out of turns! Let's play again.")
        console.log("----------------------------------------------------")
        startGame();
    };
};
startGame();