console.log("hello world")

//Thing we need to do 
// get computer choice 
//create a function that return random values among these 3 rock paper sisser
//get human choice 
//take both in a function as values return who is the winner 
function ComputerChoice(){
   random= Math.floor(Math.random()* 3) +1;
   
   if (random ==1) {
     result= "sisser";
   }
    else if (random==2 ){
         result="paper";
    }
    else {
        result = "rock";
    }
    return result;


}

function Game4(PlayerSelection,ComputerChoice){
    if (PlayerSelection==ComputerChoice){

    }
    else if(PlayerSelection == 'rock' && ComputerChoice=='sisser' || PlayerSelection == 'sisser' && ComputerChoice == 'paper' || PlayerSelection == 'paper' && ComputerChoice == 'rock') {
        return "user"
    } 
    else {
    return 'computer'
}
}
function Repeat(){
    player=0;
    computer=0;
    for (let round=1; round<=5; round++){
        let PlayerSelection = prompt("rock,paper,sisser").toLowerCase();
        let ComputerSelection = ComputerChoice();
        let result=Game4(PlayerSelection,ComputerSelection);
        if (result==='user'){
            player++;
            console.log("player wins");
        }
        else{
            computer++;
            console.log('computer wins');
        }

    }
    if(player>computer){
        console.log(`You have won${player} rounds`);

    }
    else {
        console.log(`computer has won ${computer} rounds`);
    }
    
}
Repeat();