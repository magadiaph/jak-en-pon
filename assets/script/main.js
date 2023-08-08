// judge
let matchResult = document.querySelector("#matchResult");

let playerScore = document.querySelector("#playerScore");
let botScore = document.querySelector("#botScore");

let userScore = 0;
let computerScore = 0;

// player side
let displayPlayerThrow = document.querySelector("#displayPlayerThrow");

let playerRock = document.querySelector("#playerRock");
let playerPaper = document.querySelector("#playerPaper");
let playerScissors = document.querySelector("#playerScissors");


// bot input
let botThrow = document.querySelector("#botThrow");

//images

let botRock = document.createElement("img");
botRock.src = "/assets/images/bot-rock.png"
botRock.className = "bot-rock" 
botRock.id = "botPaper";

let botPaper = document.createElement("img");
botPaper.src = "/assets/images/bot-paper.png"
botPaper.className = "bot-paper" 
botPaper.id = "botPaper";


let botScissors = document.createElement("img");
botScissors.src = "/assets/images/bot-scissors.png"
botScissors.className = "bot-scissors" 
botScissors.id = "botScissors";

let throwRock = document.createElement("img");
throwRock.src = "/assets/images/rock.png"
throwRock.className = "throw-rock" 
throwRock.id = "throwRock";

let throwPaper = document.createElement("img");
throwPaper.src = "/assets/images/paper.png";
throwPaper.className = "throw-paper"; 
throwPaper.id = "throwPaper";


let throwScissors = document.createElement("img");
throwScissors.src = "/assets/images/scissors.png";
throwScissors.className = "throw-scissors";
throwScissors.id = "throwScissors";


//

// playerRock.addEventListener("click", toggleRock);

// function toggleRock() {
//     displayPlayerThrow.classList.toggle("throw-rock");
// }

// playerPaper.addEventListener("click", togglePaper);

// function togglePaper() {
//     displayPlayerThrow.classList.toggle("paper-throw")
// }

// playerPaper.addEventListener("click", toggleScissors);

// function togglePaper() {
//     displayPlayerThrow.classList.toggle("scissors-throw")
// }

// function changeBgRock () {
//     if (displayPlayerThrow.displayPlayerThrow == "display-player") {
//         displayPlayerThrow.className = "throw-rock";
//     } else {
//         displayPlayerThrow.className = "display-player";
//     }
// }

// displayPlayerThrow.addEventListener("click", changeBgRock);
// console.log(changeBgRock);


function changeBgRock2 () {
    throwRock.removeAttribute("style", "display:none");
}

function rockRound() {
        let botInput = ["rock", "paper", "scissors"]
        let index = Math.round(Math.random() * 2);
        console.log(index);
        console.log(botInput[index]);

        function changeToRock() {

            if (displayPlayerThrow.getAttribute('src') === "/assets/images/bg.png") {
                displayPlayerThrow.setAttribute('src', "/assets/images/rock.png");
            }
            else {
                displayPlayerThrow.setAttribute('src', "/assets/images/bg.png");
            }
        }
        
        displayPlayerThrow.addEventListener("click", changeToRock);

    if (playerRock.value == botInput[index]) {
        botThrow.innerHTML = botInput[index];
        matchResult.innerHTML = "It's a tie!";

    } else if (playerRock.value && botInput[index] == "paper") {
        botThrow.innerHTML = botInput[index];
        matchResult.innerHTML = "Oops.. a lose pick";
        botScore.innerHTML= (computerScore += 1);

    } else if (playerRock.value && botInput[index] == "scissors") {
        botThrow.innerHTML = botInput[index];
        matchResult.innerHTML = "Victory!";
        playerScore.innerHTML= (userScore += 1);

    }
}




function paperRound() {
        let botInput = ["rock", "paper", "scissors"]
        let index = Math.round(Math.random() * 2);
        console.log(index);
        console.log(botInput[index]);

   if (playerPaper.value == botInput[index]) {
        botThrow.innerHTML = botInput[index];
        matchResult.innerHTML = "It's a tie!";


    } else if (playerPaper.value && botInput[index] == "scissors") {
        botThrow.innerHTML = botInput[index];
        // botThrow.appendChild(botScissors);
        matchResult.innerHTML = "You Lose!";
        botScore.innerHTML= (computerScore += 1);

    } else if (playerPaper.value && botInput[index] == "rock") {
        botThrow.innerHTML = botInput[index];
        // botThrow.appendChild(botRock);
        matchResult.innerHTML = "You Win!";
        playerScore.innerHTML= (userScore += 1);
    }

}


    function scissorsRound() {
        let botInput = ["rock", "paper", "scissors"]
        let index = Math.round(Math.random() * 2);
        console.log(index);
        console.log(botInput[index]);
    
    if (playerScissors.value == botInput[index]) {
        botThrow.innerHTML = botInput[index];
        matchResult.innerHTML = "It's a tie!"

    } else if (playerScissors.value && botInput[index] == "rock") {
        botThrow.innerHTML = botInput[index];
        matchResult.innerHTML = "You Lose!";
        botScore.innerHTML= (computerScore += 1);

    } else if (playerScissors.value && botInput[index] == "paper") {
        botThrow.innerHTML = botInput[index];
        matchResult.innerHTML = "You Win!";
        playerScore.innerHTML= (userScore += 1);
    }
}