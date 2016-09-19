(function(dataController) {
	dataController.init = function(app) {
		app.get('/data', function(req, res) {
		  res.send("Hi All");
		})
	}
})(module.exports);
