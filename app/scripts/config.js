(function() {
    'use strict';

    var app = angular.module('sm.main');

    var config = {
        appName: 'scanprint mobile',
        version: '0.1',
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
        message:'please wait...',
        delay: 150,
        templateUrl: 'scripts/templates/busy.html'
    });

    app.constant('localFiles', {
        previousLogin: 'previousLogin',
        sessionData: 'sessionData',
        screenState: 'screenState'
    });
})();