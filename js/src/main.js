Game = {
  assets: {
    "sprites": {
      "images/robot-dash.png": {
        "tile": 20,
        "tileh": 20,
        "map": { 
                 "spr_player": [1,0]
               },
        "paddingX": 0,
        "paddingY": 0,
        "paddingAroundBorder": 0
      }
    },
  },

  map_grid: {
    width: 29,
    height: 32,
    tile: {
      width: 20,
      height: 20
    }
  },

  height: function() {
    return this.map_grid.height * this.map_grid.tile.height;
  },

  width: function() {
    return this.map_grid.width * this.map_grid.tile.width;
  },

  start: function() {
    Crafty.init(Game.width(), Game.height(), document.getElementById('game'));
    Crafty.background('grey');

    Crafty.scene('Loading');
  }
}

Game.start();
