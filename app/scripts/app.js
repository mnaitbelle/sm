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
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'sm.logger',
        'cgBusy'
    ]);