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
                    abstract: true, //will let us inherit common dependencies for child states
                    templateUrl: 'scripts/layout/dashboard.html'
                })
                .state('dashboard.home', {
                    abstract: true, //no use yet, but looks pretty cool!
                    displayName: 'Home',
                    url: '/home',
                    templateUrl: 'scripts/home/home.html'
                })
                .state('dashboard.taskorders', {
                    displayName: 'Task orders',
                    url: '/taskorders',
                    templateUrl: 'scripts/taskorders/taskorders.html',
                    resolve: {
                        onlineTasks: ['TaskOrder', function (TaskOrder) {
                            return TaskOrder.query();
                        }]
                    },
                    controller: 'taskordersController',
                    controllerAs: 'vm'
                })
                .state('dashboard.taskorders.details', {
                    displayName: 'Task orders',
                    url: '/:id',
                    templateUrl: 'scripts/taskorders/taskOrderDetails.html',
                    resolve: {
                        taskDetails: ['$stateParams', 'TaskOrder', function ($stateParams, TaskOrder) {
                            return TaskOrder.get({id: $stateParams.id});
                        }]
                    },
                    controller: 'taskOrderDetailsController',
                    controllerAs: 'vm'
                })
                .state('dashboard.forms', {
                    displayName: 'Forms',
                    url: '/forms',
                    templateUrl: 'scripts/forms/forms.html',
                    controller: 'formsController',
                    controllerAs: 'vm'
                });
        }
    ])
    ;
})
();