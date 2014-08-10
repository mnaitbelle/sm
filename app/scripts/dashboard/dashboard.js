(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('dashboardController', ['$scope', 'randomData', dashboard]);

    function dashboard($scope, randomData) {

        var vm = this;

        vm.aaa = randomData;

        activate();

        function activate() {
        }
    }
})();