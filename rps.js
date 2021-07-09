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

const scores = document.querySelector("#scores");
let computerScore = 0;
let playerScore = 0;
let currentRoundwinnerText = document.querySelector("#currentRoundWinner");

const winnerText = document.querySelector("#winnerText")

function updateScoresVisual(){
    if(computerScore >4 ){
        scores.textContent = 'Your score : ' + playerScore + ', Computer Score : ' + computerScore;
        winnerText.textContent = 'You lose :(...better luck next time. Play again if you want' ;
        computerScore = 0;
        playerScore = 0;
    }
    else if (playerScore > 4){
        scores.textContent = 'Your score : ' + playerScore + ', Computer Score : ' + computerScore;
        winnerText.textContent = 'YOu win!..go, eat chicken and call me!';
        computerScore = 0;
        playerScore = 0;
    }
    else{
        scores.textContent = 'Your score : ' + playerScore + ', Computer Score : ' + computerScore;
    }
}
function playRound(e) {

    let computerSelection = computerPlay();
    let playerSelection = e.target.innerHTML;
    if(playerScore==0 && computerScore ==0){  // this is for clearing winner text when the score resets to 0

        winnerText.textContent = '';
    }

    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "paper") {
            playerScore++;
            updateScoresVisual();
            currentRoundwinnerText.textContent = "You won this round!" + ", Computer chose: "+ computerSelection;
        }
        else if (computerSelection.toLowerCase() == 'rock') {
            computerScore++;
            updateScoresVisual();
            currentRoundwinnerText.textContent = "You lost this round!..play again baby...its best of 5!"+ ", Computer chose: "+ computerSelection;
        }
        else {
            currentRoundwinnerText.textContent = "This round is a DRAW...boringggggg..play again"+ ", Computer chose: "+ computerSelection;
            return;
        }
    }
    else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "paper") {
            computerScore++;
            updateScoresVisual();
            currentRoundwinnerText.textContent = "You lost this round!..play again baby...its best of 5!"+ ", Computer chose: "+ computerSelection;
        }
        else if (computerSelection.toLowerCase() == 'rock') {
            currentRoundwinnerText.textContent = "This round is a DRAW...boringggggg..play again"+ ", Computer chose: "+ computerSelection;
            return;
        }
        else {
            playerScore++;
            updateScoresVisual();
            currentRoundwinnerText.textContent = "You won this round!"+ ", Computer chose: "+ computerSelection;
        }
    }
    else { // player chooses paper
        if (computerSelection.toLowerCase() == "paper") {
            currentRoundwinnerText.textContent = "This round is a DRAW...boringggggg..play again"+ ", Computer chose: "+ computerSelection;
            return;
        }
        else if (computerSelection.toLowerCase() == 'rock') {
            playerScore++;
            updateScoresVisual();
            currentRoundwinnerText.textContent = "You won this round!"+ ", Computer chose: "+ computerSelection;
        }
        else {
            computerScore++;
            updateScoresVisual();
            currentRoundwinnerText.textContent = "You lost this round!..play again baby...its best of 5!"+ ", Computer chose: "+ computerSelection;
        }
    }

}
const rock = document.querySelector("#rockButton");
const paper = document.querySelector("#paperButton");
const scissors = document.querySelector("#scissorsButton");
// function randomfunc(e){
//     console.log(e.target.innerHTML);
// }
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

// function game(){
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i=0;i<5;i++){
//         let playerChoice = prompt("Enter rock or paper or scissors");
//         let computerChoice = computerPlay();
//         if ((playRound(playerChoice,computerChoice)).includes('win')){
//             playerScore++;
//             console.log(playRound(playerChoice,computerChoice) + playerScore + ", Computer score: " + computerScore);
//         }
//         else if ((playRound(playerChoice,computerChoice)).includes('lose')){
//             computerScore++;
//             console.log(playRound(playerChoice,computerChoice) + playerScore + ", Computer score: " + computerScore);
//         }
//         else{
//             console.log(playRound(playerChoice,computerChoice) + playerScore + ", Computer score: " + computerScore);
//         }
//     }

//     if (playerScore > computerScore){
//         console.log("Congrats! You won the game, call me!")
//     }
//     else if (computerScore > playerScore){
//         console.log("YOu lost! go away!");
//     }
//     else {
//         console.log('ITs a draw, BORINGGG!!!')
//     }
// }
// game();

