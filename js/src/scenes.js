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
                Crafty.scene('Game'); //go to main scene
              },
              function(e) { // on progress
                Crafty.trigger("LOADING_PROGRESS", e.percent);
              },
              function(e) { // on error
                console.log("error");
              }
             );
});

Crafty.scene('Game', function() {
  Crafty.e("2D, Canvas, TiledMapBuilder").setMapDataSource( SOURCE_FROM_TILED_MAP_EDITOR )
    .createWorld( function( map ){
      for (var obstacle = 0; obstacle < map.getEntitiesInLayer('Walls').length; obstacle++){
        map.getEntitiesInLayer('Walls')[obstacle]
          .addComponent("Collision, Solid")
          .collision( new Crafty.polygon([0,0],[20,0],[20,20]) );
      };
    })
    .attr({z: 0});

  Crafty.e('Player').at(14, 24).attr({z: 1000});
});
