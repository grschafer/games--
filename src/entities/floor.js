Floor = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
			var model = this;
			var entity = Crafty.e("2D, platform, floor, Canvas, Color, Collision");
			entity
				.attr({x: 0, y: (Crafty.viewport.height-20), z: 1000, w: Crafty.viewport.width, h: 100})
				.color("#000000")
				
				.setName('Floor');
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
