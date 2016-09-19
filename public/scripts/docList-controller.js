define('docListController', [], function() {
	var docListController = function($scope, $http, $location, $window, $log, doctorListing) {
		
    this.doctorList = [];
    var self = this;

    self.doctorList = doctorListing;
	};

  return docListController;
  
});