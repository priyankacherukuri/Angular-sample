define('costAdminController', [], function() {
	var costAdminController = function($scope, $http, $location, costadminList) {
		this.costAdminList =costadminList;
		var self = this;

		this.changeStatus = function(abc){
			 alert("Are you sure to approve Query for"+abc)
	        };

		this.changeStatus = function(patientname){
		  	alert(patientname);
		  	$http({
		  		url:'http://ec2-54-187-141-150.us-west-2.compute.amazonaws.com:8000/costapprov',
		  		method:'POST',
		  		data: {
		  				patient: patientname
		  			}
		  	}).then(function(data){
		  		
		  	})

 		};
	};

	return costAdminController;
});