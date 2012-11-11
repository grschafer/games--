

window.onload = function() {
        
    var version = null,
    	today = new Date();
	
	// Fix for cache
    if(gameContainer.env == 'dev') {
		version = today.getDay()+"_"+ today.getHours() +"_"+today.getSeconds();
	} else {
		version = gameContainer.gameVersion;
	};
    
	//start Crafty
	Crafty.init(800, 600);
	Crafty.canvas.init();
	
	Crafty.audio.add("main", "src/music/gbu_theme.mp3");
	Crafty.audio.add("jungle", "src/music/deion_jungle.mp3");

	require([
	         "src/sprites.js?v="+version+"",
	         "src/config.js?v="+version+"",
	], function() {
		// Create Sprites
		var sprites = new Sprites();
		sprites.create();

		// Load config
		gameContainer['conf'] = new Config({});
		
		//the loading screen - that will be display while assets loaded
		Crafty.scene("loading", function() {
            // clear scene and interface
            sc = []; infc = [];   

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
                    "src/components/Deadly.js?v="+version+"",
                    "src/components/Grabbable.js?v="+version+"",
					"src/components/box2d.js?v="+version+"",
                    "src/entities/base/BaseEntity.js?v="+version+"",
					"src/entities/floor.js?v="+version+"",
					"src/entities/box.js?v="+version+"",
					"src/entities/key.js?v="+version+"",
					"src/entities/door.js?v="+version+"",
					"src/entities/cactus.js?v="+version+"",
					"src/entities/wires.js?v="+version+"",
					"src/entities/boulder.js?v="+version+"",
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
			});
		});
		
		// declare all scenes
		var scenes = [
			"src/scenes/title.js?v="+version+"",
			"src/scenes/level1.js?v="+version+"",
			"src/scenes/level2.js?v="+version+"",
			"src/scenes/level3.js?v="+version+"",
			"src/scenes/gameover.js?v="+version+"",
			"src/scenes/win.js?v="+version+"",
		];
		
		require(scenes, function(){});
		
		//automatically play the loading scene
		Crafty.scene("loading");
	});
};
