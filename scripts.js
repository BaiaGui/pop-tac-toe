//Lógica Modal
let p1Name, p2Name, submitButton, modal, startBtn, body;

let turnMessageP1, turnMessageP2, winMessageContainerP1, winMessageContainerP2, boardPiece;
//To change name
let strongPlayer1Name, strongPlayer2Name, winPlayerName1, winPlayerName2;

let contClick=0;;

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
winMessageContainerP2=document.querySelector("#player2");

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
    boardPiece.forEach(function(item){item.style.cursor="pointer"});
}
function player1Turn(){
    playerTurn= 1;
    body.style.backgroundColor="blue";
    turnMessageP2.style.visibility="hidden";
    turnMessageP1.style.visibility="visible";
    
}
function player2Turn(){
    playerTurn= 2;
    body.style.backgroundColor="red";
    turnMessageP1.style.visibility="hidden";
    turnMessageP2.style.visibility="visible";
    
}

//GAME 


function clickController(item){
    let imgItem;
    contClick++;
    if(playerTurn==1){
        let img = document.createElement("img");
        img.src = "img/O.svg";
        imgItem=boardPiece.id
        item.target.appendChild(img);
        item.target.removeEventListener("click", clickController);
        item.target.style.cursor="auto";
        item.target.classList.add("o");
        if(checkWin("o"))
            showWinnerMessage("o");
        if(checkTie())
            formatTie();
        if(!checkWin("o") && !checkTie())
            player2Turn();
        
    }
    else{
        let img = document.createElement("img");
        img.src = "img/X.svg";
        item.target.appendChild(img);
        item.target.removeEventListener("click", clickController);
        item.target.style.cursor="auto";
        item.target.classList.add("x");
        if(checkWin("x"))
            showWinnerMessage("x");
        if(checkTie())
            formatTie();
        if(!checkWin("x") && !checkTie())
            player1Turn();
    }
}

const COMBINATIONS=[
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];

function checkWin(player){
    let win =COMBINATIONS.some((comb)=>{
        return comb.every((index)=>{
            return boardPiece[index].classList.contains(player);
        })
    });
  
        return win
}

function showWinnerMessage(player){
    if(player=="o"){
        let board=document.querySelector(".board");
        turnMessageP1.style.visibility="hidden";
        board.style.cssText="transform: translate(250px);";
        winMessageContainerP1.style.display="flex";
        removeAllListeners();
    }
    else{
        let board=document.querySelector(".board");
        turnMessageP2.style.visibility="hidden";
        board.style.cssText="transform: translate(-250px);";
        winMessageContainerP2.style.display="flex";
        removeAllListeners();
    }
}

//Remove All event listener from board
function removeAllListeners(){
    boardPiece.forEach(function(item){item.removeEventListener("click", clickController)});
    boardPiece.forEach(function(item){item.style.cursor="auto"});
}

let tieMessage=document.querySelector("#tie");

function checkTie(){
    if(contClick>=9 && !checkWin("o") && !checkWin("x"))
        return true;
    else
        return false;
}

function formatTie(){
    body.style.cssText="bacground-color: gray; transition: 0.5s;";
    turnMessageP1.style.visibility="hidden";
    turnMessageP2.style.visibility="hidden";
    tieMessage.style.cssText="display: block; transition: 0.5s;";
}