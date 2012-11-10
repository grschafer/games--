var registerAssets = function(){
	Crafty.asset("bg", "web/images/bg.jpg");
};

var getEntities = function(version){
	
	var entityRoot = "src/entities/";
	
	var entities = [
	entityRoot + "base/BaseEntity.js?v=" + version,
	entityRoot + "floor.js?v=" + version,
	entityRoot + "info.js?v=" + version,
	entityRoot + "startButton.js?v=" + version,
	entityRoot + "ufo.js?v=" + version,
	];
	
	return entities;
}

var getScenes = function(version){
	
	var sceneRoot = "src/scenes/";
	
	var scenes = [
	sceneRoot + "main.js?v=" + version,
	sceneRoot + "menu.js?v=" + version,
	sceneRoot + "level1.js?v=" + version,
	];
	
	return scenes;
}

var getComponents = function(version){
	var componentRoot = "src/components/";
	
	var components = [
	componentRoot + "CustomTwoway.js?v=" + version,
	componentRoot + "MouseHover.js?v=" + version,
	];
	
	return components;
}

var getOthers = function(version){
	
	var otherRoot = "src/";
	
	var others = [
	otherRoot + "sprites.js?v=" + version,
	otherRoot + "config.js?v=" + version,
	];
	
	return others;
}

window.onload = function() {
			
	registerAssets();
        
	var version = null,
	today = new Date();
	
	// Fix for cache
	if(gameContainer.env == 'dev') {
		version = today.getDay()+"_"+ today.getHours() +"_"+today.getSeconds();
	} else {
		version = gameContainer.gameVersion;
	};
	
	//start Crafty
	Crafty.init(800, 500);

	Crafty.canvas.init();
	
	var dependencies = getEntities().concat(getComponents(), getOthers(), getScenes());

	require(dependencies, function() {
		// Create Sprites
		var sprites = new Sprites();
		sprites.create();

		// Load config
		gameContainer['conf'] = new Config({});


		var loadingText = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Text")
		.attr({w: 500, h: 20, x: ((Crafty.viewport.width) / 2), y: (Crafty.viewport.height / 2), z: 2})
		.text('Loading...')
		.textColor('#000')
		.textFont({'size' : '24px', 'family': 'Arial'});
		
		// load takes an array of assets and a callback when complete
		Crafty.load(sprites.getPaths(), function() {
			// array with local components
			var elements = [
				"src/components/MouseHover.js?v="+version+"",
				"src/components/CustomTwoway.js?v="+version+"",
				"src/entities/base/BaseEntity.js?v="+version+"",
				"src/entities/floor.js?v="+version+"",
			];

			//when everything is loaded, run the main scene
			require(elements, function() {	   
				loadingText.destroy();
				if (gameContainer.scene != undefined) {
					Crafty.scene(gameContainer.scene);
				}
			});
		},
		function(e) {
			loadingText.text('Loading ('+(e.percent.toFixed(0))+'%)');
		}
	);
	});
		
	// declare all scenes
	var scenes = [
		"src/scenes/main.js?v="+version+"",
		"src/scenes/menu.js?v="+version+"",
		"src/scenes/level1.js?v="+version+"",
	];
		
	require(scenes, function(){});

	//automatically play the loading scene
	Crafty.scene("loading");
}

