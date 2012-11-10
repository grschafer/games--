Crafty.scene("main", function() {

	var elements = [
        "src/entities/ufo.js",
		"src/entities/floor.js",
		"src/entities/cactus.js",
		"src/entities/wires.js",
		"src/entities/box.js",
		"src/entities/platform.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {
		var bg = Crafty.e("2D, Canvas, Image")
             .attr({w: Crafty.viewport.width, h: Crafty.viewport.height, z:0})
             .image("web/images/Background1.jpg", "repeat");
		sc['ufo'] = new Ufo();
		sc['floor'] = new Floor();
		sc['key'] = new Key();
		sc['cactus'] = new Cactus();
		sc['wires'] = new Wires();
		sc['floor'] = new Floor();
		sc['key'] = new Key();
		sc['box'] = new Box();
		sc['boulder'] = new Boulder();
		sc['p1'] = new Platform(0,50, 500, 100, 60);
		
	});
});
