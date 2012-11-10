Crafty.scene("level1", function() {

	var elements = [
        "src/entities/floor.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['floor'] = new Floor();
	});

});
