(function(hospModel) {

	var database = require('./database');

    hospModel.saveNewHospital = function(value, next) {
		var hospitalData = {
			    hospname: value.hospname,
                hosplocation:value.hosplocation,
                discription:value.discription,
                specialty:value.specialty,
                superspecil:value.superspecial,
                address:value.address,
                city:value.city,
                state:value.state,
                country:value.country,
                email:value.email,
                telno:value.telno
		};

		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Databse Connection Failed");
			} else {
				theDb.hospitalCollection.insert(hospitalData, function(err, result) {
					if(err) {
						next(err, null);
					} else {
						next(null, result);
					}
				});
			}
		});
	};


	hospModel.viewHospitalList = function(next){
		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Database Connection Failed");
			} else {
				theDb.hospitalCollection.find().toArray(function(err, results) {
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

