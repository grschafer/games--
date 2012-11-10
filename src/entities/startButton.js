StartButton = BaseEntity.extend({
	defaults: {
		'text' : "Start",
	},
	initialize: function(){
		var model = this;
		var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Text, MouseHover");
		var entity = Crafty.e("2D, DOM, Text");

		entity
		.attr({
			x: 50, 
			y: 50, 
			z: 1000, 
			w: 400
		})
		.text(model.get('text'))
		.textColor('#98AD84')
		.textFont({
			'size' : '24px', 
			'family': 'Arial'
		})
		.bind('Click', function(){
			console.log('click!');
		})

		model.set({
			'entity' : entity
		});
	}
});