(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
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
                templateUrl: 'scripts/dashboard/dashboard.html'
            })
            .state('dashboard.taskorders', {
                url: '/taskorders',
                views: {
                    'navbar': {
                        templateUrl: 'scripts/navbar/navbar.html'
                    },
                    '': {
                        url: '/taskorders',
                        templateUrl: 'scripts/taskorders/taskorders.html',
                        controller: 'taskordersController',
                        controllerAs: 'vm',
                        resolve: {
                            randomData: function (taskOrdersService) {
                                return taskOrdersService.getTaskOrders();
                            }
                        }
                    }
                }
            });
    }]);
})();