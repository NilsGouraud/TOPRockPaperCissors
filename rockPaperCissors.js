
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
    let selection="";
    while(selection!="rock"&&selection!="paper"&&selection!="scissors"){
    selection= prompt("choose :");
    // selection shall be case insensitive
    selection=selection.toLowerCase();
    }
    return selection;

}

function endOfGame(c,p){
    return(c+" beats "+p);
}



//c stands for computer selection, p stands for player selection
function round(c,p){
    console.log("Computer choice :"+c);
    console.log("Your choice :"+p);

    loss="you lose: " + endOfGame(c,p);
    win="you win: " + endOfGame(p,c);

    if(c==p){
        console.log("draw");
        return;
    }
    if(c=="scissors" && p=="paper"){
    console.log(loss);
    return;
    }
    if(c=="rock" && p=="scissors"){
    console.log(loss);
    return;
    }
    if(c=="paper" && p=="rock"){
    console.log(loss);
    return;
    }
    //if the loss or draw conditions aren't met, then the player wins
    console.log(win);
    return;
}

function game(){
    for(i=0;i<5;i++){
        console.log("round "+(i+1));
        round(getComputerChoice(),playerSelection());
        console.log("");
    }
}

game();
