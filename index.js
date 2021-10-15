let firstPlayerName="";
let secondPlayerName="";
let firstPlayerScore=0;
let secondPlayerscore=0;
let totalScore=0;

function onSubmit(event)
{
    event.preventDefault();
    const formData=document.getElementsByTagName("input");
    firstPlayerName=formData[0].value;
    secondPlayerName=formData[1].value;
    totalScore=formData[2].value;
    trophy = document.querySelector(".winner")
    trophy.classList.remove("winner");

    trophy1 = document.querySelector(".winner1")
    trophy1.classList.remove("winner1");


    document.getElementById("form-input-details").style.display="none";
    document.getElementById("board-container").style.display="block";
    document
    .getElementById("player1")
    .getElementsByClassName("heading")[0].innerHTML=firstPlayerName;
    document
    .getElementById("player2")
    .getElementsByClassName("heading")[0].innerHTML=secondPlayerName;

}
function rollDice(playerIndex)
{
    const randomNumber=getRandom();
    const playerNodes=document.getElementById(`player${playerIndex}`);
    playerNodes.querySelector(".dice img").setAttribute("src",`dice${randomNumber}.PNG`);
    switch(playerIndex)
    {
        case 1:
            firstPlayerScore+=randomNumber;
            playerNodes.getElementsByClassName("score")[0].innerHTML=firstPlayerScore;
            playerNodes.getElementsByTagName("input")[0].setAttribute("disabled",true);
            document.getElementById("player2").getElementsByTagName("input")[0].removeAttribute("disabled");
            break;
       case 2:
            secondPlayerscore+=randomNumber;
            playerNodes.getElementsByClassName("score")[0].innerHTML=secondPlayerscore;
            playerNodes.getElementsByTagName("input")[0].setAttribute("disabled",true);
            document.getElementById("player1").getElementsByTagName("input")[0].removeAttribute("disabled");
            break;
      default:
          break;      
    }
    checkIFWinnerExists();
}
function getRandom()
{
    return Math.floor(Math.random()*6)+1;
}
function checkIFWinnerExists(){
    if(firstPlayerScore>=totalScore)
    {
        document.getElementById("player1").innerHTML+=  `<div class="winner"></div>`;
        document.getElementById("player2").getElementsByTagName("input")[0].setAttribute("disabled",true);
    }
    if(secondPlayerscore>=totalScore)
    {
        document.getElementById("player2").innerHTML+=  `<div class="winner"></div>`;
        document.getElementById("player1").getElementsByTagName("input")[0].setAttribute("disabled",true);
    }
}
function reload()
{
    window.location.reload();
}
function resetGame()
{
    if(firstPlayerScore>=totalScore)
    {
        
        document.getElementById("player2").getElementsByTagName("input")[0].removeAttribute("disabled");
    }
    if(secondPlayerscore>=totalScore)
    {
        
        document.getElementById("player1").getElementsByTagName("input")[0].removeAttribute("disabled");
    }

    firstPlayerScore=0;
    secondPlayerscore=0;
    const player1=document.getElementById(`player${1}`);
    player1.querySelector(".dice img").setAttribute("src",`dice${1}.PNG`);
    player1.getElementsByClassName("score")[0].innerHTML=firstPlayerScore;
    const player2=document.getElementById(`player${2}`);
    player2.querySelector(".dice img").setAttribute("src",`dice${1}.PNG`);
    player2.getElementsByClassName("score")[0].innerHTML=firstPlayerScore;
    
    winner1=document.querySelector(".winner");
    winner1.classList.remove("winner");

    winner2=document.querySelector(".winner1");
    winner2.classList.remove("winner1");
    
    
}