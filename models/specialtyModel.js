(function(specialtyModel) {

	var database = require('./database');

	specialtyModel.viewSpecialtyData = function(next){
		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Database Connection Failed");
			} else {
				theDb.specialtyCollection.find().toArray(function(err, results) {
					if (err) {
						next(err, null)
					} else {
						next(null, results);
					}
				})
			}
		});
	}	;
})(module.exports);

