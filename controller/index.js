(function(controller) {

	var dataController = require("./dataController");
	var routeController = require("./routeController");
	var apiController = require('../api/index');


	controller.init = function(app) {
		dataController.init(app);
		routeController.init(app);
		apiController.initApiRoutes(app);
	};

})(module.exports)