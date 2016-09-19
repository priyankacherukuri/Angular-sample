define('costListController', [], function(){
	var costListController = function($scope, $http, $location){
		this.costList = [];
		var self =this;

		this.getCost = function(){
			$http.get('http://localhost:8000/cost_list').then(function(details) {
				console.log(details.data.data);
	        	self.costList = details.data.data;
	        });

		};
		this.getCost();
	}
	return costListController;
})