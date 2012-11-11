Key = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(){
			var model = this;
			var entity = Crafty.e("2D, key, Canvas, Collision, Gravity");
			entity
				.attr({x: 0, y: 0, z: 1000, w: 64, h: 64})
				.gravity("platform")
				.setName('Key');
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
