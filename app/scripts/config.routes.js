(function() {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.config(function ($routeProvider, UserRoles) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                data: {
                    authorizedRoles: [UserRoles.allRoles]
                }
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                data: {
                    authorizedRoles: [UserRoles.allRoles]
                }
            })
            .when('/form/:formid', {
                templateUrl: 'form/form.html',
                data: {
                    authorizedRoles: [UserRoles.allRoles]
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    });
})();