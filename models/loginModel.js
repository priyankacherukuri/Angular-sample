(function(loginModel) {

	var database = require('./database');

	loginModel.loginUser = function(value, next) {
		var loginuserData = {
			    firstname: value.firstname,
               // password:value.password
		};

		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Databse Connection Failed");
			} else {
				theDb.userCollection.insert(loginuserData, function(err, result) {
					if(err) {
						next(err, null);
					} else {
						next(null, result);
					}
				});
			}
		});
	};

	loginModel.registerUser = function(value, next) {
		var registerUserData = {
			    "firstname": value.firstname,
                "lastname":value.lastname,
                "username":value.username,
                "password":value.password
                

		};

		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Databse Connection Failed");
			} else {
				theDb.userCollection.insert(registerUserData, function(err, result) {
					if(err) {
						next(err, null);
					} else {
						next(null, result);
					}
				});
			}
		});
	};
})(module.exports);

