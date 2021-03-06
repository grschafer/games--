Crafty.scene("main", function() {

	var elements = [
        "src/entities/ufo.js",
		"src/entities/floor.js",
		"src/entities/cactus.js",
		"src/entities/wires.js",
		"src/entities/box.js",
		"src/entities/platform.js",
		"src/entities/door.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {
		var bg = Crafty.e("2D, Canvas, Image")
             .attr({w: Crafty.viewport.width, h: Crafty.viewport.height, z:0})
             .image("web/images/Background1.jpg", "repeat");
		sc['ufo'] = new Ufo(0.0001, {}, 0, "main", "level2");
		sc['floor'] = new Floor();
		sc['key'] = new Key(0, 0, -1000, "RightArrow");
		sc['key'] = new Key(0, 200, 20, "LeftArrow");
		sc['key'] = new Key(0, 400, 20, "UpArrow");
		sc['cactus'] = new Cactus();
		sc['wires'] = new Wires();
		sc['floor'] = new Floor();
		sc['key'] = new Key();
		sc['door'] = new Door(0, 700,400);
		sc['box'] = new Box();
		sc['boulder'] = new Boulder();
		sc['p1'] = new Platform(0,50, 500, 100, 60);
		
	});
});
