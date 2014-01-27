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
		// targeting the element's children in the DOM
		$(this.$el.children('.user, .score')).html('');
		$(this.$el.children('.edit')).html('save').removeClass('btn-danger').addClass('btn-success');

		
		var editInputs = $(this.$el.children('.editing'))
		/* if there are no inputs, then put some in. have to stash this target as a variable (the above var) 
		for this specific element, otherwise you're referencing all elements with the class .editing; 
		which will create bugs */
		if(editInputs.length === 0) {
			this.$el.append('<input class="editing editUser" placeholder="' + this.model.get("name") + '">');
			this.$el.append('<input class="editing editScore" placeholder="' + this.model.get("wins") + '">');	
		} else {
			var editedUser = {
				name: $('.editUser').val(),
				wins: $('.editScore').val()
			}

			 // removing the inputs we stuck in above.
			$(editInputs).remove();

			// changing the class(which holds the color) and txt of the button
			$(this.$el.children('.edit')).html('edit').removeClass('btn-success').addClass('btn-danger');
			
			// altering this model's properties, name + wins, to the editedUser's properties with set()
			this.model.set(editedUser);

			// assigning the values of editedUser to classes in the DOM
			$(this.$el.children('.user').html(editedUser.name));
			$(this.$el.children('.score').html(editedUser.wins));
		}
	}
})


CreateUser = Backbone.View.extend({
	/* this isn't referencing a template and has no render, because the addUser method, 
	+ addInputs and newUserData, is creating + removing elements */

	/* This function creates users by calling addUser() in the initialize. addUser calls addInputs() and
	newUserData(). addInputs(), is obvious. newUserData() creates a new model with property values
	that the creates in the inputs. */

	// this function is called in the document ready

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
		// creates a new model to put user inputed values into
		var newUser = new UserModel({
			name: $('.newUser').val(),
			wins: $('.newScore').val()
		});

		/* users is a collection, that the user is adding(add is a backbone method) the model to, so it will be 
		rendered via the collection's view*/
		users.add(newUser)

		// remove the inputs that were added to the DOM above
		$('.newUser, .newScore').remove();
	},

	addUser: function(){
		// the value of this gets lost in scope, so 'that' is needed
		var that = this;

		// when the btn is clicked...
		$('.btn.btn-primary').click(function(){
			// if there are no inputs; .add-user is the class for inputs that add users...
			if($('.add-user').length === 0){
				// then add inputs, run addInputs()
				that.addInputs()
			} else {
				// if there are inuts, then run newUserData()
				that.newUserData();
			}
		})
	}
})