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
  $(".dice").show();
  $(".dice").html(`<p>dice: ${rollNumber}</p>`);
  if (rollNumber === 1) {
    toggleTurn();
    $(".currentTurnScore").empty();
  } else {
    playerOne.addCurrentScore(rollNumber);
    playerTwo.addCurrentScore(rollNumber);
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
  if (playerOne.totalScore >= 10) {
    alert("player one is victorious!!!!!");
    $("#roll").hide();
    $("#hold").hide();
  } else if (playerTwo.totalScore >= 10) {
    alert("player two is victorious!!!!!");
    $("#roll").hide();
    $("#hold").hide();
  } else {
    toggleTurn();
  }
};

function resetGame() {
  playerOne.totalScore = 0;
  playerOne.currentScore = 0;
  playerOne.currentTurn = true;
  playerTwo.totalScore = 0;
  playerTwo.currentScore = 0;
  playerTwo.currentTurn = 0;
  $(".currentTurnScore").empty();
  $(".totalScore").empty();
  $("#roll").show();
  $("#hold").show();
  $(".dice").hide();
}
 
// UI logic

$(document).ready(function() {
  // set up event listeners
  function setUpEventListeners() {
    $("button#start").on("click", function() { 
      startGame();
    });
    $("button#roll").on("click", function() {
      rollDice();
      $("#currentTurnScore1").text(playerOne.currentScore);
      $("#currentTurnScore2").text(playerTwo.currentScore);
    });
    $("button#hold").on("click", function() {
      playerOne.holdCurrentScore();
      playerTwo.holdCurrentScore();
      $("#totalScore1").text(playerOne.totalScore);
      $("#totalScore2").text(playerTwo.totalScore);
      trackTotalScores();
      $(".currentTurnScore").empty();
    });
    $("button#reset").on("click", function() {
      resetGame();
    });
  }
  setUpEventListeners();
});

