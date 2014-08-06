/**
 * Created by vgrafe on 8/4/14.
 */
(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.factory('AuthService', function ($http, $q, config) {

        var authService = {
            login: _login,
            logOut: _logOut,
            session: _authData
        };

        return authService;

        function _login(loginData) {

            var data = 'grant_type=password&username=' + loginData.login + '&password=' + loginData.password;

            var deferred = $q.defer();

            $http.post(config.authTokenRoot + '/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function (response) {

                    localStorage.sessionData = JSON.stringify({
                        /*jshint camelcase: false */
                        token: response.access_token,
                        userName: loginData.login
                    });

                    deferred.resolve(response);

                }).error(function (err) {
                    _logOut();
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function _logOut() {
            localStorage.removeItem('sessionData');
        }

        function _authData() {
            return localStorage.getItem('sessionData');
        }
    });
})();