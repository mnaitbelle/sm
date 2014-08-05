/**
 * @ngdoc function
 * @name smApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smApp
 */
//angular.module('scanprintMobile')
//  .controller('MainCtrl', function ($scope) {
//    $scope.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
//  });

(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('MainCtrl', ['$scope', form]);

    function form($scope) {
        /*jshint validthis:true */
        var vm = this;

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        vm.activate = activate;
        vm.title = 'form';

        activate();

        function activate() {
        }
    }
})();
