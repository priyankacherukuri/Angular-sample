(function(dashboardApi) {
	var dashModel = require('../models/dashModel');
	
	dashboardApi.init = function(app) {

		app.get('/doc_count', function(req, res) {
			dashModel.viewDocCount(function(err, data) {
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
		});

		app.get('/hosp_count', function(req, res) {
			dashModel.viewHospCount(function(err, data) {
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
		});

		app.get('/user_count', function(req, res) {
			dashModel.viewUserCount(function(err, data) {
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
		});
	};
})(module.exports);
