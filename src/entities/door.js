Door = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(parent, xpos, ypos){
			var model = this;
			var entity = Crafty.e("2D, door, Grabbable, Canvas, Collision");
			entity
				.attr({x: xpos, y: ypos, z: 1000, w: 85, h: 150})
				.setName("door");
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
