'use strict';

/**
 * @ngdoc function
 * @name vagrantApp.controller:ConferencesCtrl
 * @description
 * # ConferencesCtrl
 * Controller of the vagrantApp
 */
angular.module('vagrantApp')
  .controller('ConferencesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.conferenceList = [{name: "Conference1"}, {name: "Conference2"}];
    $http.get('data/conferences.json').
        success(function(data, status, headers, config) {
          $scope.conferences = data;
        }).
        error(function(data, status, headers, config) {
          // log error
        });
  }]
);
