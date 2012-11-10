Crafty.scene("main", function() {

	var elements = [
        "src/entities/ufo.js",
        "src/interfaces/info.js",
		"src/entities/floor.js",
		"src/entities/cactus.js",
		"src/entities/wires.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['ufo'] = new Ufo();
		sc['cactus'] = new Cactus();
		sc['wires'] = new Wires();
		infc['info'] = new Info();
		sc['floor'] = new Floor();
		sc['key'] = new Key();
	});
});
