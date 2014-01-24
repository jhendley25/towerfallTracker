$(function(){
	// console.log('this shit is ready!!!')
	// stickEmIn(towerfallDataByUser);
	// stickEmInWithUnderscore(towerfallDataTruncated);
	totalGamesPlayed();
	addUser();
	editButton();

})

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
	$('.user-list ul').append('<input class="newUser add-user" placeholder="sup dog">');
	$('.wins ul').append('<input class="newScore add-user" placeholder="give it to me baby">');
}

function newUserData(){
	$('.user-list ul').append('<li>' + '<button class="btn btn-danger edit">edit</button>' + ' ' + $('.newUser').val() + '</li>');
	$('.wins ul').append('<li>' + '<button class="btn btn-danger edit">edit</button>' + ' ' + $('.newScore').val() + '</li>');
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

// COLLECTION INSTANTIATION
var users = new Users();
var data = _.map(towerfallDataByUser, function(value, key){ return value});
users.add(data);

