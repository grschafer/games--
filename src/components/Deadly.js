//Asteroid component
Crafty.c("Deadly", {   
	init: function(startX, startY) {

		this.origin("center");
		this.attr({
			x: startX,
			y: startY
		}).bind("EnterFrame", function() {
		})
		//.collision()
		//.onHit("bullet", function(e) {
			/*//if hit by a bullet increment the score
			player.score += 5;
			score.text("Score: "+player.score);
			e[0].obj.destroy(); //destroy the bullet

			var size;
			//decide what size to make the asteroid
			if(this.has("big")) {
				this.removeComponent("big").addComponent("medium");
				size = "medium";
			} else if(this.has("medium")) {
				this.removeComponent("medium").addComponent("small");
				size = "small";
			} else if(this.has("small")) { //if the lowest size, delete self
				asteroidCount--;
				this.destroy();
				return;
			}

			var oldxspeed = this.xspeed;
			this.xspeed = -this.yspeed;
			this.yspeed = oldxspeed;

			asteroidCount++;
			//split into two asteroids by creating another asteroid
			Crafty.e("2D, DOM, "+size+", Collision, asteroid").attr({x: this._x, y: this._y});
			*/
		//});

	}
});
