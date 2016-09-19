require.config({
  paths: {
    angular: '../lib/angular/angular',
    angularRoute: '../lib/angular-route/angular-route',
    main: 'main',
    indexController: 'index-controller',
    docListController: 'docList-controller',
    hospitalListController: 'hospitalList-controller',
    addhospitalController: 'addhospital-controller',
    adddoctorController: 'adddoctor-controller',
    costSuperadminController:'costSuperadmin-controller',
    costAdminController:'costAdmin-controller',
    costHospController:'costHosp-controller',
    costPatientController:'costPatient-controller',
    costPartnerController: 'costPartner-controller',
    smartTable: '../lib/angular-smart-table/dist/smart-table',
    tableController: 'table-controller'
    

  },
  shim: {
    angular: {
      exports: 'angular'
    },
    angularRoute: {
      deps: ['angular']
    }
  }
});

require(["angular", "angularRoute"], function() {
  require(["smartTable"], function() {
  require(['indexController', 'docListController', 'hospitalListController', 'addhospitalController', 'adddoctorController','costSuperadminController', 'costAdminController', 'costHospController','costPatientController','costPartnerController','tableController'], function(indexController, docListController, hospitalListController, addhospitalController, adddoctorController,costSuperadminController, costAdminController, costHospController, costPatientController, costPartnerController, tableController) {
    require(['main'], function(myModule) {
      myModule.controller('indexController', indexController);
      myModule.controller('docListController', docListController);
      myModule.controller('hospitalListController', hospitalListController);
      myModule.controller('addhospitalController', addhospitalController);
      myModule.controller('adddoctorController', adddoctorController);
      myModule.controller('costSuperadminController', costSuperadminController);
      myModule.controller('costAdminController', costAdminController);
      myModule.controller('costHospController', costHospController);
      myModule.controller('costPatientController', costPatientController);
      myModule.controller('costPartnerController', costPartnerController);
      myModule.controller('tableController', tableController);  
      angular.bootstrap(document, ['myModule']);
    })
  });
});
});