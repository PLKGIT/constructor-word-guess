// Initialize
//-------------------------
// Set Max Listeners
require('events').EventEmitter.defaultMaxListeners = 30;
// Require Inquirer NPM
var inquirer = require("inquirer");
// Require word.js
var Word = require("./assets/javascript/word.js");
// Create an array of game words
var wordsArray = ["Car", "Star Wars", "Bookcase", "Superman and Batman", "Election", "Apple", "Pepsi Cola", "Alligator", "Television Show", "Bicycle", "Laptop", "Masters Degree"];
var counter = 10;
var gameWord = [];
var testArray = [];

// Logic
//-------------------------

function startGame() {
    // Reset values
    gameWord = [];
    testArray = [];
    counter = 10;
    // Generate a Random Number between 0 and the length of the wordsArray
    var randomNumber = Math.floor(Math.random() * wordsArray.length);
    // Select a Random Word from wordsArray and store in Word.js array
    gameWord = new Word(wordsArray[randomNumber].toLowerCase().split(""));;
    console.log("---gameWord array from word.js---");
    console.log(gameWord.letterArray);
    for (var i = 0; i < gameWord.letterArray.length; i++) {
        if (gameWord.letterArray[i] !== " ") {
            testArray.push("_");
        } else {
            testArray.push(" ");
        }
    }
    // Call promptGuess() function
    // console.clear();
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
            var userGuess = response.input.toLowerCase();
            // console.log("---userGuess---");
            // console.log(userGuess);

            if (gameWord.letterArray.indexOf(userGuess) === -1) {
                counter--;
                console.log("Sorry, wrong letter!  You have " + counter + " tries remaining.")
                promptGuess();
            }
            else {
                var indexesOfInput = [];
                gameWord.letterArray.forEach(function (letter, index, array) {
                    if (letter == userGuess) { indexesOfInput.push(index) }
                    return indexesOfInput
                })
                console.log("---Input Index---")
                console.log(indexesOfInput);

                for (i = 0; i < indexesOfInput.length; i++) {
                    testArray[indexesOfInput[i]] = testArray[indexesOfInput[i]].replace('_', response.input);
                }
                console.log("---Game Word Array---")
                console.log(gameWord.letterArray);
                console.log("---Test Array---")
                console.log(testArray);

                if (testArray.indexOf("_") === -1) {
                    console.log("----------------------------------------------------")
                    console.log("You won!  Let's play again.")
                    console.log("----------------------------------------------------")
                    startGame();
                } else {
                    promptGuess();
                };
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