(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/login');
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
                })
                .state('dashboard.taskorders.details', {
                    displayName: 'Task order',
                    url: 'dashboard/taskorders/details/:id',
                    templateUrl: 'scripts/taskorders/taskOrderDetails.html',
                    resolve: {
                        taskDetails: ['$state', '$stateParams', 'TaskOrder', function ($state, $stateParams, TaskOrder) {
                            return TaskOrder.get({id: $stateParams.id}).$promise;
                        }]
                    },
                    controller: 'taskOrderDetailsController',
                    controllerAs: 'vm'
                });
        }]);
})();