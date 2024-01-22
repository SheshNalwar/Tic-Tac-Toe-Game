let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let winMsg = document.querySelector(".msg");

let turnO = true; // PlayerX, PlayerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true){
            box.innerHTML = "O";
            turnO = false;
        }else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const resetGame = () => {
    turnO = true;
    enableBoxes();
    winMsg.classList.add("hide");
}

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) => {
    winMsg.innerHTML = `Congratulations! Winner is ${winner}`;
    winMsg.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){

        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if ( pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);