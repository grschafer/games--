Crafty.scene("level3", function() {

	var elements = [
        "src/entities/floor.js",
        "src/entities/box.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['floor'] = new Floor();
		sc['box'] = new Box();
	});

});
