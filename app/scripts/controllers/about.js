'use strict';

/**
 * @ngdoc function
 * @name smApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the smApp
 */
angular.module('scanprintMobile')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
