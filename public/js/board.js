//getRow  input takes argument of range 1..6, which is row #
//        output array of 7 integers either 0, 1(Red), 2(Black)
//getCol  input takes arg of range 1..7
//        output array of 7 integers either 0, 1(Red), 2(Black)
//getDiag input takes arg of range 1..12, and slash and backslash(for direction)
//        output varies, includes array of 1,2,3,4,5,6,6,5,4,3,2,1 integers
//updateBoard
//        input takes arg of range 1..7
//        change value of boardState index to 1 or 2, which is next 'open position'



var Board = function(){
  this.boardState =
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
};

Board.prototype = {

  getRow: function(rowNum){
    var row = [];
    for (var i = 0; i < this.boardState.length; i++) {
      if ((rowNum - 1) == Math.floor( (i - 1)/7 ) )
        row.push(i);
    }
    console.log(row)
    return row
  },
  getColumn: function(colNum){
    var col = [];
    for (var i = 0; i < this.boardState.length; i++) {
      if (colNum  == (i - 1)%7 )
        col.push(i);
    }
    console.log(col)
    return col
  },
  getDiagonal: function(){

  },

  updateBoard: function(){

  },
  reset: function(){
    this.boardState =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }
};
var test = new Board();

