Boulder = BaseEntity.extend({
	defaults: {

    },
    initialize: function(){

		var model = this;
		var entity = Crafty.e("2D, Canvas, Color, Box2D, Gravity");
		
		entity
			 .attr({ x: 80, y: 0, w:50, h:10})
			 .color("#FF0000")
			 .gravity("platform")
			 .box2d({
					bodyType: 'dynamic'
			 });

    	model.set({'entity' : entity });
    }
});
