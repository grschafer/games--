Box = BaseEntity.extend({
	defaults: {

    },
    initialize: function(){

		var model = this;
		var entity = Crafty.e("2D, Canvas, Color, Box2D");
		
		entity
			 .attr({ x: 0, y: 0, w:20, h:20})
			 .color("#FF0000")
			 .box2d({
					bodyType: 'dynamic'
			 });

    	model.set({'entity' : entity });
    }
});
