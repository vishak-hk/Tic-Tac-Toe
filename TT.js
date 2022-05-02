let cells = document.querySelectorAll(".cell");

cells = Array.from(cells);

let xTurn = true

let combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let currentPlayed;
function handleClick(event) {
    let cell = event.target;
    if(xTurn==true) {
        cell.classList.add('X')
        currentPlayed = 'X'
    }
    else {
        cell.classList.add('O')
        currentPlayed = 'O' 
    }
        if (checkWin()==true) {
            console.log(currentPlayed,"Wins!");
            document.getElementById("text").innerHTML = `${xTurn ? "X" : "O"} Wins!`
        }
        else if(checkDraw()==true) {
            console.log("Draw!");
            document.getElementById("text").innerHTML = "Draw!"
        }
    else {
    xTurn = !xTurn
    }
}


for(let i=0;i<cells.length;i++) {
    cells[i].addEventListener('click',handleClick,{once:true})
}

function checkWin() {
    let result = combinations.some(function(combination) {
        return combination.every(function(index) {
            return cells[index].classList.contains(currentPlayed);
        })
    })
    return result
}

function checkDraw() {
    let result = cells.every(function(cell) {
        if((cell.classList.contains('X')) || (cell.classList.contains('O'))) {
            return true
        }
    })
    return result
}