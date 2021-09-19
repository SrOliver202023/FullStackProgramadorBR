document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=> {
        square.addEventListener("click", handleClick);
    })
    const btnReset = document.querySelector("#iReset");
    btnReset.addEventListener("click",()=>{
        resetGame(squares);
    });
});
function handleClick(event){
    let theMove = handleMove(event.target.id);
    updateSquares();   
    // theMove[0] == true? popUp(theMove[1]): null;
    theMove[0] == true? modalFinish(): null;
}
function updateSquares(){
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        board[square.id] != '' ? square.innerHTML = `<div class="${board[square.id]}"></div>`: null;
    });
}
function popUp(namePlayer){
    setTimeout(()=>{
        window.alert(`Hello ${namePlayer}`);
    },10);
}
function modalFinish(){
    document.querySelector(".modal").classList.add("active");
}
function resetGame(getSquares){
    getSquares.forEach((getSquare) => {
        if(getSquare.childElementCount >= 1){
            console.log(getSquare);
            getSquare.removeChild(getSquare.childNodes[0]);  
        }
    });
    resetPresets();
    document.querySelector(".modal").classList.remove("active");
}