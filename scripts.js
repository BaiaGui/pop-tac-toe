//Lógica Modal
let p1Name, p2Name, submitButton, modal, startBtn, body;

let turnMessageP1, turnMessageP2, winMessageContainerP1, winMessageContainerP2, boardPiece;
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

boardPiece=document.querySelectorAll(".imgBoard");
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
    boardPiece.forEach(function(item){item.addEventListener("click", clickController)});
    console.log(boardPiece);
    boardPiece.forEach(function(item){item.style.cursor="pointer"});
}
function player1Turn(){
    playerTurn= 1;
    body.style.backgroundColor="blue";
    turnMessageP2.style.visibility="hidden"
    turnMessageP1.style.visibility="visible"
    
}
function player2Turn(){
    playerTurn= 2;
    body.style.backgroundColor="red";
    turnMessageP1.style.visibility="hidden"
    turnMessageP2.style.visibility="visible"
    
}

//GAME 


function clickController(item){
    let imgItem;
    if(playerTurn==1){

        let img = document.createElement("img");
        img.src = "img/O.svg";
        imgItem=boardPiece.id
        item.target.appendChild(img);
        item.target.removeEventListener("click", clickController);
        item.target.style.cursor="auto";
        player2Turn();
    }
    else{
        let img = document.createElement("img");
        img.src = "img/X.svg";
        item.target.appendChild(img);
        item.target.removeEventListener("click", clickController);
        item.target.style.cursor="auto";
        player1Turn();
    }
}




//pegar célula tabuleiro

//adicionar evento onclick em cada célula

//código evento onclick célula

//