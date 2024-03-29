(function () {
    'use strict';

    var app = angular.module('sm.main');

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('dashboard/calendar'); //todo make a proper home page ? or keep calendar as default
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'scripts/login/login.html'
                })
                .state('dashboard', {
                    url: '/dashboard',
                    abstract: true,
                    templateUrl: 'scripts/layout/dashboard.html',
                    resolve: {
                        openDb: ['LocalData', function (LocalData) {
                            //inits the db first as a resolved resource for the whole website
                            return LocalData.openDb();
                        }]
                    }
                })
                .state('dashboard.home', {
                    abstract: true, //no use yet, but displays good UI ideas for future devs
                    displayName: 'Home',
                    url: '/home',
                    templateUrl: 'scripts/home/home.html'
                })
                .state('dashboard.calendar', {
                    displayName: 'Calendar',
                    url: '/calendar/:year/:month',
                    params: { //optional parameters - default values are set on today's date
                        year: {
                            value: new Date().getFullYear()
                        },
                        month: {
                            value: new Date().getMonth()
                        }
                    },
                    resolve: {
                        events: ['$stateParams', 'CalendarItems', function ($stateParams, CalendarItems) {
                            if (!$stateParams.year || !$stateParams.month) {
                                    return CalendarItems.getTaskOrders(new Date().getFullYear(), new Date().getMonth() + 1);
                            }
                            else {
                                return CalendarItems.getTaskOrders($stateParams.year, parseInt($stateParams.month) + 1);
                            }
                        }]
                    },
                    templateUrl: 'scripts/calendar/calendar.html',
                    controller: 'calendarController',
                    controllerAs: 'vm'
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
                .state('dashboard.taskorder', {
                    displayName: 'Task order',
                    url: '/taskorder/:id',
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