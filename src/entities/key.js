Key = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(parent, xpos, ypos, name){
			var model = this;
			var entity = Crafty.e("2D, " + name + ", Grabbable, Canvas, Collision, Gravity");
			entity
				.attr({x: xpos, y: ypos, z: 1000, w: 64, h: 64})
				.gravity("platform")
				.setName(name);
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
