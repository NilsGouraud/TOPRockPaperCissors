
function rockPaperOrScissors(choice){
    if (choice==0){
        return "rock";
    }
    if (choice==1){
        return "paper";
    }
    if (choice==2){
        return "scissors";
    }
}


function getComputerChoice(){
return rockPaperOrScissors(Math.floor(Math.random() * 3));
}

function playerSelection(){
    let selection= prompt("choose :");
    selection=selection.toLowerCase();
    return selection

}

function round(c,p){
    console.log("Computer choice :"+c);
    console.log("Your choice :"+p);

    if(c==p){
        console.log("draw");
        return;
    }
    if(c=="scissors" && p=="paper"){
    console.log("you lose");
    return;
    }
    if(c=="rock" && p=="scissors"){
    console.log("you lose");
    return;
    }
    if(c=="paper" && p=="rock"){
    console.log("you lose");
    return;
    }
    console.log("you win");
    return;

}



round(getComputerChoice(),playerSelection());