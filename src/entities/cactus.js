Cactus = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
			var model = this;
			var entity = Crafty.e("2D, cactus, Deadly, Canvas, Collision, SpriteAnimation");
			entity
				.attr({x: 200, y: 200, z: 300, w: 39, h: 100})
				.animate("rocket", 0, 0, 1)
				.animate("rocket", 5, -1)
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
