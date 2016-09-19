(function(costestimateApi) {
	var costestimateModel = require('../models/costestimateModel');
	
	costestimateApi.init = function(app) {


		app.get('/cost_estimate', function(req, res) {
			costestimateModel.viewCostEstimate(function(err, data) {
				if (err) {
					res.send({
						isError: true,
						errorMessage: 'Can not read data'
					});
				} else {
					res.send({
						isError: false,
						data: data
					})
				}
			})
		})

		app.get('/cost_estimate_hosp', function(req, res) {
			costestimateModel.viewCostEstimateHosp(function(err, data) {
				if (err) {
					res.send({
						isError: true,
						errorMessage: 'Can not read data'
					});
				} else {
					res.send({
						isError: false,
						data: data
					})
				}
			})
		})

		app.post('/costcust', function(req, res) {

			var data = {
				procname: req.body.procname,
				hospname: req.body.hospname,
		  		budget: req.body.budget,
		  		contact: req.body.contact,
		  		email: req.body.email,
		  		message: req.body.message,
		  		custname: req.body.custname,
		  		date: req.body.date
       
			};

			costestimateModel.costestimate(data, function(err, postData) {
				if (err) {
					res.send({
						isError: true,
						errorMessage: 'cost Cannot be Added'
					});
				} else {
					res.send({
						isError: false,
						data: postData
					})
				}
			})
		})

		app.post('/costapprov', function(req, res) {

			var data = {
				patient_name: req.body.patient
       
			};
			costestimateModel.costappprove(data, function(err, postData) {
				if (err) {
					res.send({
						isError: true,
						errorMessage: 'cost Cannot be Added'
					});
				} else {
					res.send({
						isError: false,
						data: postData
					})
				}
			})
		});

		app.post('/HospRply', function(req, res) {

			var data = {
				patient: req.body.patient,
				answer: req.body.answer

       
			};
			costestimateModel.hosprply(data, function(err, postData) {
				if (err) {
					res.send({
						isError: true,
						errorMessage: 'cost Cannot be Added'
					});
				} else {
					res.send({
						isError: false,
						data: postData
					})
				}
			})
		});
	};
})(module.exports);
