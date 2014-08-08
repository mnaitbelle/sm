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
        'ngRoute',
        'LocalStorageModule'
    ])

    //inits the app
    .run(['authService', function (authService) {
        //debug mode
        //authService.logOut();
    }])
;