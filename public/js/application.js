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

var GameController = function(board, view){
    var that = this;
    this.board = board;
    this.view = view;
    this.win = false;
    this.turnIndicator = board.boardState[0];
     $('form').on('click', this.gameLogic.bind(that));

}

GameController.prototype = {

    resetGame: function(){
        this.board = new Board();
    },

    checkForWin: function(){

        this.checkRowsForWin();
        this.checkColumnsForWin();
        this.checkDiagonalsForWin();

        return this.win;
    },

    checkRowsForWin: function(){
        for (var i = 1; i <= 6; i++) {
            var row = this.board.getRow(i);
            if (row.match(/[1]{4}?[2]{4}?/))
                this.win = true;
        };
    },

    checkColumnsForWin: function(){
        for (var i = 1; i <= 7; i++) {
            var column = this.board.getColumn(i);
            if (column.match(/[1]{4}?[2]{4}?/))
                this.win = true;
        };
    },

    checkDiagonalsForWin: function(){
        for (var i = 1; i <= 12; i++) {
            var diagonal = this.board.getDiagonal(i,"backslash");
            if (diagonal.match(/[1]{4}?[2]{4}?/))
                this.win = true;
        };

        for (var i = 1; i <= 12; i++) {
            var diagonal = this.board.getDiagonal(i, "slash");
            if (diagonal.match(/[1]{4}?[2]{4}?/))
                this.win = true;
        };
    },

    changeTurn: function(){
        this.turnIndicator ^= 1;
        this.board.boardState[0] = this.turnIndicator;
        console.log("Current Turn: ", this.turnIndicator);
        this.view.updateTurnIndicator();
    },

    placeToken: function(column){
        console.log("Column: ", column);
        this.updateBoard(column)
    },

    updateBoard: function(column){
        index = this.board.updateBoard(column);

        this.view.updateDisplay(index);
    },

    turn: function(){
        this.turnIndicator
    },

    gameLogic: function(e){
        e.preventDefault();

        this.placeToken(e.target.id);

        if (this.checkForWin()){
            this.view.winnerAlert();
        }else{
            this.changeTurn();
        }

    }

}

gc = new GameController(new Board(),new View());
