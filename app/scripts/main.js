// COLLECTION INSTANTIATION
var users = new Users();

/* this is taking the stubbed out data from towerfallDataByUser, 
use _.map to create an array of that obj + returning the objs inside as the variable 'data', 
which is being passed thru users' add method */
var data = _.map(towerfallDataByUser, function(value, key){ return value});
users.add(data);

// DOCUMENT READY
$(function(){
	// console.log('this shit is ready!!!')
	// stickEmIn(towerfallDataByUser);
	// stickEmInWithUnderscore(towerfallDataTruncated);
	totalGamesPlayed();
	addUser();
	editButton();

})


// BEGIN FUNCTIONS
function stickEmIn(data){
// using underscore to foreach over data nested in an object, referenced in global-data.js
	_.each(data, function(user){
 		$('.user-list').append('<li>' + user.name + '</li>');
 		$('.wins').append('<li>' + user.wins + '</li>');
	});
}

function stickEmInWithUnderscore(arg) {
// using _.each + _.keys to get the property names of the obj, and inject into the DOM
	_.each(_.keys(arg), function(user){
		// $('.user-list ul').append('<li>' + '<button class="btn btn-danger edit">edit</button>' + ' ' + user + '</li>');
		$('.user').append('<li>' + '<button class="btn btn-danger edit">edit</button>' + ' ' + user + '</li>');
	});

// using _.each to get key pairs value, and inject into the DOM
	_.each(arg, function(data){
		// $('.wins ul').append('<li>' + data[0] + '</li>');
		$('.score').append('<li>' + data[0] + '</li>');
	})
}

function totalGamesPlayed(){
	var totalGames =  _.reduce(_.map(towerfallGlobalData.game_count, function(value, key){return value;}), function(memo, num){return memo + num;});
	$('#weekly-games').append('<li>' + totalGames + '</li>');
}

function addInputs(){
	$('.goes-here').append('<input class="newUser add-user" placeholder="sup dog">');
	$('.goes-here').append('<input class="newScore add-user" placeholder="give it to me baby">');
}

function newUserData(){
	// $('.goes-here').append('<li>' + '<button class="btn btn-danger edit">edit</button>' + ' ' + $('.newUser').val() + '</li>');
	// $('.goes-here').append('<li>' + '<button class="btn btn-danger edit">edit</button>' + ' ' + $('.newScore').val() + '</li>');

	var newUser = new UserModel({
		name: $('.newUser').val(),
		wins: $('.newScore').val()
	});

	users.add(newUser)
	$('.newUser, .newScore').remove();
	console.log('????');
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

function editButton(){
	$('.edit').click(function(){
		addInputs();
		console.log('suff');
	})
}


