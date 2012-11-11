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
		sc['ufo'].getEntity().attr({x: 300, y:500});
		sc['p4'] = new Platform(0, 0, 580, 800, 50, 2);
		sc['key'] = new Key();
		//sc['cactus'] = new Cactus();
		sc['wires'] = new Wires();
		sc['wires'].getEntity().attr({x: 450, y:0});
		//sc['floor'] = new Floor();
		sc['key'] = new Key();
		sc['box'] = new Box();
		sc['boulder'] = new Boulder();
		sc['p1'] = new Platform(0,50, 500, 100, 50, 1);
		sc['p2'] = new Platform(0,650, 500, 100, 50, 1);
		sc['p3'] = new Platform(0,150, 300, 500, 50, 2);
		
		Crafty.audio.play("jungle");
	});
});
