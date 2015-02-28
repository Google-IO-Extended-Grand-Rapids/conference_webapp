'use strict';

/**
 * @ngdoc function
 * @name vagrantApp.controller:ConferencesCtrl
 * @description
 * # ConferencesCtrl
 * Controller of the vagrantApp
 */
angular.module('vagrantApp')
  .controller('ConferencesCtrl', ['$scope', 'conferences', function ($scope, conferences) {
    $scope.conferenceList = [{name: 'Conference1'}, {name: 'Conference2'}];
    $scope.conferences = conferences;
  }]
);
