Crafty.scene("level1", function() {

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
		sc['ufo'] = new Ufo(0, 0.001, {}, 'level1', 'win');
		sc['ufo'].getEntity().attr({x: 200, y:500});
		sc['p4'] = new Platform(0, 0, 580, 800, 50, 2);
		sc['key'] = new Key();
		sc['cactus'] = new Cactus();
		sc['cactus'].getEntity().attr({x: 700, y: 400});
		sc['wires'] = new Wires();
		sc['wires'].getEntity().attr({x: 350, y:0});
		//sc['floor'] = new Floor();
		sc['key'] = new Key(0, 500, 500, "LeftArrow");
		sc['rightkey'] = new Key(0, 200, 350, "RightArrow");
		sc['upkey'] = new Key(0, 50, 350, "UpArrow");
		sc['door'] = new Door(0, 500, 150);
		sc['p1'] = new Platform(0,50, 500, 100, 50, 1);
		sc['p2'] = new Platform(0,650, 500, 100, 50, 1);
		sc['p3'] = new Platform(0,150, 300, 500, 50, 1);
	});

});
