Crafty.scene("Loading", function () {
  Crafty.e("2D, DOM, Text")
    .attr({ w: 100, h: 20, x: Game.width()/2 - 50, y: Game.height()/2 - 30 })
    .text("Loading...")
    .css({ "text-align": "center" });

  Crafty.e("2D, DOM, ProgressBar")
    .attr({ w: 100, h: 25, x: Game.width()/2 - 50, y: Game.height()/2 - 10, z: 100 })
  // progressBar(Number maxValue, Boolean flipDirection, String emptyColor, String filledColor)
    .progressBar(100, false, "blue", "green")
    .bind("LOADING_PROGRESS", function(percent) {
      // updateBarProgress(Number currentValue)
      this.updateBarProgress(percent);
    });


  Crafty.load(Game.assets,
              function() { // when loaded
                Crafty.scene('Game'); //go to main scene
              },
              function(e) { // on progress
                Crafty.trigger("LOADING_PROGRESS", e.percent);
              },
              function(e) { // on error
              }
             );
});

Crafty.scene('Game', function() {
  var eater = Crafty.e('2D, DOM, eater, Fourway').fourway(4);
  var ghosty = Crafty.e('2D, DOM, ghosty');
  var ghostier = Crafty.e('2D, DOM, ghostier');
  this.player = Crafty.e('Player').at(5, 5);
});


