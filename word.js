var Letter = require("./letters.js");

function Word() {
	this.returnLetters = function(wordSplit, letterArray) {
		for (var i = 0; i < wordSplit.length; i++) {
			letterArray.push(new Letter(wordSplit[i], false));
		}
	};
	this.returnWord = function(letterArray, dashArray) {
		for (var j = 0; j < letterArray.length; j++) {
			dashArray.push(letterArray[j].returnCharacter());
		}
		console.log(" ");
		console.log(`Current Word: ${dashArray.join(" ")}`);
		console.log(" ");
	};
	this.checkWord = function(letterArray, userInput) {
		for (var k = 0; k < letterArray.length; k++) {
			letterArray[k].checkCharacter(userInput);
		}
	}
}
module.exports = Word;