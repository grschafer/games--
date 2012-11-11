Platform = BaseEntity.extend({
	defaults: {
        
    },
    initialize: function(parent, xpos, ypos, width, height, platformType){
			var model = this;
			var entity = Crafty.e("2D, floor, Canvas, Image");
			entity
				.attr({x: xpos, y: ypos, z: 1000, w: width, h: height})
				.setName('Platform');
			if (platformType == 1)
				entity.image("web/images/SteelBlock1Small.png", "repeat");
			else if (platformType == 2)
				entity.image("web/images/SteelBlock2Small.png", "repeat");
			entity.origin(entity.w/2, entity.h/2);
			
			var surface = Crafty.e("2D, platform, floor, Canvas");
			surface.attr({x:xpos, y:ypos, z:1000, w: width, h:0});
			model.set({'entity' : entity, 'surface' : surface});
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
