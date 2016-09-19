(function(loginApi) {
	var loginModel = require('../models/loginModel');
	
	loginApi.init = function(app) {

		app.post('/register', function(req, res) {

			var user = {
				firstname: req.body.firstname,
                lastname:req.body.lastname,
                username:req.body.username,
                password:req.body.password
			};

			loginModel.registerUser(user, function(err, postData) {
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



		app.post('/userlogin',function(req,res){
			var loginuser = {
                firstname:req.body.firstname
			};

			loginModel.loginUser(loginuser,function(err, postData){
				if(err){
					res.send({
						isError:true,
						errorMessage:"cannot login"
					});
				}else{
					res.render({
						isError: false,
						data: postData
					})

				}


			})

		});
	};
})(module.exports);
