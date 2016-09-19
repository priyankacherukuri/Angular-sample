
(function(doctorApi) {
	var doctorModel = require('../models/docModel');
	
	doctorApi.init = function(app) {

		app.post('/dash/new_doc', function(req, res) {

			var docs = {
				firstname: req.body.firstname,
                lastname:req.body.lastname,
                gender:req.body.gender,
                dob:req.body.dob,
                mobile:req.body.mobile,
                city:req.body.city,
                state:req.body.state,
                country:req.body.country,
                discp:req.body.discp,
                email:req.body.email,
                licenseid:req.body.licenseid,
                specialty:req.body.specialty,
                superspecil:req.body.superspecial,
                exp:req.body.exp,
                univ:req.body.univ,
                passyear:req.body.passyear,
                hospname:req.body.hospname,
                address:req.body.address,
                landmark:req.body.landmark,
                fee:req.body.fee,
                currency:req.body.currency,
                consultday:req.body.consultday,
                consulttime:req.body.consulttime
			};

			doctorModel.saveNewDoctor(docs, function(err, postData) {
				if (err) {
					res.send({
						isError: true,
						errorMessage: 'Doctor Cannot be Added'
					});
				} else {
					res.render({
						isError: false,
						data: postData
					})
				}
			})
		});


		app.get('/doc_list', function(req, res) {
			doctorModel.viewDoctorList(function(err, data) {
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