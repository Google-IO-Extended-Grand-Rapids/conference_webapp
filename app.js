angular.module('io2015', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('io2015').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partial/home/home.html'
    });
    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'partial/register/register.html'
    });
    $stateProvider.state('schedule', {
        url: '/schedule',
        templateUrl: 'partial/schedule/schedule.html'
    });
    $stateProvider.state('location', {
        url: '/location',
        templateUrl: 'partial/location/location.html'
    });
    $stateProvider.state('sponsors', {
        url: '/sponsors',
        templateUrl: 'partial/sponsors/sponsors.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('io2015').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
