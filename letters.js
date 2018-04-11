function Letter(character, guessed) {
	this.character = character; //string
	this.guessed = guessed; //boolean
	this.returnCharacter = function() {
		if (this.guessed) {
			return this.character;
		} else {
			return "_";
		}
	};
	this.checkCharacter = function(userInput) {
		if (userInput === this.character || this.guessed === true) {
			this.guessed = true;
		} else {
			this.guessed = false;
		}
	}
}
module.exports = Letter;