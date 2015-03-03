'use strict';

/**
 * @ngdoc function
 * @name vagrantApp.controller:ConferencesCtrl
 * @description
 * # ConferencesCtrl
 * Controller of the vagrantApp
 */
angular.module('vagrantApp')
  .controller('ConferencesCtrl', ['$scope', '$http',function ($scope, $http) {
    $scope.conferenceList = [{name: 'Conference1'}, {name: 'Conference2'}];

    $http.get('http://104.236.204.59:8080/api/conference')
     .success(function(data, status, headers, config) {
       $scope.conferences = data;
       $scope.state = 'Success'
       $scope.errors = [{data: data, status: status, headers: headers, config: config}];
     })
     .error(function(data, status, headers, config) {
   // called asynchronously if an error occurs
   // or server returns response with an error status.
       $scope.state = 'ERRORED'
       $scope.errors = [{data: data, status: status, headers: headers, config: config}];
     });



  }]
);
