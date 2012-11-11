Ufo = BaseEntity.extend({
	defaults: {
        'speed' : 2,
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Keyboard, player, SpriteAnimation, Mouse, Collision, MouseHover, CustomTwoway, Gravity");
		entity
			.attr({x: ((Crafty.viewport.width/2) - (entity.w/2)), y: 0, z: 300})
			.collision(new Crafty.polygon([21,63],[40,55],[59,52],[71,52],[74,39],[83,24],[102,13],[117,13],[119,13],[136,24],[147,37],[151,51],[174,54],[190,58],[195,62],[200,68],[196,78],[180,85],[148,91],[102,92],[70,91],[46,86],[24,80],[17,68],[18,64]))
			.onHit('Deadly', function() {
				Crafty.scene("main");
			})
			.bind('EnterFrame', function(e){

			})
			.bind('Click', function(){
				
			})
			.twoway(3, 10, {LEFT_ARROW:180, RIGHT_ARROW:0})
			.gravity('platform')
			//.bind('KeyDown', function(e) {
			//	if(e.key == Crafty.keys['SPACE']) {
			//		console.log("hey");
			//		this.x=this.x-1;
			//	} else if (this.isDown('SPACE')) {
			//		console.log("asdhd");
			//		this.x=this.x-1;
			//	}
			//})
			//change direction when a direction change event is received
			.bind("NewDirection",
				function (direction) {
					if (direction.x < 0) {
						if (!this.isPlaying("walk_left"))
							this.stop().animate("walk_left", 10, -1);
					}
					if (direction.x > 0) {
						if (!this.isPlaying("walk_right"))
							this.stop().animate("walk_right", 10, -1);
					}
					if(!direction.x && !direction.y) {
						this.stop();
					}
			})
			.animate("walk_right", 0, 0, 2)
			.animate("walk_left", 0, 1, 2)
			.animate("jumping", 0, 2, 0)
			//.animate("falling", 0, 3, 1)
			.setName('Ufo');

			entity.origin(entity.w/2, entity.h/2);

		model.set({'entity' : entity });
	}
});
