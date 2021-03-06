/**
    examples:             
    'sprites_name' : {
         'file' : 'path/to/file',
         'tile' : width,
         'tileh' : height,
         'elements': {
             'sprite_name' : [0, 0]
         }
    },
*/

Sprites = Backbone.Model.extend({
    defaults: {
        images:{
            'player' : {
                 'file' : 'web/images/player.png',
                 'tile' : 66,
                 'tileh' : 100,
                 'elements': {
                     'player' : [0, 0],
                     'right1' : [0, 1],
                     'right2' : [0, 2],
                     'left0' : [1, 0],
                     'left1' : [1, 1],
                     'left2' : [1, 2],
                     'jump' : [2, 0],
                     'nothing1' : [2, 1],
                     'nothing2' : [2, 2],
                 }
            },
			'keyLeft' : {
				'file' : 'web/images/computer_key_Arrow_Left.png',
				'tile' : 128,
				'tileh': 128,
				'elements':{
					'LeftArrow' : [0,0]
				}
			},
			'keyRight' : {
				'file' : 'web/images/computer_key_Arrow_Right.png',
				'tile' : 128,
				'tileh': 128,
				'elements':{
					'RightArrow' : [0,0]
				}
			},
			'keyUp' : {
				'file' : 'web/images/computer_key_Arrow_Up.png',
				'tile' : 128,
				'tileh': 128,
				'elements':{
					'UpArrow' : [0,0]
				}
			},
			'door' : {
				'file' : 'web/images/Door.png',
				'tile' : 85,
				'tileh': 150,
				'elements':{
					'door' : [0,0]
				}
			},
			'cactus' : {
				'file' : 'web/images/CactusFloatingSmall.png',
				'tile' : 39,
				'tileh': 100,
				'elements':{
					'cactus' : [0,0],
					'cactus1' : [0,1]
				}
			},
			'wires' : {
				'file' : 'web/images/WireSparkingSmall.png',
				'tile' : 143,
				'tileh': 74,
				'elements':{
					'wires' : [0,0],
					'wires1' : [0,1],
					'wires2' : [0,2]
				}
			},
			'platform' : {
				 'file' : 'web/images/SteelBlock1Small.png',
                 'tile' : 50,
                 'tileh' : 50,
                 'elements': {
					'platform' : [0,0]
				 }
			}
        }
    },
    initialize: function(){
        
    },
    /**
     * Create Crafty sprites from images object
     * Pass key if You want create only one choosen sprite.
     * 
     * @param  string key - sprite definition key
     */
    create: function(key){
        if(key != undefined){
            element = this.get('images')[key];
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
    		
            return true;
        };

        _.each(this.get('images'), function(element, k){ 
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
        });

    },
    /**
     * Get path for sprites files - for loading
     * 
     * @return array array of files paths
     */
    getPaths: function(){
        var array = [], i=0;
        _.each(this.get('images'), function(element, key){ 
            array[i] = element['file']
            i++;
        });

        return array;
    }
});
