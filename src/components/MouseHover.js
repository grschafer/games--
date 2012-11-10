Crafty.c('MouseHover', {
	init: function() {
		var entity = this;

		this.requires("Mouse")
        
		entity.bind('MouseOver', function(elem){
			document.body.style.cursor = "pointer";
		})
		.bind('MouseOut', function(elem){
			document.body.style.cursor = "default";
		})
		.bind('Remove', function(elem){
			document.body.style.cursor = "default";
		});
    
		return this;
	}
});