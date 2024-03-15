const choices = ["kő", "papír", "olló"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "Döntetlen!";
    }
    else{
        switch(playerChoice){
            case "kő":
                result = (computerChoice === "olló") ? "Nyertél!" : "Vesztettél!";
                break;
            case "papír":
                result = (computerChoice === "kő") ? "Nyertél!" : "Vesztettél!";
                break;
            case "olló":
                result = (computerChoice === "papír") ? "Nyertél!" : "Vesztettél!";
                break;
        }
    }

    playerDisplay.textContent = `Játékos: ${playerChoice}`;
    computerDisplay.textContent = `Gép: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "whiteText");

    switch(result){
        case "Nyertél!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Vesztettél!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        default: // Döntetlennél
        resultDisplay.classList.add("whiteText");
        break;
    }
}