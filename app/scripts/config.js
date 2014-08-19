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

    app.config(['LoggerProvider', function(LoggerProvider) {
        // We don't want the Logger service to be enabled in production
        LoggerProvider.enabled(true);//!isProduction
    }]);

    app.constant('authEvents', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    });

    app.value('cgBusyDefaults',{
        message:'Loading Stuff',
        templateUrl: 'scripts/templates/busy.html'
    });

    app.constant('localStorageFiles', {
        previousLogin: 'previousLogin',
        sessionData: 'sessionData',
        screenState: 'screenState'
    });
})();