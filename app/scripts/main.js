$(function(){
	console.log('this shit is ready!!!')
	// stickEmIn(towerfallDataByUser);
	stickEmInWithUnderscore(towerfallDataTruncated);
	totalGamesPlayed();

	$('.btn.btn-primary').click(function(){
		addUser()
	})

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
		$('.user-list ul').append('<li>' + user + '</li>');
	});

// using _.each to get key pairs value, and inject into the DOM
	_.each(arg, function(data){
		$('.wins').append('<li>' + data[0] + '</li>');
	})
}

function totalGamesPlayed(){
	var totalGames =  _.reduce(_.map(towerfallGlobalData.game_count, function(value, key){return value;}), function(memo, num){return memo + num;});
	$('#weekly-games').append('<li>' + totalGames + '</li>');
}

function addUser(){
	$('.user-list ul').append('<input class="newUser" placeholder="sup dog">')
	$('.btn.btn-primary').remove();
	$('.user-list').append("<button class='btn btn-success submit'>DO IT!</button>");
	$('.submit').click(function(){
		newUserData();
	})
}

function newUserData(){
	$('.user-list ul').append('<li>' + $('.newUser').val() + '</li>');
	$('.newUser').remove();

}







