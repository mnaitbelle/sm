(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('dashboardController', ['$scope', 'randomData', dashboard]);

    function dashboard($scope, randomData) {

        $scope.aaa = randomData;

        activate();

        function activate() {
        }
    }
})();