// resetGame  takes button click as input
//            calls resetGamestate (Board.boardstate = [0...])
//            call updateDisplay
//            output boardState is set to all zeroes

// turnIndicator is var that is boardState [0]

// win?       input is none -- but is called by Gamecontroller objectd
//            calls get rol/col/diag for each appropriate num
//            searches for four in a row
//            if win, calls:
               // winnerAlert
               // resetGame

// game logic input is onClick
                // placeToken -- modifies boardState
                // updateDisplay -- sends view instructions
                // updateTurnIndicator -- sends view instructions
                // win?
                // changeTurn

//changeTurn  input none, called by controller (logic)
                // changes boardState[0] from 0 to 1 or 1 to 0


//placeToken    input is button click value
//              will pass range 1..7 to updateBoard from buttonClick

//updateBoard
//        input takes arg of range 1..7
//        change value of boardState index to 1 or 2, which is next 'open position'

//turn?         // almost deprecated
                // checks value of boardState[0] -- only useful for AI

var GameController = function(){




}
// if ("0011101".match(/111/)){ console.log(true) };
