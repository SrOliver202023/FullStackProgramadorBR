// iniciar minha variáveis
let board = ['','','','','','','','',''];
let playerStatus = 0;
let gameOver = false;
let getStatus;

let symbols = ['o', 'x'];
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
function handleMove(position){
    if(gameOver)return;
    board[position] == ""? insertSimbol(position): null;
    return [gameOver, getStatus];
}
function insertSimbol(position){
    board[position] = symbols[playerStatus];
    isWin();

    playerStatus == 0 ? playerStatus = 1 : playerStatus = 0;
}
function isWin(){
    for(let i =0; i < winStates.length; i++){
        let sequences = winStates[i];

        let positionOne = sequences[0];
        let positionTwo = sequences[1];
        let positionThree = sequences[2];

        if(board[positionOne] == board[positionTwo] &&
            board[positionOne] == board[positionThree] &&
            board[positionOne] != ''){
                    gameOver = true;
                    getStatus = `${board[positionOne]}`;
        }
    }
}
function resetPresets(){
    board = ['','','','','','','','',''];
    playerStatus = 0;
    gameOver = false;
    getStatus = null;
}