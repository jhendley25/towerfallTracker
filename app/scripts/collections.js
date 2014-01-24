Users = Backbone.Collection.extend({

    initialize: function(){
      this.on('add', function(model){
        new DisplayUser({model: model});
      })
      console.log('wtf?');
    },

    model: UserModel

})





towerfallDataByUser = {

  "user1" : {
    "name" : "jake",
    "wins" : 112,
    "weekly_wins": 33,
    "daily": 3
  },
  "user2" : {
    "name" : "ari",
    "wins" : 42,
    "weekly_wins": 12,
    "daily": 5
  },
  "user3" : {
    "name" : "mason",
    "wins" : 69,
    "weekly_wins": 7,
    "daily": 3
  }
}

towerfallDataTruncated = {
  "jake" : [112,33,3],
  "ari" : [42,12,5],
  "mason" : [69,7,3]
}

towerfallGlobalData = {
  "game_count": {
    "monday" : 22,
    "tuesday" : 22,
    "wednesday" : 35,
    "thursday" : 4,
    "friday" : 64,
    "saturday" : 32,
    "sunday" : 23
  },
  "player_count": {
    "monday" : 32,
    "tuesday" : 65,
    "wednesday" : 11,
    "thursday" : 41,
    "friday" : 61,
    "saturday" : 91,
    "sunday" : 1
  },
  "dead_controllers": {
    "monday" : 4,
    "tuesday" : 2,
    "wednesday" : 3,
    "thursday" : 4,
    "friday" : 4,
    "saturday" : 2,
    "sunday" : 2
  }
}

