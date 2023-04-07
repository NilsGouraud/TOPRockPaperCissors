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



function endOfGame(c,p){
    return(c+" beats "+p);
}



//c stands for computer selection, p stands for player selection
function round(c,p){
    affichage.textContent+=("Computer choice :"+c+"\n");
    affichage.textContent+=("Your choice :"+p+"\n");

    loss="you lose: " + endOfGame(c,p)+"\n";
    win="you win: " + endOfGame(p,c)+"\n";

    if(c==p){
        affichage.textContent+=("draw\n");
        return;
    }
    if(c=="scissors" && p=="paper"){
    affichage.textContent+=(loss);
    computerScore++;
    return;
    }
    if(c=="rock" && p=="scissors"){
    affichage.textContent+=(loss);
    computerScore++;
    return;
    }
    if(c=="paper" && p=="rock"){
    affichage.textContent+=(loss);
    computerScore++;
    return;
    }
    //if the loss or draw conditions aren't met, then the player wins
    affichage.textContent+=(win);
    playerScore++;
    return;
}
 

i=0;
computerScore=0;
playerScore=0;

const affichage=document.querySelector("div");
affichage.Color="red";
affichage.textContent="Pick one";
affichage.style.border="solid 1px black";



const buttons=document.querySelectorAll("button");
buttons.forEach(button=>
button.addEventListener("click",function displayClicked(){
    affichage.textContent=("round "+(i+1)+"\n");

    function playerSelection(){
        selection= button.textContent;
        return selection;
    
    }
    
    
    round(getComputerChoice(),playerSelection());

    affichage.textContent+=("computer score :"+computerScore+"\n");
    affichage.textContent+=("your score :"+playerScore+"\n");
    i+=1;
    if(computerScore>4||playerScore>4){
        affichage.textContent+=("GAME OVER\n");
        if(computerScore>4){
            affichage.textContent+="The computer won\n";
        }
        else{
            affichage.textContent+="You won\n";
        }
        affichage.textContent+=("pick an option to play again");
        i=0;
        playerScore=0;
        computerScore=0;
    }




}));

//buttons.forEach(button=>
    //button.addEventListener("click",round(getComputerChoice(),playerSelection()))

    //);



//game();
