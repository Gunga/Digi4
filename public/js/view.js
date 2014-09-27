// updateDisplay    input is boardState, which is array of 43 numbers, called by Controller
                    // NOTE!!!!!!!!!!!!! IGNORE THE FIRST ITEM IN ARRAY, WHICH IS TURNINDICATOR
//                  output is color settings for each <li>

//updateTurnIndicator   uses boardState to update display Turn based on boardState[0]

var View = function(){
  this.player = 0;
}

View.prototype = {
  updateDisplay: function(updateCell) {
    originalValue = updateCell
      if (originalValue > 7) updateCell += 4;
      if (originalValue > 14) updateCell += 4;
      if (originalValue > 21) updateCell += 4;
      if (originalValue > 28) updateCell += 4;
      if (originalValue > 35) updateCell += 4;

      changePlayer = this.player + 1;
        $('.cfour-board li:nth-child(' + updateCell +')').attr('class', 'player-' + changePlayer);
  },
  updateTurnIndicator: function() {
    this.player ^= 1
      changePlayer = this.player + 1;
        $('.your-turn').attr('class', 'your-turn player-'+ changePlayer);
  },

  gameOver: function() {
    $('.winner').css ('display', 'block');
  }
};
$('.winner').on("click", refresh)

function refresh(){
  location.reload();
}
