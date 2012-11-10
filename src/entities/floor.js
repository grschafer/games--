Floor = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
			var model = this;
			var entity = Crafty.e("2D, platform, floor, Canvas, Color, Collision");
			entity
				.attr({x: 0, y: (Crafty.viewport.height-entity.h), z: 0, w: Crafty.viewport.width, h: 100})
				.color("#FF00AA")
				.setName('floor');
				
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
