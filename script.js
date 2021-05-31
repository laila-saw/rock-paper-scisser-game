var userScore=0, compScore=0;
const userScore_spam=document.getElementById("user-score"),compScore_spam=document.getElementById("computer-score");
// const scoreBoarde_div=document.querySelector(".score-boarde");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
//

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

     
 function convert(lettre){
     if(lettre=="r") return "Rock";
     if(lettre=="s") return "scissor";
    else return "Paper";
 }
// console.log(getComputerChoice());
 function game(userChoise){
     const smallUser="user".fontsize(3).sub();
     const smallComp="comp".fontsize(3).sub();
     var i=0,j=0;

const computerChoice=getComputerChoice();
if((userChoise=="r" && computerChoice=="p")||(userChoise=="s" && computerChoice=="r")||(userChoise=="p" && computerChoice=="s")){
i++;
j=0;        // console.log("you lose");
        this.compScore++;
        result_div.innerHTML=convert(userChoise)+" "+smallUser+" loses to "+convert(computerChoice)+""+smallComp+" . you lose 😜😎";
        userScore_spam.innerHTML=this.userScore;
        compScore_spam.innerHTML=this.compScore;

     }
     else if (userChoise==computerChoice){
    
    //  console.log("ta3adol");
    
     
    userScore_spam.innerHTML=this.userScore;
    compScore_spam.innerHTML=this.compScore;
    result_div.innerHTML=convert(userChoise)+" "+smallUser+" equals "+convert(computerChoice)+""+smallComp+" . it's a draw 😒";
}
    else {
        // console.log("you win");
      i=0;
      j++;
        this.userScore++;
        userScore_spam.innerHTML=this.userScore;
        compScore_spam.innerHTML=this.compScore; 
         result_div.innerHTML=convert(userChoise)+""+smallUser+" wins to "+convert(computerChoice)+" "+smallComp+". you win 🎉🥳";
    }
   if(i===2){
       this.userScore=0;
       userScore_spam.innerHTML=this.userScore;
        compScore_spam.innerHTML=this.compScore; 
   }
   else if(j===2){
       this.compScore=0;
       userScore_spam.innerHTML=this.userScore;
        compScore_spam.innerHTML=this.compScore; 
   }


 }
 
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
