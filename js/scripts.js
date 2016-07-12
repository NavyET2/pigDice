// function that delivers a random number.

var rollValue = function randomNumber() {
  return Math.floor(Math.random() * (6)) + 1;
}

function Player(name, score, turn) {
  this.name = name;
  this.score = score;
  this.turn = turn;
}

var turnValue = 0;

var player1 = new Player("Player One", 0, true)
var player2 = new Player("Player Two", 0, false)

if (turnValue === 1) {
  
} else (rollValue += turnValue) {
  alert(trueValue)
}





$(document).ready(function() {
  $("form#some-form").click(function(event) {
  console.log(rollValue());
  event.preventDefault();
  });
});
