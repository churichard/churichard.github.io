function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  if (value == 2){
	this.icon = ":)";
  }
  if (value == 4){
	this.icon = ":D";
  }
  if (value == 8){
	this.icon = ":3";
  }
  if (value == 16){
	this.icon = ":O";
  }
  if (value == 32){
	this.icon = ":P";
  }
  if (value == 64){
	this.icon = "8D";
  }
  if (value == 128){
	this.icon = "^_^";
  }
  if (value > 128){
	  this.icon = value;
  }

  this.value            = value;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
