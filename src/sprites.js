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
			'key_A' : {
				'file' : 'web/images/computer_key_A.png',
				'tile' : 128,
				'tileh': 128,
				'elements':{
					'key' : [0,0]
				}
			},
			'key_B' : {
				'file' : 'web/images/computer_key_Arrow_Right.png',
				'tile' : 128,
				'tileh': 128,
				'elements':{
					'key' : [0,0]
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
