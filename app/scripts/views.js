DisplayUser = Backbone.View.extend({
	template:_.template($('#user').text()),

	tagName: 'li',

	initialize: function(){
		$('.goes-here').append(this.$el);

		
		this.render();

		console.log('is there a view or what???!!!!!!!!')
		console.log(this.model.score)
	},

	render: function(){
		this.$el.append(this.template({model: this.model}));
	},

})