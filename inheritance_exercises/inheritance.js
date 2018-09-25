Function.prototype.inherits = function(superClass) {
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this; 
};

function MovingObject(speed) {
  this.speed = speed;
}

MovingObject.prototype.timeDiliation = function() {
  if (this.speed > 3) {
    return true; 
  } else {
    return false;
  }
};

function Ship () {
  MovingObject.call(this, 5);
}
Ship.inherits(MovingObject);
ship = new Ship();

function Asteroid () {
  MovingObject.call(this, 7);
  function destroy() {
    console.log('destroyed');
  }
}
Asteroid.inherits(MovingObject);
asteroid = new Asteroid();