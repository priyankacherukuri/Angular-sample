(function(index) {
	var doctorApi = require('./doctorApi');
	var hospitalApi = require('./hospitalApi');
	var costestimateApi = require('./costestimateApi');
	var dashboardApi = require('./dashboardApi');
	var specialtyApi = require('./specialtyApi');
	var loginApi = require('./loginApi');
	index.initApiRoutes = function(app) {
		doctorApi.init(app);
		hospitalApi.init(app);
		costestimateApi.init(app);
		dashboardApi.init(app);
		specialtyApi.init(app);
		loginApi.init(app);
	};
})(module.exports)