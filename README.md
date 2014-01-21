# notes

#### when cloning, if you're using yeoman
- npm install
- bower update
- maybe bower install underscore --save

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


## future functions
- math.random to display user scores
- edit + add function: user created editability + creationism

## random facts learned
map can be used to create a duplicate array