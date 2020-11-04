? Player constructor ?

playerOne {
  totalScore: 0,
  currentTurn: true
}

playerTwo {
  totalScore: 0,
  currentTurn: false
}

Business
--------

// roll dice function
-> generate random integer between 1-6

// set up event handlers/listeners
-roll dice btn
-hold btn
-start/reset game btn



// hold dice function
// add/reset? currentTurnScore function
// set currentScore function
// switch turn function


// check win (currentPlayer.currentScore >= 100) function


UI
--
// start game 
-> displays action buttons and player columns
-> initializes (2) player objects and sets default key:values
// roll btn
-> calls roll dice function
// hold btn
// display current score
// display current turn score