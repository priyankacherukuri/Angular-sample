define('main', [], function(angular) {

  var angular = require("angular");

  var myModule = angular.module("myModule", ['ngRoute',  'smart-table']);

  myModule.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.when('/', {
      templateUrl: 'index/index.vash',
      controller: 'indexController',
      controllerAs: 'index'
    }).when('/new_doc', {
      templateUrl: 'index/new_doc.vash',
      controller: 'indexController',
      controllerAs: 'add_doc'
    }).when('/register', {
      templateUrl: 'index/register.vash',
      controller: 'registerController',
      controllerAs: 'register'
    }).when('/new_hosp', {
      templateUrl: 'index/new_hosp.vash',
      controller: 'indexController',
      controllerAs: 'add_hosp'
    }).when('/doc_listing', {
      templateUrl: 'index/doc_listing.vash',
      controller: 'docListController',
      controllerAs: 'doctor',
      resolve: {
        doctorListing: function($http) {

          var doctorList =[];
          var self = this;

          return $http.get('http://ec2-54-187-141-150.us-west-2.compute.amazonaws.com:8000/doc_list').then(function(details) {
            details.data.data.forEach(function(value) {

              doctorList.push ({
                firstname: value.firstname,
                lastname: value.lastname,
                gender:value.gender,
                dob:value.dob,
                mobile:value.mobile,
                city:value.city,
                state:value.state,
                country:value.country,
                discp:value.discp,
                email:value.email,
                licenseid:value.licenseid,
                specialty:value.specialty,
                superspecil:value.superspecial,
                exp:value.exp,
                univ:value.univ,
                passyear:value.passyear,
                hospname:value.hospname,
                address:value.address,
                landmark:value.landmark,
                fee:value.fee,
                currency:value.currency,
                consultday:value.consultday,
                consulttime:value.consulttime
              });

            });

            return doctorList;
          });
        } 
      }

    }).when('/hosp_list', {
      templateUrl: 'index/hosp_listing.vash',
      controller: 'hospitalListController',
      controllerAs: 'hospital',
      resolve: {
        hospListing: function($http) {

          var hospitalList =[];
          var self = this;

          return $http.get('http://ec2-54-187-141-150.us-west-2.compute.amazonaws.com:8000/hosp_list').then(function(details) {
            details.data.data.forEach(function(value) {

              hospitalList.push({
                hospname: value.hospname,
                hosplocation: value.hosploacation,
                discription:value.discription,
                address:value.address,
                specialty:value.specialty,
                superspecil:value.superspecil,
                city:value.city,
                state:value.state,
                country:value.country,
                email:value.email,
                telno:value.telno
              });

            });

            return hospitalList;
          });
        } 
      }
    }).when('/cost_admin', {
      templateUrl: 'index/costadmin_listing.vash',
      controller: 'costAdminController',
      controllerAs: 'costadmin',
       resolve: {
        costadminList: function($http) {

          var costAdminList =[];
          var self = this;

          return $http.get('http://localhost:8000/cost_estimate').then(function(details) {
            details.data.data.forEach(function(value) {

              costAdminList.push({
                sno: value.sno,
                enterdate: value.enter_date,
                preferreddate: value.date,
                partner_name:value.partner_name,
                partner_type:value.partner_type,
                paients_name:value.custname,
                procedure:value.procname,
                superspecil:value.superspecil,
                roomtype:value.budget,
                country:value.country,
                tel_no:value.contact,
                email:value.email,
                eta:value.eta,
                disease:value.disease,
                hospital:value.hospname,
                query_rcv:value.message,
                reply:value.reply,
                rp:value.rp,
                cp:value.cp,
                tcp:value.tcp,
                gfa:value.gfa,
                gfp:value.gfp,
                admin_remark:value.admin_remark,
                status:value.status



              });

            });

            return costAdminList;
          });
        } 
      }
    }).when('/cost_superadmin', {
      templateUrl: 'index/cost_superadmin.vash',
      controller: 'costSuperadminController',
      controllerAs: 'costsuperadmin',
       resolve: {
        costadminList: function($http) {

          var costAdminList =[];
          var self = this;

          return $http.get('http://localhost:8000/cost_estimate').then(function(details) {
            details.data.data.forEach(function(value) {

              costAdminList.push({
                sno: value.sno,
                enterdate: value.enter_date,
                preferreddate: value.date,
                partner_name:value.partner_name,
                partner_type:value.partner_type,
                paients_name:value.custname,
                procedure:value.procname,
                superspecil:value.superspecil,
                roomtype:value.budget,
                country:value.country,
                tel_no:value.contact,
                email:value.email,
                eta:value.eta,
                disease:value.disease,
                hospital:value.hospname,
                query_rcv:value.message,
                reply:value.reply,
                rp:value.rp,
                cp:value.cp,
                tcp:value.tcp,
                gfa:value.gfa,
                gfp:value.gfp,
                admin_remark:value.admin_remark,
                status:value.status



              });

            });

            return costAdminList;
          });
        } 
      }
    }).when('/cost_hosp', {
      templateUrl: 'index/costhosp_listing.vash',
      controller: 'costHospController',
      controllerAs: 'costhosp',
      resolve: {
        costhospList: function($http) {

          var costhospList =[];
          var self = this;

          return $http.get('http://ec2-54-187-141-150.us-west-2.compute.amazonaws.com:8000/cost_estimate_hosp').then(function(details) {
            details.data.data.forEach(function(value) {

              costhospList.push({
                sno: value.sno,
                date: value.date,
                partner_name:value.partner_name,
                paients_name:value.paients_name,
                country:value.country,
                query_rcv:value.query_rcv,
                reply:value.reply,
                mv:value.mv,
                cp:value.cp,
                admin_remark:value.hosp_remark
              });

            });

            return costhospList;
          });
        } 
      }
    }).when('/cost_patient', {
      templateUrl: 'index/costpatient_listing.vash',
      controller: 'costPatientController',
      controllerAs: 'costpatient',
      resolve: {
        costPatientList: function($http) {

          var costpatientList =[];
          var self = this;

          return $http.get('http://ec2-54-187-141-150.us-west-2.compute.amazonaws.com:8000/cost_estimate').then(function(details) {
            details.data.data.forEach(function(value) {

              costpatientList.push({
                sno: value.sno,
                date: value.date,
                paients_name:value.paients_name,
                superspecil:value.superspecil,
                country:value.country,
                disease:value.disease,
                hospital:value.hospital,
                query_rcv:value.query_rcv,
                reply:value.reply,
                rp:value.rp,
                cp:value.cp,
                gfa:value.gfa,
                gfp:value.gfp,
                admin_remark:value.admin_remark
              });

            });

            return costpatientList;
          });
        } 
      }
    }).when('/cost_partner', {
      templateUrl: 'index/costpartner_listing.vash',
      controller: 'costPartnerController',
      controllerAs: 'costpartner',
      resolve: {
        costPartnerList: function($http) {

          var costpartnerList =[];
          var self = this;

          return $http.get('http://ec2-54-187-141-150.us-west-2.compute.amazonaws.com:8000/cost_estimate').then(function(details) {
            details.data.data.forEach(function(value) {

              costpartnerList.push({
                sno: value.sno,
                date: value.date,
                paients_name:value.paients_name,
                country:value.country,
                disease:value.disease,
                hospital:value.hospital,
                query_rcv:value.query_rcv,
                reply:value.reply,
                rp:value.rp,
                cp:value.cp,
                admin_remark:value.admin_remark
              });

            });

            return costpartnerList;
          });
        } 
      }
    }).when('/table', {
      templateUrl: 'index/table.vash',
      controller: 'tableController',
      controllerAs: 'table'
    }).otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);


  return myModule;

});