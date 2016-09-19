(function(costestimateModel) {

	var database = require('./database');

	costestimateModel.viewCostEstimate = function(next){
		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Database Connection Failed");
			} else {
				theDb.costestimateCollection.find().toArray(function(err, results) {
					if (err) {
						next(err, null)
					} else {
						next(null, results);
					}
				})
			}
		});
	};
	costestimateModel.viewCostEstimateHosp = function(next){
		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Database Connection Failed");
			} else {
				theDb.costestimateCollection.find({ status: { $eq: "approve" } }).toArray(function(err, results) {
					if (err) {
						next(err, null)
					} else {
						next(null, results);
					}
				})
			}
		});
	};
	costestimateModel.costestimate = function(value, next) {
		var custdata = {
			    procname: value.procname,
				hospname: value.hospname,
		  		budget: value.budget,
		  		contact: value.contact,
		  		email: value.email,
		  		message: value.message,
		  		custname: value.custname,
		  		date: value.date,
		  		enter_date: new Date(),
		  		status:"Pending"
                

		};

		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Databse Connection Failed");
			} else {
				theDb.costestimateCollection.insert(custdata, function(err, result) {
					if(err) {
						next(err, null);
					} else {
						next(null, result);
					}
				});
			}
		});
	};

	costestimateModel.hosprply = function(value, next) {
		console.log("Model  " + value.patient)
		var custdata = {
			    patient: value.patient,
				answer: value.answer
		};

		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Databse Connection Failed");
			} else {
				theDb.costestimateCollection.updateOne({paients_name: value.patient},{$set :{reply:value.answer}}, {upsert:true}, function(err, result) {
					if(err) {
						next(err, null);
					} else {
						next(null, result);
					}
				});
			}
		});
	};

	costestimateModel.costappprove = function(value, next) {
		
		var approvedata = {
				"patient_name": value.patient_name
       
		};

		database.getDb(function(err, theDb) {
			if (err) {
				console.log("Databse Connection Failed");
			} else {
				theDb.costestimateCollection.updateOne({paients_name: value.patient_name},{$set :{status:"approve"}}, {upsert:true}, function(err, result) {
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



