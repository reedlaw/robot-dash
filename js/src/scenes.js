Crafty.scene('Loading', function () {
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
                console.log("loaded");
                Crafty.scene('Game'); //go to main scene
              },
              function(e) { // on progress
                console.log("progress");
                Crafty.trigger("LOADING_PROGRESS", e.percent);
              },
              function(e) { // on error
                console.log("error");
              }
             );
});

Crafty.scene('Game', function() {
  console.log('in game');
  this.player = Crafty.e('Player').at(5, 5);
});
