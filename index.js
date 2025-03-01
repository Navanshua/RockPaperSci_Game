const btn = document.querySelectorAll(".options");
let you,x = 1;
const comp=["rock","paper","scissor"];
let scorecomp = 0,scoreyou = 0;
const mess= document.querySelector(".message");
const scorenoC= document.querySelector(".scoreC");
const scorenoY= document.querySelector(".scoreY");
const reset = document.querySelector("button");
mess.classList.add("hide");
reset.addEventListener("click",() =>
{
    window.location.reload();
});
btn.forEach((options) =>{
    options.addEventListener("click",()=>{
    you = options.getAttribute("id");
    console.log(you);  
    computerTurn();
    checkWinner();
});
});
const computerTurn = () =>{
    x = Math.floor(Math.random()*3);
}
const checkWinner = () =>{
    if(comp[x] == you){
        console.log(comp[x]);
        mess.classList.remove("hide");
        mess.innerText = "It's a draw";
    }
    else if((comp[x] == 'rock' && you == 'paper') || (comp[x] == 'paper' && you == 'scissor') || (comp[x] == 'scissor' && you == 'rock')){
        console.log(comp[x]);
        mess.classList.remove("hide");
        mess.innerText = "You Won";
        scoreyou++;
        scorenoY.innerText = scoreyou;
        // console.log(scoreyou);
    }
    else{
        mess.classList.remove("hide");
        console.log(comp[x]);
        mess.innerText ="You lost";
        scorecomp++;
        scorenoC.innerText = scorecomp;
        console.log(scorecomp);
    }
}