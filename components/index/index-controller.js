(function() {

  var myModule = angular.module('myModule');

  var indexController = function($scope) {
    $scope.name = "Mayank";
    $scope.age = 27;
  }

<<<<<<< HEAD
  myModule.controller('indexController', ['$scope', indexController]);
=======
  myModule.controller('indexController', ['$scope', '$http', indexController]);
>>>>>>> 077d959d00ad018ad581df9df6ecd43175d264f9
  
})();