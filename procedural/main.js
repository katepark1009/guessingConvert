
$(document).ready(startApp);
var guess;
function startApp(){
	guess = new Guess();
	guess.guess_start();
}

class Guess{
	constructor(){
		this.secretNumber;
		this.attachHandlers = this.attachHandlers.bind(this);
		this.handleGuess = this.handleGuess.bind(this);
	}
	guess_start(){
		this.secretNumber = this.pickRandomNumber(1,10);
		this.attachHandlers();
	}
	pickRandomNumber(min, max){
		return Math.floor( Math.random() * (max-min)) + min;
	}
	attachHandlers(){
		$("#submitGuess").click( this.handleGuess );
		// $("#userGuess").focus( this.clearGuess );
	}
	handleGuess(){
		var userGuess = parseInt( $("#userGuess").val());
		if(userGuess<1 || userGuess>10){
			this.displayResult('invalid range.  Must be between 1 and 10');
			return;
		}
		if(userGuess === this.secretNumber){
			this.displayResult('you got it!');
			this.guess_start();
			this.reset();
		} else if (userGuess < this.secretNumber){
			this.displayResult('too low!');
		} else if (userGuess > this.secretNumber){
			this.displayResult('too high!');
		}
	}
	clearGuess(){
		$("#userGuess").val('');
	}
	displayResult( message ){
		$("#display").text( message );
	}
	reset(){
		// this.pickRandomNumber();
		this.clearGuess();
		this.guess_start();
	}
}