define('indexController', [], function() {

  var indexController = function($scope, $http, $location) {
    this.dataList = [];
    this.name="";
    this.speciality="";
    this.hospital="";
    this.location="";
    this.location_ = $location;
    var self = this;

    this.getNewDoc = function() { 
      self.location_.path('/new_doc');
    };

    this.getNewHosp = function() {  
      self.location_.path('/new_hosp');
    };

    this.getDocList = function() {  
      self.location_.path('/doc_listing');
    };

    this.getHospList = function() {  
      self.location_.path('/hosp_list');
    };

    this.postDoctor = function() {
      var postData = {
        name: this.name,
        speciality: this.speciality,
        hospital: this.hospital,
        location: this.location
      }

      $http.post('/dash/new_doc', $.param(postData), {headers:{'Content-Type':'application/x-www-form-urlencoded'}}).success(function (data) {
        console.log("Data: " + data);
        self.location_.path('/doc_listing');
      }).error(function (data) {
        console.log("Data: " + data)
      });
    }

    this.getDocCount = function() {
      $http.get('http://ec2-54-187-141-150.us-west-2.compute.amazonaws.com:8000/doc_count').then(function(details) {
        self.docCount = details.data.data;
      });
    };

    
  
  this.getHospCount = function() {
      $http.get('http://ec2-54-187-141-150.us-west-2.compute.amazonaws.com:8000/hosp_count').then(function(details) {
        self.hospCount = details.data.data;
      });
    };

    
  
  this.getUserCount = function() {
      $http.get('http://localhost:8000/user_count').then(function(details) {
        self.userCount = details.data.data;
      });
    };
    this.getDocCount();
    this.getHospCount();
    this.getUserCount();
  }

  return indexController;

});