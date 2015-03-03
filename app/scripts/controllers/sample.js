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
  }]);
