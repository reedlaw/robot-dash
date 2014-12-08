Game = {
  assets: {
    "sprites": {
      "images/sprites.png": {
        "tile": 16,
        "tileh": 16,
        "map": { "wall_tl": [0,0],
                 "wall_bl": [0,1],
                 "wall_bottom": [1,1],
                 "wall_br": [2,1],
                 "wall_top": [1,0],
                 "wall_left": [0,2],
                 "wall_right": [1,2],
                 "empty": [2,2],
                 "wall_tr": [2,0],
                 "wall_tl_inner": [3,0],
                 "wall_tr_inner": [4,0],
                 "wall_bl_inner": [3,1],
                 "wall_br_inner": [4,1],
                 "spr_player": [5,0]
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
