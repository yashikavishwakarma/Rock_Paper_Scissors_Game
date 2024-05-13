let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    // rock,paper,scissors
    // Math.random()--generate random numbers from 0to1 
    // to generate random numbers from 0 to 2 multiply 3(math.random()*3);
    // to get num before decimal use math.floor();
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawGame=()=>{
    console.log("The game is Draw.");
    msg.innerText="Draw :| Play Again";
    msg.style.backgroundColor="#330941";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin) {
        console.log("You Win :)");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("You Lose :(");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    // Generate Computer Choice-->modular way of programing(har kaam ke liye ek function (chote chote function))
    const compChoice=genCompChoice();
    console.log("comp choice= ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    } 
    else {
        let userWin=true;
        if(userChoice==="rock"){
            // scissors,paper
            userWin = compChoice ==="paper"?false:true
        } else if(userChoice==="paper"){
            // rock,scissors
            userWin=compChoice==="scissors"?false:true
        } else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

