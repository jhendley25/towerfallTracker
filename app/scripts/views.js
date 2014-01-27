DisplayUser = Backbone.View.extend({
	template:_.template($('#user').text()),

	tagName: 'li',

	events: {
		'click .edit'		: 'editButton'
	},

	initialize: function(){
		$('.goes-here').append(this.$el);	
		this.render();
	},

	render: function(){
		this.$el.append(this.template({model: this.model}));
	},

	editButton: function(){
		$(this.$el.children('.user, .score')).html('');
		console.log(this.$el.children().hasClass('.score'));
		console.log(this.$el.children('.score'));
		console.log(this.$el.children());


		this.$el.append('<input class="editing" placeholder="' + this.model.get("name") + '">');
		this.$el.append('<input class="editing" placeholder="' + this.model.get("wins") + '">');
		// console.log('stuff');
	}
})

CreateUser = Backbone.View.extend({
	/* this isn't referencing a template and has no render, because the addUser method, 
	+ addInputs and newUserData, is creating + removing elements */

	tagName: 'li',

	initialize: function(){
		$('.goes-here').append(this.$el);
		this.addUser();
		
	},

	addInputs: function(){
		$('.goes-here').append('<input class="newUser add-user" placeholder="sup dog">');
		$('.goes-here').append('<input class="newScore add-user" placeholder="give it to me baby">');
	},

	newUserData: function(){
		var newUser = new UserModel({
			name: $('.newUser').val(),
			wins: $('.newScore').val()
		});

		users.add(newUser)
		$('.newUser, .newScore').remove();
	},

	addUser: function(){
		var that = this;
		$('.btn.btn-primary').click(function(){
			if($('.add-user').length === 0){
				that.addInputs()
			} else {
				that.newUserData();
			}
		})
	}
})