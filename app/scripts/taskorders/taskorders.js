(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('taskordersController', ['taskOrdersService', taskorders]);

    function taskorders(taskOrdersService) {
        /*jshint validthis:true */
        var vm = this;

        vm.taskorders = taskOrdersService.taskorders;
        vm.fullTaskOrder = {};

        vm.select = function(taskorder) {
            vm.selectedTaskOrder = taskorder;
            taskOrdersService.getTaskOrder(taskorder.id)
                .success(function(fullTaskOrder) {
                    vm.fullTaskOrder = fullTaskOrder;
                });
        };

        activate();

        function activate() {
            if (vm.taskorders.length > 0) {
                vm.select(vm.taskorders[0]);
            }
        }
    }
})();