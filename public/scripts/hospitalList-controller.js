define("hospitalListController", [], function() {
  var hospitalListController = function($scope, $http, $location, $window, $log, hospListing) {
    this.hospitalList = hospListing;
    var self = this;
  };

  return hospitalListController;
});
