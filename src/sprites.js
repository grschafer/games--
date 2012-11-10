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
            'ufo' : {
                 'file' : 'web/images/ufo.png',
                 'tile' : 211,
                 'tileh' : 117,
                 'elements': {
                     'ufo' : [0, 0],
                     'right' : [0, 1],
                     'left' : [0, 2]
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
