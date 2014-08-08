(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('dashboardController', ['$scope', 'ordersService', 'authService', dashboard]);

    function dashboard($scope, ordersService, authService) {
        /*jshint validthis:true */
        var vm = this;

        ordersService.getOrders().success(function(data) {
            vm.aaa = data;
        });

        vm.logout = function() {
            authService.logout();
            $scope.currentSession = null;
        };

        activate();

        function activate() {
        }
    }
})();