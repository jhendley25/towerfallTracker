# notes

#### when cloning, if you're using yeoman
- npm install
- bower update
- maybe bower install underscore --save
	- install 'whatEverYouNeedToInstall `--save` so the next person to clone doesn't have to do this step

#### made the stickEmIn function
- using underscore to foreach over data nested in an object

#### map + reduce function
	var gamesOfTheWeek = _.map(towerfallGlobalData.game_count, function(value, key){
	return value;
	})


	var totalGames = _.reduce(gamesOfTheWeek, function(memo, num){
		return memo + num;
	})
	
is the same as the totalGamesPlayed(), just optimized


#### addUser()
- calls addInputs() + newUserData() to put new data in the DOM
##### original functions

		function newUserData(){
		$('.goes-here').append('<li>' + '<button class="btn btn-danger edit">edit</button>' + ' ' + $('.newUser').val() + '</li>');
		$('.goes-here').append('<li>' + '<button class="btn btn-danger edit">edit</button>' + ' ' + $('.newScore').val() + '</li>');
		$('.newUser, .newScore').remove();
		}
		
		function addInputs(){
		$('.goes-here').append('<input class="newUser add-user" placeholder="sup dog">');
		$('.goes-here').append('<input class="newScore add-user" placeholder="give it to me baby">');
		}
		
		function addUser(){
		$('.btn.btn-primary').click(function(){
		if($('.add-user').length === 0){
			addInputs()
		} else {
			newUserData();
				}
			})
		}
		
		
## future functions
- edit + add function: user created edit-ability + creationism PARTIALLY DONE
	- validation
	- press `return/enter` to update instead of hitting the button again
	
- math.random to display user scores
	

## random facts learned
map can be used to create a duplicate array



<br><br><br>
# SOME BACKBONE CONCEPTS
nothin concrete, but not a bad methodology

1. start w/a model, which can be nothing but the instantiation.
	- Whatever = Backbone.Model.extend({ `nuffin`})
2. make a collection.
	- it has a this.on
	- w/an `add` listener (not to be confused with the `add` method of the instantiation)
	- and it instantiates a new view
3. the collection needs to be instantiated, so that the instantiation can pass models thru its `add` method;
	- constructor's baby, has a model passed thru it's [add](http://backbonejs.org/#Collection-add) method.
	
these nxt two can be flipped:

4. then make a view to define how it looks in the DOM.
5. make a template