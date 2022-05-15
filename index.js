const TicTacToe = require("./class");

//here I'm going to write what I want to see
function main(){
    const game = new TicTacToe()
    const resultArray = game.move(2,1)
    console.log(toString(resultArray))
}

// this function is to show the grid in the correct way
function toString(grid) {
    var resultString = " "
    for(let i=0; i <= grid.length; i++){
        resultString += grid[i].toString(separator = ",") + "\n"
    }
    return resultString
}

main()