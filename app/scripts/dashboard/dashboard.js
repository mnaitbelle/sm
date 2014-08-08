(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('dashboardController', ['ordersData', dashboard]);

    function dashboard(ordersData) {
        /*jshint validthis:true */
        var vm = this;

        vm.aaa = ordersData;

        activate();

        function activate() {
        }
    }
})();