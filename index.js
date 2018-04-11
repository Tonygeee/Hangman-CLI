var Word = require("./word.js");
var inquirer = require("inquirer");
var clc = require('cli-color');
var wordList = ["pizza", "lasagna", "burrito", "sandwhich", "pasta", "spaghetti"];
var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
var wordSplit = chosenWord.split("");
var letterArray = [];
var dashArray = [];
var firstWord = new Word();
var guessesLeft = 10;
console.log("Hangman CLI Game");

function initializeGame() {
	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	wordSplit = chosenWord.split("");
	firstWord.returnLetters(wordSplit, letterArray);
	firstWord.returnWord(letterArray, dashArray)
};

function startGame() {
	inquirer.prompt([{
		type: "input",
		message: "Guess a letter:",
		name: "userInput"
	}]).then(function(answer) {
		firstWord.checkWord(letterArray, answer.userInput);
		var letterInWord = false;
		for (var i = 0; i < wordSplit.length; i++) {
			if (answer.userInput === wordSplit[i]) {
				letterInWord = true;
			}
		}
		if (letterInWord) {
			console.log(clc.green("Correct!"));
		} else {
			guessesLeft--;
			console.log(clc.red("Incorrect!"));
		}
		dashArray = [];
		firstWord.returnWord(letterArray, dashArray);
		console.log(`${guessesLeft} guesses remaining`)
		console.log("");
		if (dashArray.toString() === wordSplit.toString()) {
			console.log(clc.green("Winner Winner Chicken Dinner! ...(PUBG?)"));
			guessesLeft = 0;
		}
		if (guessesLeft > 0) {
			startGame();
		} else {
			console.log(clc.red("You lose! Next word: "));
			guessesLeft = 10;
			dashArray = [];
			letterArray = [];
			initializeGame();
			startGame();
		}
	});
};
initializeGame();
startGame();