/**
 * Created by vgrafe on 8/4/14.
 */
(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.factory('AuthService', function ($http, Session, config) {
        var authService = {};

        authService.login = function (credentials) {
            return $http
                .post(config.authTokenRoot + '/token', {
                    params: {
                        /* jshint camelcase:false */
                        grant_type: 'password',
                        /* jshint camelcase:true */
                        username: credentials.login,
                        password: credentials.password
                    },
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(function (res) {
                    Session.create(res.user, res.token);
                    return res.user;
                });
        };

        authService.isAuthenticated = function () {
            return !!Session.user;
        };

        authService.loggedRoleEquals = function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (authService.isAuthenticated() &&
                authorizedRoles.indexOf(Session.token) !== -1);
        };

        return authService;
    });
})();