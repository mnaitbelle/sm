(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('dashboardController', ['ordersService', dashboard]);

    function dashboard(ordersService) {
        /*jshint validthis:true */
        var vm = this;

        ordersService.getOrders().success(function(data) {
            vm.aaa = data;
        });

        activate();

        function activate() {
        }
    }
})();