function Game(){
  Game.prototype.DIM_X = 500;
  Game.prototype.DIM_Y = 500;
  Game.prototype.NUM_ASTEROIDS = 69;
  this.asteroids = Game.prototype.addAsteroids();
}

Game.prototype.addAsteroids = function(){
  let roidz = [];
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    roidz.push(new Asteroid({pos: [Math.random(500) * 500, Math.random(500) * 500]}));
  }
  return roidz;
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0,500,500);
  this.asteroids.forEach(function(roid) {
    roid.draw(ctx);
  });
};

module.exports = Game;