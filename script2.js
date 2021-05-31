var userScore=0, compScore=0;
const userScore_spam=document.getElementById("user-score"),compScore_spam=document.getElementById("computer-score");
const scoreBoarde_div=document.querySelector(".score-boarde");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");


/* 
clquier sur un choix 
comp aussi faire un choix
if ((choix-user=rock and choix-comp=paper)or(choix-user=paper and choix-computer=scissor)(choix-user=scissor and choix-computer=rock))
{afficher(you lose);
compscore++;}
esle{
afficher( you win);
userScore++;
}

*/
function getComputerChoice(){
    const choices=['r','p','s'];
    const choice=Math.floor(Math.random()*3);
    return choices[choice];
}

     
 function lose(){
     compScore++;
     console.log()
 }
// console.log(getComputerChoice());
 function game(userChoise){
const computerChoice=getComputerChoice();
switch(userChoise+computerChoice){
    case "rp" :
    case "sr" :
    case "ps" :   
    lose();
    break;
    case "pr" :
    case "rs" :
    case "sp" :   
    win(); 
    break;
    default :
    drow(); 
    break;

 }}
 
function main(){
rock_div.addEventListener('click',function(){
   game("r");
   
})
paper_div.addEventListener('click',function(){
game("p");

})
scissor_div.addEventListener('click',function(){
    game("s");
    
})

}
main();