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
// ===================================================================
//  TEST ARRAY 'FOO' - WILL CREATE 43 ELEMENT ARRAY WITH INTEGERS 0-42
// ===================================================================
  // var foo = [];
  // for (var i = 0; i <= 42; i++) {
  //    foo.push(i);
  // }
  // this.boardState = foo
// ===================================================================
//                 REMOVE TEST ARRAY FOR PRODUCTION !!!
// ===================================================================
};

Board.prototype = {

  getRow: function(rowNum){
    var row = [];
    for (var i = 0; i < this.boardState.length; i++) {
      if ((rowNum - 1) == Math.floor( (i - 1)/7 ) )
        row.push(this.boardState[i]);
    }
    return row.join("")
  },
  getColumn: function(colNum){
    var col = [];
    for (var i = 0; i < this.boardState.length; i++) {
      if (colNum - 1 == (i - 1)%7 )
        col.push(this.boardState[i]);
    }
    return col.join("")
  },
  // getDiagonal should take in num and 'slash/backslash'
  // returns strying of values for diag
  getDiagonal: function(diagNum, direction){
    var diagonal = [];
    var n = 7; // set n to row.length for nxn board

    if (direction == "slash"){
      for (var i = 1, d = diagNum; d > 0; i++){
        var index = ((d-1) * n) + i
        diagonal.push(this.boardState[index]);
        d = d - 1;
      }
      console.log(diagonal)
      return diagonal.join("")
    }
    if (direction == "backslash"){
      for (var i = 1, d = diagNum; d >= 1; i++){
        var index = ((d-1) * n) + (Math.abs(i - 8))
        diagonal.push(this.boardState[index]);
        d = d - 1;
      }
      console.log(diagonal)
      return diagonal.join("")
    }
  },
  // returns indicies of column
  updateBoardHelper: function(colNum){
    var col = [];
    for (var i = 0; i < this.boardState.length; i++) {
      if (colNum - 1 == (i - 1)%7 )
        col.push(i);
    }
    return col
  },

  // GOTCHA! Check Boardstate dependency of boardState[0] on changing i to 1 or 2
  updateBoard: function(colNum){
    var columnPositions = this.updateBoardHelper(colNum); // array [i, i...]
    var columnValues = this.getColumn(colNum);            // string "val1val2"
    var emptyCell = columnValues.lastIndexOf("0");        //will return 0-5

    if (columnValues.indexOf("0") == -1) {
      return 43
    }
    else {
      if (this.boardState[0] == 0){
        this.boardState[columnPositions[emptyCell]] = 1;
      }
      if (this.boardState[0] == 1){
        this.boardState[columnPositions[emptyCell]] = 2;
    return columnPositions[emptyCell]
    }
  }

  },
  reset: function(){
    this.boardState =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }
};
var test = new Board();

