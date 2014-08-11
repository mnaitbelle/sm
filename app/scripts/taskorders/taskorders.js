(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('taskordersController', ['taskOrdersService', '$state', taskorders]);

    function taskorders(taskOrdersService, $state) {

        var vm = this;

        vm.taskorders = taskOrdersService.taskorders;

        vm.openTo = function (id) {
            $state.go('dashboard.taskorderdetails', {toId: id});
        };

        activate();

        function activate() {
        }
    }
})();