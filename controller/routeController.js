(function(routeConroller) {

	routeConroller.init = function(app) {

		app.get('/', function(req, res) {
		  res.render('layout', {});
		})

		app.get('/index/:name', function(req, res) {
		  res.render('index/' + req.params.name, {});
		});

	};

})(module.exports)
