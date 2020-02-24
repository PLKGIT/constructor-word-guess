// letter.js

// Initialize
//-----------------------------------------------------------------
//-----------------------------------------------------------------

// Set Max Listeners value
//-----------------------------------------------------------------
require('events').EventEmitter.defaultMaxListeners = 30;

// Include required values
//-----------------------------------------------------------------
// Require Inquirer NPM
var inquirer = require("inquirer");
// Require word.js
var Word = require("./word.js");

// Set global variables
//-----------------------------------------------------------------
// Create an array of game words
var wordsArray = ["Butterfly", "Lady Bug", "Car", "Star Wars", "Bookcase", "Superman and Batman", "Election", "Apple", "Pepsi Cola", "Alligator", "Television Show", "Bicycle", "Laptop", "Masters Degree"];
// Create variable for random number between 0 and the length of the word array
var randomNumber;
// Create counter for number of available user tries
var counter = 10;
// Create an array variable for the Game Word
var gameWord = [];
// Create a variable to hold the user's guess
var userGuess = "";

// Logic
//-----------------------------------------------------------------
//-----------------------------------------------------------------

// startGame() function
//-----------------------------------------------------------------
function startGame() {
    // Reset variables for counter, game word, and user guess
    counter = 10;
    gameWord = [];
    userGuess = "";
    // Generate a random number between 0 and the length of the wordsArray
    randomNumber = Math.floor(Math.random() * wordsArray.length);
    // Select and store a word from the wordsArray using the random number variable as an index
    gameWord = new Word(wordsArray[randomNumber].toLowerCase().split(""));
    // Call the promptGuess() function to prompt the user for a guess
    promptGuess();
};

// promptGuess() function
//-----------------------------------------------------------------
function promptGuess() {
    // Check that the remaining user tries counter is greater than 0
    if (counter > 0) {
        // Call the displayWord() function in word.js
        gameWord.displayWord();
        // If the user has correctly guessed all letters in the word, display a 'you won' message
        if (gameWord.myDisplay.indexOf("_") === -1) {
            console.log("----------------------------------------------------")
            console.log("You won!  Let's play again.")
            console.log("----------------------------------------------------")
            // Call the startGame() function to start a new game
            startGame();
        } else {
            // If there are still letters to be guessed, prompt the user for a letter
            inquirer.prompt([
                {
                    name: "input",
                    message: "Guess a letter"
                }
            ]).then(function (response) {
                // Convert user's guess to lowercase and assign it to the userGuess variable
                userGuess = response.input.toLowerCase();
                // Pass user guess to the Word constructor via a prototype value
                Word.prototype.userGuess = userGuess;
                // Check to see whether the user's guess exist in the game word
                if (gameWord.letters.indexOf(Word.prototype.userGuess) === -1) {
                    // If the guessed letter does NOT exist, reduce the counter by one
                    counter--;
                    // Display a wrong letter message, including the number of remaining tries
                    console.log("Sorry, wrong letter!  You have " + counter + " tries remaining.")
                    // Call the promptGuess() function to prompt the user for a guess
                    promptGuess();
                }
                else {
                    // If the guessed letter does exist, call the checkWord() function in word.js
                    gameWord.checkWord();
                    // Call the promptGuess() function to prompt the user for a guess
                    promptGuess();
                };
            });

        };


    } else {
        // If the user tries counter < 1, display a game lost message
        console.log("----------------------------------------------------")
        console.log("Sorry, you've run out of turns! Let's play again.")
        console.log("----------------------------------------------------")
        // Call the startGame() function to start a new game
        startGame();
    };
};
// Call the startGame() function to start a new game
startGame();