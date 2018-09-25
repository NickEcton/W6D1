const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Game = require("./game.js");
window.Game = Game;
window.MovingObject = MovingObject;
window.ctx = document.getElementById("game-canvas").getContext("2d");

console.log("Webpack is working!");
console.log("test!");

function Asteroid(options) {
  Asteroid.prototype.COLOR = 'pink';
  Asteroid.prototype.RADIUS = 69; 
  MovingObject.call(this, {pos: options.pos, color: this.COLOR, radius: this.RADIUS, vel: Util.randomVec(this.RADIUS)});
  // const mo = new MovingObject({color: this.COLOR, radius: this.RADIUS, vel: Util.randomVec(this.RADIUS)});
}
// Asteroid.prototype.COLOR = 'pink';
// Asteroid.prototype.RADIUS = 69; 

Util.inherits(Asteroid, MovingObject);
window.Asteroid = Asteroid;

