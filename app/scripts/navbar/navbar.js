(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('navbarController', ['$scope', navbar]);

    function navbar($scope) {
        /*jshint validthis:true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'navbar';

        vm.logout = $scope.logout();

        activate();

        function activate() {
        }
    }
})();