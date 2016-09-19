define('costHospController', [], function() {
	var costHospController = function($scope, $http, $location, costhospList) {
		this.costHospList = costhospList;
 		var self = this;

 		this.answer = "";

		this.hospRply = function(patientname){
		  	$http({
		  		url:'http://ec2-54-187-141-150.us-west-2.compute.amazonaws.com:8000/HospRply',
		  		method:'POST',
		  		data: {
		  				patient: patientname,
		  				answer: this.answer
		  			}
		  	}).then(function(data){
		  		
		  	})

 		};

	}

	return costHospController;
});