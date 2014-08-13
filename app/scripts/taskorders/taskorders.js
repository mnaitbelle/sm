(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('taskordersController', ['onlineTasks', 'TaskOrder', taskorders]);

    function taskorders(onlineTasks, TaskOrder) {
        /*jshint validthis:true */
        var vm = this;

        vm.taskorders = onlineTasks || [];
        vm.fullTaskOrder = {};

        vm.select = function (taskorder) {
            vm.selectedTaskOrder = taskorder;
            vm.fullTaskOrder = TaskOrder.get({id: taskorder.id});
        };

        activate();

        function activate() {
            if (vm.taskorders.length > 0) {
                vm.select(vm.taskorders[0]);
            }
        }
    }
})();