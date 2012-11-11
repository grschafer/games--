Crafty.scene("main", function() {

	var elements = [
        "src/entities/ufo.js",
        "src/interfaces/info.js",
		"src/entities/floor.js",
		"src/entities/enemy.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['ufo'] = new Ufo();
		sc['enemy'] = new Enemy();
		sc['floor'] = new Floor();
		sc['key'] = new Key();
		var bg = Crafty.e("2D, Canvas, Image")
             .attr({w: Crafty.viewport.width, h: Crafty.viewport.height, z:1})
             .image("web/images/Background1.jpg", "repeat");
	});
});
