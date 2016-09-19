(function(database) {

	var mongodb = reqquire('mongodb');
	var mongoUrl = "mongodb://localhost:27017/myData";
	var theDb = null;

	database.getDb = function(next) {
		if (theDb) {
			next(null, theDb)
		}
		else {
			mongodb.MongoClient.connect(mongoUrl, function(err, db) {
				if(err) {
					next(err, null)
				}
				else {
					theDb = {
						db: db
					};
					next(null, theDb)
				}
			})
		}
	}

})(module.exports);
