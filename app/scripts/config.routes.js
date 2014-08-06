(function() {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'dashboard/dashboard.html'
            })
            .when('/about', {
                templateUrl: 'views/about.html'
            })
            .when('/form/:formid', {
                templateUrl: 'form/form.html'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });
    });
})();