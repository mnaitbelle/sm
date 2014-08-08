/**
 * Created by vgrafe on 8/4/14.
 */
(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.factory('authService', [
        '$http',
        '$q',
        'config',
        'localStorageService',
        'sessionService',
        'localStorageFiles',
        'authEvents',

        function ($http, $q, config, localStorageService, sessionService, localStorageFiles) {

        var authService = {
            login: _login,
            logout: _logout
        };

        return authService;

        function _login(loginData) {

            var data = 'grant_type=password&username=' + loginData.login + '&password=' + loginData.password;

            var deferred = $q.defer();

            $http.post(config.authTokenRoot + '/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function (response) {

                    if (loginData.remember) {
                        localStorageService.set(localStorageFiles.previousLogin, loginData.login);
                    }
                    else
                    {
                        localStorageService.remove(localStorageFiles.previousLogin);
                    }

                    var sessionData = {
                        /*jshint camelcase: false */
                        token: response.access_token,
                        userName: loginData.login
                    };

                    /*jshint camelcase: false */
                    sessionService.setSession(sessionData);

                    deferred.resolve(response);

                }).error(function (err) {
                    _logOut();
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function _logout() {
            sessionService.destroy();
        }
    }]);
})();