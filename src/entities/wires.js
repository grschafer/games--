Wires = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
			var model = this;
			var entity = Crafty.e("2D, wires, Deadly, Canvas, Collision, Gravity, SpriteAnimation");
			entity
				.attr({x: 500, y: 0, z: 300, w: 70, h: 37})
				.gravity("platform")
				.animate("sparks", 0, 0, 2)
				.animate("sparks", 10, -1)
				.setName('Cactus');
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
