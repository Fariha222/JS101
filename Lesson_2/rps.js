const TOTAL_MATCHES = 5;
const readline = require("readline-sync");
const VALID_CHOICES = ['r', 'p', 'sc', 'sp', 'l'];
let gameCounter = 1;
let wholeWord;
let computerWinCounter = 0;
let playerWinCounter = 0;
let choice;
let computerChoice;
const WINNING_COMBOS = {
  r:   ['sc', 'l'],
  p:   ['r', 'sp'],
  sc:  ['p', 'l'],
  sp:  ['r', 'sc'],
  l:   ['p', 'sp'],
};

function prompt(mgs) {               //prompt function
  console.log(`==> ${mgs}`.toUpperCase());
}

function getPlayersInput() {            //gets players input:"choice"
  prompt(`Game ${gameCounter}:`);

  prompt("Enter a choice: 'r' for rock, 'p' for paper, 's' for scissor, 'S' for spock or 'l' for lizard:");
  choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("Thats not a valid choice");
    choice = readline.question().toLowerCase();
  }
  return choice;
}

function getComputersInput() {       //get computers random input:"computerChoice"
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function completeWord(word) {   //to get respective word
  switch (word) {
    case 'p':
      wholeWord = 'paper';
      break;
    case 'r':
      wholeWord = 'rock';
      break;
    case 'sc':
      wholeWord = 'scissor';
      break;
    case 'sp':
      wholeWord = 'spock';
      break;
    case 'l':
      wholeWord = 'lizard';
      break;
  }
  return wholeWord;
}

function playerWins(input1, input2) {   //to determine if player wins
  return WINNING_COMBOS[input1].includes(input2);
}

function winningLogic(choice1, choice2, gameCounter) { //determine winner
  if (choice1 === choice2) {
    prompt (`Game ${gameCounter} is a tie!`);
  } else if (playerWins(choice1, choice2)) {
    prompt (`You win Game: ${gameCounter}!`);
    playerWinCounter += 1;
  } else {
    prompt (`Computer wins Game: ${gameCounter}!`);
    computerWinCounter += 1;
  }
}

function chooseWinner(playerScore, computerScore) {//determine winner of 5 games
  if (playerScore > computerScore) {
    prompt( "\n\n\n ==> You won the best of 5 Games <==\n\n");
  } else if (playerScore < computerScore) {
    prompt("\n\n\n ==> Computer won the best of 5 Games <==\n\n");
  } else {
    prompt(`\n\n\n ==> The game is a tie! <==\n\n`);
  }
}


prompt('"ROCK PAPER SCISSOR SPOCK LIZARD"');

prompt("The rules of the game are:\n *rock* crushes lizard & scissor \n *lizard* poisons spock & eats paper \n *spock* smashes scissor & vaporises rock \n *scissor* cuts paper & decapitates lizard \n *paper* disapproves spock & cover rock");
prompt(`Lets play a best of "${TOTAL_MATCHES}" Games!`);


for (gameCounter = 1; gameCounter <= TOTAL_MATCHES; gameCounter += 1) {

  choice = getPlayersInput();
  computerChoice = getComputersInput();
  winningLogic(choice, computerChoice, gameCounter);
  choice = completeWord(choice);
  computerChoice = completeWord(computerChoice);
  prompt (`You chose ${choice}, while the computer chose ${computerChoice}`);

  if (gameCounter === TOTAL_MATCHES) {
    continue;
  }  else {
    prompt(`Press any key to continue to Game: ${gameCounter + 1}`);
    readline.question();
  }

  console.clear();
  prompt(` SCOREBOARD: YOU: !|${playerWinCounter}|! COMPUTER : !|${computerWinCounter}|!`);

}

chooseWinner(playerWinCounter, computerWinCounter);
