// Business Logic

let playerOne = {
  totalScore: 0,
  currentTurn: true
}

let playerTwo = {
  totalScore: 0,
  currentTurn: false
}

function rollDice() {
  let rollNumber = Math.floor((Math.random() * 6) + 1);
  return rollNumber;
}
 
// UI logic

// display dice roll
// -> 

$(document).ready(function() {
  // set up event listeners
  function setUpEventListeners() {
    $("button#start").on("click", function() {
      $(".game").show();
      $("button#start").hide();
    });
  }
  setUpEventListeners();

});


