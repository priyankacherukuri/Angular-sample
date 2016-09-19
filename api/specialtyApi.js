(function(specialtyApi) {
	var specialtyModel = require('../models/specialtyModel');
	
	specialtyApi.init = function(app) {


		app.get('/spl_data', function(req, res) {
			specialtyModel.viewSpecialtyData(function(err, data) {
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
	};
})(module.exports);
