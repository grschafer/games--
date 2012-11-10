Crafty.scene("menu", function() {

	var elements = [
	"src/entities/startButton.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['button'] = new StartButton();
	});

	Crafty.background("url(" + Crafty.asset("bg") + ")");

});
