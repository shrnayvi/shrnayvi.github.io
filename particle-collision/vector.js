function Vector(x, y) {
  this.x = x;
  this.y = y;

  this.mult = function(scaleFactor) {
    return new Vector(
      this.x * scaleFactor,
      this.y * scaleFactor,
    )
  }

  this.add = function(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  this.subtract = function(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  this.rotate = function(angle) {
    return new Vector(
      this.x * Math.cos(angle) - this.y * Math.sin(angle),
      this.x * Math.sin(angle) + this.y * Math.cos(angle),
    )
  }

  this.normal = function(vector) {
    var d = distance(vector, this);
    var nx = (vector.x - this.x) / d;
    var ny = (vector.y - this.y) / d;

    return new Vector(nx, ny);
  }

  this.dotProduct = function(vector) {
    return this.x * vector.x + this.y * vector.y;
  }
}
