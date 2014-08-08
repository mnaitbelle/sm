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
//            .state('notfound', {
//                url: '/notfound',
//                templateUrl: '404.html'
//            })
            .state('login', {
                url: '/login',
                templateUrl: 'scripts/login/login.html'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'scripts/dashboard/dashboard.html',
                resolve: {
                    ordersData: function(ordersService) {
                        return ordersService.getOrders();
                    }
                }
            })
            .state('dashboard.online', {
                url: '/list',
                templateUrl: 'scripts/dashboard/dashboard.online.html'
            })
            .state('dashboard.offline', {
                url: '/list',
                templateUrl: 'scripts/dashboard/dashboard.offline.html'
            });
    });
})();