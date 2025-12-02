/*:
@plugindesc Make use of region tiles to apply Directional Passability to tiles.
@author orphalese

@help
DOWN = 2; LEFT = 4; RIGHT = 6; UP = 8
Region 56: Direction blocked: DOWN 
Region 57: Direction blocked: LEFT
Region 58: Direction blocked: RIGHT
Region 59: Direction blocked: UP
Region 60: Direction blocked: DOWN, LEFT
Region 61: Direction blocked: DOWN, RIGHT
Region 62: Direction blocked: DOWN, UP
Region 63: Direction blocked: LEFT, RIGHT
Region 64: Direction blocked: LEFT, UP
Region 65: Direction blocked: RIGHT, UP
Region 66: Direction allowed: UP
Region 67: Direction allowed: RIGHT
Region 68: Direction allowed: LEFT
Region 69: Direction allowed: DOWN
Region 70: All Directions Blocked
*/

//Directional passability based on regions
Game_Map.prototype.isPassableByTile = Game_Map.prototype.isPassable
Game_Map.prototype.isPassable = function(x, y, d) {
    let region = this.regionId(x,y);
    let br = 56;

    if (region==br+15){return false;}
    if ((d==2)&&([br,br+4,br+5,br+6,br+10,br+11,br+12,br+14].includes(region))){ return false;}
    if ((d==4)&&([br+1,br+4,br+7,br+8,br+10,br+11,br+13,br+14].includes(region))){ return false;}
    if ((d==6)&&([br+2,br+5,br+7,br+9,br+10,br+12,br+13,br+14].includes(region))){ return false;}
    if ((d==8)&&([br+3,br+6,br+8,br+9,br+11,br+12,br+13,br+14].includes(region))){ return false;}

   return this.isPassableByTile(x,y,d);
};

