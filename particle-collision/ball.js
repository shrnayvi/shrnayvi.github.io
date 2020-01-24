function Particle(x, y, radius) {
  this.position = new Vector(x, y);
  this.radius = radius; 

  this.fillColor = FILL_COLORS[Math.floor(random(0, FILL_COLORS.length))];
  this.strokeColor = STROKE_COLORS[Math.floor(random(0, STROKE_COLORS.length))];

  this.addMass = function(mass) {
    this.mass = mass;
  }
  
  this.velocity = new Vector(
    random(-1, 1),
    random(-1, 1),
  );

  this.addVelocity = function(x, y) {
    this.velocity = new Vector(x, y);
  } 

  this.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, radius, 0, TWO_PI, false);
    ctx.fillStyle = this.fillColor;
    ctx.fill();
    ctx.strokeStyle = this.strokeColor;
    ctx.stroke();
  }

  this.update = function() {
    if(this.position.x + radius >= WINDOW_WIDTH || this.position.x <= radius) {
      this.velocity.x = -this.velocity.x;
    }

    if(this.position.y + radius >= WINDOW_HEIGHT || this.position.y <= radius) {
      this.velocity.y = -this.velocity.y;
    }
    this.position = this.position.add(this.velocity);
  }

  this.checkCollision = function(particle) {
    if(this.collides(particle)) {

      var d = distance(this.position, particle.position);
      var overlap = (d - this.radius - particle.radius) * 0.5;

      this.position.x -= overlap * (this.position.x - particle.position.x) / d;
      this.position.y -= overlap * (this.position.y - particle.position.y) / d;

      particle.position.x += overlap * (this.position.x - particle.position.x) / d;
      particle.position.y += overlap * (this.position.y - particle.position.y) / d;

      var theta = Math.atan2(particle.position.y - this.position.y, particle.position.x - this.position.x);
      
      var u1 = this.velocity.rotate(-theta);
      var u2 = particle.velocity.rotate(-theta);


      var dm = this.mass - particle.mass;
      var massSum = this.mass + particle.mass;
      v1x = ((dm * u1.x) + (2 * particle.mass * u2.x)) / massSum;
      v2x = ((-dm * u2.x) + (2 * this.mass * u1.x)) / massSum;

      var v1 = new Vector(v1x, u1.y);
      var v2 = new Vector(v2x, u2.y);


      vFinal1 = v1.rotate(theta);
      vFinal2 = v2.rotate(theta);

      this.velocity = vFinal1;
      particle.velocity = vFinal2;
    }
  }

  this.collides = function(particle) {
    var dSq = distanceSq(this.position, particle.position);
    return (dSq <= (this.radius + particle.radius) * (this.radius + particle.radius)); 
  }

}
