'use strict';

/**
 * @ngdoc function
 * @name vagrantApp.controller:ConferencesCtrl
 * @description
 * # ConferencesCtrl
 * Controller of the vagrantApp
 */
angular.module('vagrantApp')
  .controller('ConferencesCtrl', function ($scope, $http) {
    $scope.conferenceList = [
      {name: "Conference 1"},
      {name: "Conference 2"}
    ];
    $scope.conferenceJson = function($http) {
      $http.get('/scripts/conferences.json').success(response) {
        return response.data;
      };
    }
  });
