$(function(){
	// console.log('this shit is ready!!!')
	// stickEmIn(towerfallDataByUser);
	stickEmInWithUnderscore(towerfallDataTruncated);
	totalGamesPlayed();
	thisGuy();

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
		$('.wins ul').append('<li>' + data[0] + '</li>');
	})
}

function totalGamesPlayed(){
	var totalGames =  _.reduce(_.map(towerfallGlobalData.game_count, function(value, key){return value;}), function(memo, num){return memo + num;});
	$('#weekly-games').append('<li>' + totalGames + '</li>');
}

function addUser(){
	$('.user-list ul').append('<input class="newUser this-guy" placeholder="sup dog">');
	$('.wins ul').append('<input class="newScore this-guy" placeholder="give it to me baby">');
	// $('.btn.btn-primary').click(function(){
	// })
}

function newUserData(){
	$('.user-list ul').append('<li>' + $('.newUser').val() + '</li>');
	$('.wins ul').append('<li class="poo">' + $('.newScore').val() + '<li>');
	$('.newUser').remove();
	$('.newScore').remove();
		
	console.log('????');
}

function thisGuy(){
	$('.btn.btn-primary').click(function(){
		if($('.this-guy').length === 0){
			addUser()
		} else {
			newUserData();
		}

	})
}



