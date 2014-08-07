/**
 * Created by vgrafe on 8/6/14.
 */
'use strict';

var app = angular.module('scanprintMobile');

app.factory('authInterceptorService', ['$q', '$location', 'authService', function ($q, $location, authService) {

    var authInterceptorServiceFactory = {};

    var _request = function (config) {

        config.headers = config.headers || {};

        var authData = authService.authData;
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }

        return config;
    };

    var _responseError = function (rejection) {
        if (rejection.status === 401) {
            //redirect to login!
        }
        return $q.reject(rejection);
    };

    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;

    return authInterceptorServiceFactory;
}]);