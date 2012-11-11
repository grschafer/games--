Platform = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(parent, xpos, ypos, width, height){
			var model = this;
			var entity = Crafty.e("2D, platform, floor, Canvas, Color, Collision");
			entity
				.attr({x: xpos, y: ypos, z: 1000, w: width, h: height})
				.color("#FFFFFF")
				.setName('Platform');
			entity.origin(entity.w/2, entity.h/2);
			model.set({'entity' : entity});
    },
    getEntity : function(){
        return this.get('entity');
    },
    remove : function(){
        var entity = this.getEntity();

        if (entity){
            entity.destroy();
        }
    }
});
