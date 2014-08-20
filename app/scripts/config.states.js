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
                abstract: true,
                views: {
                    '': {
                        templateUrl: 'scripts/layout/main.html'
                    }
                }
            })
            .state('dashboard.taskorders', {
                displayName: 'Task orders',
                url: '/taskorders',
                views: {
                    'sidebar': {
                        templateUrl: 'scripts/layout/sidebar.html'
                    },
                    'header': {
                        templateUrl: 'scripts/layout/header.html'
                    },
                    'content': {
                        url: '/taskorders',
                        templateUrl: 'scripts/taskorders/taskorders.html',
                        resolve: {
                            onlineTasks: ['TaskOrder', function (TaskOrder) {
                                return TaskOrder.query().$promise;
                            }]
                        },
                        controller: 'taskordersController',
                        controllerAs: 'vm'
                    }
                }
            });
    }]);
})();