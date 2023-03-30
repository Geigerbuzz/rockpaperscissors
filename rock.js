let compNum = Math.floor(Math.random() * 3);

let compAns = (compNum == 0) ? "rock":
    (compNum == 1) ? "paper":
    "scissors";

let plyrChoice = prompt("Rock, Paper.. Scissors... Shoot!");
let plyrAns = plyrChoice.toLowerCase();

console.log(compNum)
console.log(compAns)
console.log(plyrAns)

function game(){
    for (let gameNum = 0; gameNum != 5: gameNum++){
    }
}

function match(plyrAns, compAns){
    if (plyrAns === compAns){
        return "It's a tie!";
    } else if (compAns == "rock"){
        return (plyrAns == "paper") 
            ? "You win! Paper beats rock!" 
            : "You loose, rock beats scissors!"
    } else if (compAns == "paper"){
        return (plyrAns == "scissors") 
            ? "You win! Scissors beats paper!" 
            : "You loose, paper beats rock!"
    }else if (compAns == "scissors"){
        return (plyrAns == "rock") 
            ? "You win! Rock beats scissors!" 
            : "You loose, scissors beats paper!"
    }
}


console.log(match(plyrAns, compAns))