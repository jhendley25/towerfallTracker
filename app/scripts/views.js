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
		var that = this;
		$(this.$el.children('.user, .score')).html('');
		$(this.$el.children('.edit')).html('save').removeClass('btn-danger').addClass('btn-success');

		var editInputs = $(this.$el.children('.editing'))

		if(editInputs.length === 0) {
			this.$el.append('<input class="editing editUser" placeholder="' + this.model.get("name") + '">');
			this.$el.append('<input class="editing editScore" placeholder="' + this.model.get("wins") + '">');	
		} else {
			var editedUser = {
				name: $('.editUser').val(),
				wins: $('.editScore').val()
			}

			this.model.set(editedUser);

			$(editInputs).remove();
			$(this.$el.children('.edit')).html('edit').removeClass('btn-success').addClass('btn-danger');

			console.log('edited user name = ', editedUser.name);

			$(this.$el.children('.user').html(editedUser.name));
			$(this.$el.children('.score').html(editedUser.wins));
		}
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