function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function computerPlay() {

    arr = ['Rock', 'Paper', 'Scissors'];
    randomIndex = getRandomIntInclusive(0, 2);
    // console.log(arr[randomIndex]);
    return arr[randomIndex];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'scissors' || playerSelection.toLowerCase() == 'paper' || playerSelection.toLowerCase() == 'rock') {

        if (playerSelection.toLowerCase() == "scissors") {
            if (computerSelection.toLowerCase() == "paper") {
                return ("You win, " + playerSelection + " beats " + computerSelection);
            }
            else if (computerSelection.toLowerCase() == 'rock') {
                return ("You lose, " + computerSelection + " beats " + playerSelection);
            }
            else {
                return "its a draw, both you and computer chose " + computerSelection;
            }
        }
        else if (playerSelection.toLowerCase() == "rock") {
            if (computerSelection.toLowerCase() == "paper") {
                return ("You lose, " + computerSelection + " beats " + playerSelection);
            }
            else if (computerSelection.toLowerCase() == 'rock') {
                return "its a draw, both you and computer chose " + computerSelection;
            }
            else {
                return ("You win, " + playerSelection + " beats " + computerSelection);
            }
        }
        else { // player chooses paper
            if (computerSelection.toLowerCase() == "paper") {
                return "its a draw, both you and computer chose " + computerSelection;
            }
            else if (computerSelection.toLowerCase() == 'rock') {
                return ("You win, " + playerSelection + " beats " + computerSelection);
            }
            else {
                return ("You lose, " + computerSelection + " beats " + playerSelection);
            }
        }
    }
    else {
        return ('BAD INPUT, input rock paper or scissors');
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i=0;i<5;i++){
        let playerChoice = prompt("Enter rock or paper or scissors");
        let computerChoice = computerPlay();
        if ((playRound(playerChoice,computerChoice)).includes('win')){
            playerScore++;
            console.log(playRound(playerChoice,computerChoice) + playerScore + ", Computer score: " + computerScore);
        }
        else if ((playRound(playerChoice,computerChoice)).includes('lose')){
            computerScore++;
            console.log(playRound(playerChoice,computerChoice) + playerScore + ", Computer score: " + computerScore);
        }
        else{
            console.log(playRound(playerChoice,computerChoice) + playerScore + ", Computer score: " + computerScore);
        }
    }

    if (playerScore > computerScore){
        console.log("Congrats! You won the game, call me!")
    }
    else if (computerScore > playerScore){
        console.log("YOu lost! go away!");
    }
    else {
        console.log('ITs a draw, BORINGGG!!!')
    }
}
game();

