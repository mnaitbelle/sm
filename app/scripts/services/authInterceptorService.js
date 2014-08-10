/**
 * Created by vgrafe on 8/6/14.
 */
(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.factory('authInterceptorService', ['$q', '$rootScope', 'sessionService', 'authEvents',

        function ($q, $rootScope, sessionService, authEvents) {

        var authInterceptorServiceFactory = {};

        var _request = function (req) {

            req.headers = req.headers || {};

            var authData = sessionService.getCurrent();
            if (authData) {
                req.headers.Authorization = 'Bearer ' + authData.token;
            }

            return req;
        };

        var _responseError = function (rejection) {
            if (rejection.status === 401) {
                $rootScope.$broadcast(authEvents.notAuthorized); //can add args, like requested page...
            }
            return $q.reject(rejection);
        };

        authInterceptorServiceFactory.request = _request;
        authInterceptorServiceFactory.responseError = _responseError;

        return authInterceptorServiceFactory;
    }]);

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });
})();