'use strict';

/**
 * @ngdoc function
 * @name vagrantApp.controller:SampleCtrl
 * @description
 * # SampleCtrl
 * Controller of the vagrantApp
 */
angular.module('vagrantApp')
  .controller('SampleCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.evenBetterThings = [{"id":0,"name":"Conference 0","shortDesc":"Conf 0 short desc","fullDesc":"Conference: 0 The complete full description in all of it's glory","locationView":{"id":0,"name":"Location 0","shortDesc":"Location: 0","fullDesc":"Full Description Location: 0","parkingInfo":"The parking information for Location: 0 is the following....","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},"startDate":"2015-02-14T19:17:30","endDate":"2015-02-14T19:17:30","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},{"id":1,"name":"Conference 1","shortDesc":"Conf 1 short desc","fullDesc":"Conference: 1 The complete full description in all of it's glory","locationView":{"id":1,"name":"Location 1","shortDesc":"Location: 1","fullDesc":"Full Description Location: 1","parkingInfo":"The parking information for Location: 1 is the following....","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},"startDate":"2015-02-14T19:17:30","endDate":"2015-02-14T19:17:30","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},{"id":2,"name":"Conference 2","shortDesc":"Conf 2 short desc","fullDesc":"Conference: 2 The complete full description in all of it's glory","locationView":{"id":2,"name":"Location 2","shortDesc":"Location: 2","fullDesc":"Full Description Location: 2","parkingInfo":"The parking information for Location: 2 is the following....","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},"startDate":"2015-02-14T19:17:30","endDate":"2015-02-14T19:17:30","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},{"id":3,"name":"Conference 3","shortDesc":"Conf 3 short desc","fullDesc":"Conference: 3 The complete full description in all of it's glory","locationView":{"id":3,"name":"Location 3","shortDesc":"Location: 3","fullDesc":"Full Description Location: 3","parkingInfo":"The parking information for Location: 3 is the following....","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},"startDate":"2015-02-14T19:17:30","endDate":"2015-02-14T19:17:30","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},{"id":4,"name":"Conference 4","shortDesc":"Conf 4 short desc","fullDesc":"Conference: 4 The complete full description in all of it's glory","locationView":{"id":4,"name":"Location 4","shortDesc":"Location: 4","fullDesc":"Full Description Location: 4","parkingInfo":"The parking information for Location: 4 is the following....","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},"startDate":"2015-02-14T19:17:30","endDate":"2015-02-14T19:17:30","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},{"id":5,"name":"Conference 5","shortDesc":"Conf 5 short desc","fullDesc":"Conference: 5 The complete full description in all of it's glory","locationView":{"id":5,"name":"Location 5","shortDesc":"Location: 5","fullDesc":"Full Description Location: 5","parkingInfo":"The parking information for Location: 5 is the following....","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},"startDate":"2015-02-14T19:17:30","endDate":"2015-02-14T19:17:30","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},{"id":6,"name":"Conference 6","shortDesc":"Conf 6 short desc","fullDesc":"Conference: 6 The complete full description in all of it's glory","locationView":{"id":6,"name":"Location 6","shortDesc":"Location: 6","fullDesc":"Full Description Location: 6","parkingInfo":"The parking information for Location: 6 is the following....","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},"startDate":"2015-02-14T19:17:30","endDate":"2015-02-14T19:17:30","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},{"id":7,"name":"Conference 7","shortDesc":"Conf 7 short desc","fullDesc":"Conference: 7 The complete full description in all of it's glory","locationView":{"id":7,"name":"Location 7","shortDesc":"Location: 7","fullDesc":"Full Description Location: 7","parkingInfo":"The parking information for Location: 7 is the following....","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},"startDate":"2015-02-14T19:17:30","endDate":"2015-02-14T19:17:30","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},{"id":8,"name":"Conference 8","shortDesc":"Conf 8 short desc","fullDesc":"Conference: 8 The complete full description in all of it's glory","locationView":{"id":8,"name":"Location 8","shortDesc":"Location: 8","fullDesc":"Full Description Location: 8","parkingInfo":"The parking information for Location: 8 is the following....","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},"startDate":"2015-02-14T19:17:30","endDate":"2015-02-14T19:17:30","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},{"id":9,"name":"Conference 9","shortDesc":"Conf 9 short desc","fullDesc":"Conference: 9 The complete full description in all of it's glory","locationView":{"id":9,"name":"Location 9","shortDesc":"Location: 9","fullDesc":"Full Description Location: 9","parkingInfo":"The parking information for Location: 9 is the following....","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"},"startDate":"2015-02-14T19:17:30","endDate":"2015-02-14T19:17:30","createDttm":"2015-02-14T19:17:30","lastUpdateDttm":"2015-02-14T19:17:30"}];

   $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
    // $http.get('http://104.236.204.59:8080/api/conference')
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

  }]);
