(function(dashModel) {

	var database = require('./database');


	dashModel.viewDocCount = function(next){
		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Database Connection Failed");
			} else {
				theDb.doctorCollection.count(function(err, results) {
					if (err) {
						next(err, null)
					} else {
						next(null, results);
					}
				})
			}
		});
	};

	dashModel.viewHospCount = function(next){
			database.getDb(function(err, theDb) {
				if (err) {
					console.log("Database Connection Failed");
				} else {
					theDb.hospitalCollection.count(function(err, results) {
						if (err) {
							next(err, null)
						} else {
							next(null, results);
						}
					})
				}
			});
		};
		dashModel.viewUserCount = function(next){
			database.getDb(function(err, theDb) {
				if (err) {
					console.log("Database Connection Failed");
				} else {
					theDb.costestimateCollection.count(function(err, results) {
						if (err) {
							next(err, null)
						} else {
							next(null, results);
						}
					})
				}
			});
		};
})(module.exports);