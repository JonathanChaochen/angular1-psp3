  /* jshint undef: true, unused: true, esversion: 6, asi: true */

    let psp = angular.module('psp', ["ngRoute"])


    psp.controller('SalesController', SalesController)
       .controller('ProductController', ProductController)
       .controller('MainCtrl', MainCtrl)
       .directive('onReadFile', OnReadFile.directiveFactory)
       .directive('resetForm', ResetForm.directiveFactory)
       .directive('alternativeDynamicTable', AlternativeDynamicTable.directiveFactory)
       .factory('company', Company.getFactory)



    psp.config(['$routeProvider',function($routeProvider) {
           $routeProvider

           .when("/salesperson", {
               templateUrl : "partial/salespersontable.html",
               controller: "MainCtrl"
           })
           .when("/salespersonorder", {
               templateUrl : "partial/salespersonorder.html",
               controller: "MainCtrl"
           })
           .when("/average", {
               templateUrl : "partial/averagedeviation.html",
               controller: "MainCtrl"
           })

           .when("/sample", {
               templateUrl : "partial/sample.html",
               controller: "MainCtrl"
           })
           // .otherwise({redirectTo: '/home'
           // })

       }])

    psp.config(['$locationProvider', function ($locationProvider){
      $locationProvider.hashPrefix('')
      // $locationProvider.html5Mode({enabled: true, requireBase: false})
    }])


