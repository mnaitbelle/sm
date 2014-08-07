(function() {
    'use strict';

    var app = angular.module('scanprintMobile');

    var config = {
        appName: 'scanprint mobile',
        version: '1.0',
        busyIndicator: 'overlay', //overlay or spinner
        authTokenRoot: 'http://m.scanprint.net',
        apiRoot: 'http://m.scanprint.net/api'
    };

    app.value('config', config);

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });

    app.config(['$logProvider', function($logProvider) {
        //turn debugging on/off
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }]);

    app.constant('authEvents', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    });

    app.constant('localStorageFiles', {
        previousLogin: 'previousLogin',
        sessionData: 'sessionData'
    });
//
//    app.constant('UserRoles', {
//        allRoles: '*',
//        admin: 'admin',
//        editor: 'editor',
//        guest: 'guest'
//    });
//
//    app.run(function ($rootScope, AuthEvents, AuthService) {
//        $rootScope.$on('$stateChangeStart', function (event, next) {
//            var authorizedRoles = next.data.authorizedRoles;
//            if (!authService.isAuthorized(authorizedRoles)) {
//                event.preventDefault();
//                if (authService.isAuthenticated()) {
//                    // user is not allowed
//                    $rootScope.$broadcast(AuthEvents.notAuthorized);
//                } else {
//                    // user is not logged in
//                    $rootScope.$broadcast(AuthEvents.notAuthenticated);
//                }
//            }
//        });
//    });
})();