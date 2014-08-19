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
        'ngAnimate',
        'ui.router',
        'ngResource',
        'ui.bootstrap',
        'sm.localStorage',
        'sm.logger',
        'cgBusy'
    ]);