(function() {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.config(function($stateProvider, $urlRouterProvider) {
        //
        // for any unmatched url, redirect to /login
        $urlRouterProvider.otherwise('/login');
        //
        // set up the states
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'scripts/login/login.html'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'scripts/dashboard/dashboard.html',
                controller:'dashboardController as vm',
                resolve: {
                    randomData: function(ordersService) {
                        return ordersService.getOrders();
                    }
                }
            })
            .state('dashboard.offline', {
                url: '/offline',
                templateUrl: 'scripts/dashboard/dashboard.offline.html'
            });
    });
})();