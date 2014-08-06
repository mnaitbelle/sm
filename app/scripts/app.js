'use strict';

/**
 * @ngdoc overview
 * @name smApp
 * @description
 * # smApp
 *
 * Main module of the application.
 */
angular
    .module('scanprintMobile', [
        'ngRoute'
    ])

    //inits the app
    .run(['AuthService', function (authService) {
        authService.logOut();
    }]);