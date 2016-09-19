(function(hospiatlApi) {
	var hospitalModel = require('../models/hospModel');
	
	hospiatlApi.init = function(app) {

		app.post('/dash/new_hosp', function(req, res) {

			var hosps = {
				
                hospname: req.body.hospname,
                hosplocation:req.body.hosplocation,
                discription:req.body.discription,
                specialty:req.body.specialty,
                superspecil:req.body.superspecial,
                address:req.body.address,
                city:req.body.city,
                state:req.body.state,
                country:req.body.country,
                email:req.body.email,
                telno:req.body.telno
			};

			hospitalModel.saveNewHospital(hosps, function(err, postData) {
				if (err) {
					res.send({
						isError: true,
						errorMessage: 'Hospital Cannot be Added'
					});
				} else {
					res.render({
						isError: false,
						data: postData
					})
				}
			})
		});


		app.get('/hosp_list', function(req, res) {
			hospitalModel.viewHospitalList(function(err, data) {
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
