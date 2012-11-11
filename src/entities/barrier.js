Barrier = BaseEntity.extend({
	defaults: {

    },
    initialize: function(){

		var model = this;
		var entity = Crafty.e("2D, Canvas, Color, Box2D, Gravity");
		
		entity
			 .attr({ x: 360, y: 400, w:10, h:10})
			 .color("#FF0000")
			 .gravity("platform")
			 .box2d({
					bodyType: 'static'
			 });

    	model.set({'entity' : entity });
    }
});
