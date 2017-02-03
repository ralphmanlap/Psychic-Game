
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var random = Math.floor(Math.random() * 25);
console.log(random);

var letter = alphabet[random];

var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 10;
var guessesTyped =[];


document.onkeyup = function(event) {

	var guess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(guess);

	if (guess === letter) {
		wins++;
		alert("You guess right! " + guessingLetter + " was the correct letter!");
		$("#wins").html("Wins: " + wins);

		guesses = 0;
		guessesLeft = 10;
		guessesTyped = [];
		$("#losses").html("Losses: " + losses);
		$("#guessesLeft").html("Guesses Left: " + guessesLeft);
		$("#guessesSoFar").html("Guesses So Far: " + guessesTyped);

		alert("You lost :( the correct letter was: " + letter);

		var random = Math.floor(Math.random() * 26);

		var letter = alphabet[random];

	}
	else {
		guesses++;
		guessesLeft--;
		guessesTyped.push(guess);
		$("#guessesLeft").html("Guesses Left: " + guessesLeft);
		$("#guessesSoFar").html("Guesses So Far: " + guessesTyped);
	}

	if (guessesLeft === 0) {
		losses++;
		guesses = 0;
		guessesLeft = 10;
		guessesTyped = [];
		$("#losses").html("Losses: " + losses);
		$("#guessesLeft").html("Guesses Left: " + guessesLeft);
		$("#guessesSoFar").html("Guesses So Far: " + guessesTyped);

		alert("You lost :( the correct letter was: " + letter);

		var random = Math.floor(Math.random() * 25);

		letter = alphabet[random];

		console.log(letter);
	}

};
