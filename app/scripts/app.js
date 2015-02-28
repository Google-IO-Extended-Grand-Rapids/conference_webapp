'use strict';

/**
 * @ngdoc overview
 * @name vagrantApp
 * @description
 * # vagrantApp
 *
 * Main module of the application.
 */
angular
  .module('vagrantApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/conferences', {
        templateUrl: 'views/conferences.html',
        controller: 'ConferencesCtrl'//,
        // resolve: {
        //   conferences: ['$http', function($http) {
        //     return $http.get('/data/conferences.json').then(function(response) {
        //       return response.data;
        //     })
        //   }]
        // }
      })
      .when('/sample', {
        templateUrl: 'views/sample.html',
        controller: 'SampleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
