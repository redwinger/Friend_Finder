var friends = require("../data/friends")

module.exports = function(app) {
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	app.post("/api/friends", function(req, res){

		var user = req.body;
		var responses = user.scores;
		var totalDif =[]
		console.log(user)
		

		for (var i = 0; i < friends.length; i++) {

			var diff = 0
			
			for (var j = 0; j < responses.length; j++) {
			
				diff += Math.abs(friends[i].scores[j] - responses[j])	
			}
			totalDif.push(diff)
			console.log(totalDif);
			var bestFriend = totalDif.indexOf(Math.min(totalDif));
		}

		
	 
	 console.log(bestFriend);


		var match = {
			name: friends[bestFriend].name,
		    img: friends[bestFriend].image
		};

		res.json(match);
		
		console.log(match)

		friends.push(user)

	});
};