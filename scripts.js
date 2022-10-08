//Lógica Modal
let p1Name, p2Name, submitButton, modal, startBtn, body;

let turnMessageP1, turnMessageP2, winMessageContainerP1, winMessageContainerP2;
//To change name
let strongPlayer1Name, strongPlayer2Name, winPlayerName1, winPlayerName2;


function getElements(){

body=document.querySelector("body");

//Modal
submitButton = document.querySelector("#submitButton");
modal = document.querySelector(".darkScreen");
submitButton.addEventListener("click", getName);

//Start
startBtn= document.querySelector(".startBtn");
startBtn.addEventListener("click", starGame);

//Player Especific Elements
turnMessageP1=document.querySelector("#p1");
turnMessageP2=document.querySelector("#p2");

winMessageContainerP1=document.querySelector("#player1");
winMessageContainerP2=document.querySelector("#player1");


}


function getName (){
    p1Name = document.querySelector("#player1Name").value;
    p2Name = document.querySelector("#player2Name").value;
    modal.style.display = "none";
    
    setNames();
}

function setNames(){
    strongPlayer1Name=document.querySelector("#p1 .turnPlayerName");
    strongPlayer2Name=document.querySelector("#p2 .turnPlayerName");
    winPlayerName1=document.querySelector("#player1 .winnerText label");
    winPlayerName2=document.querySelector("#player2 .winnerText label");

    strongPlayer1Name.innerText= p1Name;
    strongPlayer2Name.innerText= p2Name;
    winPlayerName1.innerText=p1Name;
    winPlayerName2.innerText=p2Name;
}

//STARTGAME
let playerTurn=1;
function starGame(){
    playerTurn=Math.floor(Math.random() * 2) + 1;
    console.log(playerTurn);
    if(playerTurn==1)
        player1Turn();
    else
        player2Turn();
        
    startBtn.style.display="none";
}
function player1Turn(){
    body.style.backgroundColor="blue";
    turnMessageP2.style.visibility="hidden"
    turnMessageP1.style.visibility="visible"
    
}
function player2Turn(){
    body.style.backgroundColor="red";
    turnMessageP1.style.visibility="hidden"
    turnMessageP2.style.visibility="visible"
    
}

//GAME 





//pegar célula tabuleiro

//adicionar evento onclick em cada célula

//código evento onclick célula

//