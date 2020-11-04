// Business Logic

function Player(currentScore, currentTurn, totalScore) {
  this.currentScore = currentScore;
  this.currentTurn = currentTurn;
  this.totalScore = totalScore;
}

let playerOne = new Player(0, true, 0)
let playerTwo = new Player(0, false, 0)


function startGame() {
  $(".game").show();
  $("button#start").hide();
}

function rollDice() {
  let rollNumber = Math.floor((Math.random() * 6) + 1);
  $(".dice").html(`<p>dice: ${rollNumber}</p>`);
  if (rollNumber === 1) {
    toggleTurn();
  } else {
    playerOne.addCurrentScore(rollNumber);
    $("#currentTurnScore1").text(playerOne.currentScore);
    playerTwo.addCurrentScore(rollNumber);
    $("#currentTurnScore2").text(playerTwo.currentScore);
    // console.log(playerOne, playerTwo)
  }
}

Player.prototype.addCurrentScore = function(rollNumber) {
  if (this.currentTurn === true) {
  this.currentScore += rollNumber;  
  }
}

Player.prototype.holdCurrentScore = function() {
  if (this.currentTurn === true) {
    this.totalScore += this.currentScore;
  };
};

function toggleTurn() {
  // -> set player boolean values
  playerOne.currentTurn = !playerOne.currentTurn;
  playerTwo.currentTurn = !playerTwo.currentTurn;
  // -> set player current scores
  playerOne.currentScore = 0;
  playerTwo.currentScore = 0;
  // -> display turn with UI somehow
  // $("#").text();
  } 

function trackTotalScores() {


};
// -> display total scores
// -> monitor win condition


 
// UI logic


$(document).ready(function() {
  // set up event listeners
  function setUpEventListeners() {
    $("button#start").on("click", function() { 
      startGame();
    });
    $("button#roll").on("click", function() {
      rollDice();
    });
    $("button#hold").on("click", function() {
      playerOne.holdCurrentScore();
      playerTwo.holdCurrentScore();
      toggleTurn();
      // console.log(playerOne, playerTwo);
    });
  }
  setUpEventListeners();
});

