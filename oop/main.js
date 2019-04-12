
$(document).ready(startApp);
var guessGame;   
var randomNumber;
function startApp(){
	guessGame = new Guess();
	guessGame.guess_start();
	// randomNumber = new RandomGenerator( min, max);	
}

