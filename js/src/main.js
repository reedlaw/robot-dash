Game = {
  assets: {
    "sprites": {
      "images/characters.png": {
        "tile": 100,
        "tileh": 100,
        "map": { "spr_player": [0,0], "ghosty": [1,0], "ghostier": [2,0] },
        "paddingX": 0,
        "paddingY": 0,
        "paddingAroundBorder": 0
      }
    },    
  },

  map_grid: {
    width: 24,
    height: 16,
    tile: {
      width: 24,
      height: 24
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
