(function(docModel) {

	var database = require('./database');

	docModel.saveNewDoctor = function(value, next) {
		var doctorData = {
			    firstname: value.firstname,
                lastname:value.lastname,
                gender:value.gender,
                dob:value.dob,
                mobile:value.mobile,
                city:value.city,
                state:value.state,
                country:value.country,
                discp:value.discp,
                email:value.email,
                licenseid:value.licenseid,
                specialty:value.specialty,
                superspecil:value.superspecial,
                exp:value.exp,
                univ:value.univ,
                passyear:value.passyear,
                hospname:value.hospname,
                address:value.address,
                landmark:value.landmark,
                fee:value.fee,
                currency:value.currency,
                consultday:value.consultday,
                consulttime:value.consulttime

		};

		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Databse Connection Failed");
			} else {
				theDb.doctorCollection.insert(doctorData, function(err, result) {
					if(err) {
						next(err, null);
					} else {
						next(null, result);
					}
				});
			}
		});
	};

	docModel.viewDoctorList = function(next){
		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Database Connection Failed");
			} else {
				theDb.doctorCollection.find().toArray(function(err, results) {
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

