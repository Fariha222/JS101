const readline = require("readline-sync");
const VALID_CHOICES = ['r', 'p', 's', 'S', 'l'];

function prompt(mgs) {
  console.log(`\n==> ${mgs}`);
}
let wholeWord;
function completeWord(word) {              //function that coverts first
  switch (word) {                          //character of each word to the
    case 'p':                              //respective word
      wholeWord = 'paper';
      break;
    case 'r':
      wholeWord = 'rock';
      break;
    case 's':
      wholeWord = 'scissor';
      break;
    case 'S':
      wholeWord = 'spock';
      break;
    case 'l':
      wholeWord = 'lizard';
      break;
  }
  return wholeWord;
}
let computerWinCounter = 0;
let playerWinCounter = 0;

function winningCombination(player1, player2) {
  return (player1 === 'r') && (player2 === 's') ||
          (player1 === 'p') && (player2 === 'r') ||
          (player1 === 's') && (player2 === 'p') ||
          (player1 === 'r') && (player2 === 'l') ||
          (player1 === 'l') && (player2 === 'S') ||
          (player1 === 'l') && (player2 === 'p') ||
          (player1 === 'S') && (player2 === 's') ||
          (player1 === 'S') && (player2 === 'r') ||
          (player1 === 's') && (player2 === 'l') ||
          (player1 === 'p') && (player2 === 'S');
}

function winningLogic(choice1, choice2) {
  if (choice1 === choice2) {
    prompt ("It's a tie!");
  } else if (winningCombination(choice1, choice2)) {
    prompt (`You win!`);
    playerWinCounter += 1;
  } else {
    prompt (`Computer wins!`);
    computerWinCounter += 1;
  }
}

function chooseWinner(playerScore, computerScore) {   //function thats decides
  if (playerScore > computerScore) {                  //the winner of 5 Games
    prompt( " You won the best of 5 Games <==");
  } else if (playerScore < computerScore) {
    prompt(" Computer won the best of 5 Games <==");
  } else {
    prompt(` The game is a tie! <==`);
  }
}

prompt('"ROCK PAPER SCISSOR SPOCK LIZARD"');
prompt('Lets play a best of five!');

for (let counter = 1; counter <= 5; counter += 1) {    //to run the game 5 times
  prompt(`Game ${counter}:`);
  prompt("Enter a choice: 'r' for rock, 'p' for paper, 's' for scissor, 'S' for spock or 'l' for lizard:");
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {        //confirms that input is valid
    prompt("Thats not a valid choice");
    choice = readline.question();
  }
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  winningLogic(choice, computerChoice);
  choice = completeWord(choice);
  computerChoice = completeWord(computerChoice);

  prompt(` You chose: ${choice}, Computer chose: ${computerChoice}`);
}

chooseWinner(playerWinCounter, computerWinCounter);
