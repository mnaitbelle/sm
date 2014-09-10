/**
 * Created by vgrafe on 8/6/14.
 */
(function () {
    'use strict';

    var app = angular.module('sm.main');

    app.factory('authInterceptorService', ['$q', '$rootScope', 'sessionService',

        function ($q, $rootScope, sessionService) {

            var authInterceptorServiceFactory = {};

            var _request = function (req) {

                req.headers = req.headers || {};

                var authData = sessionService.getCurrent();
                if (authData) {
                    req.headers.Authorization = 'Bearer ' + authData.token;
                }

                return req;
            };

            var _response = function (response) {
                return response;
            };

            var _responseError = function (rejection) {
                if (rejection.status === 401)
                {
                    $rootScope.$broadcast('sessionExpired');
                }
                return $q.reject(rejection);
            };

            authInterceptorServiceFactory.request = _request;
            authInterceptorServiceFactory.response = _response;
            authInterceptorServiceFactory.responseError = _responseError;

            return authInterceptorServiceFactory;
        }]);

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });
})();