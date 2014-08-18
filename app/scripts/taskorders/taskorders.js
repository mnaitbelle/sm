(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('taskordersController', ['onlineTasks', 'TaskOrder', 'Logger', taskorders]);

    function taskorders(onlineTasks, TaskOrder, Logger) {
        /*jshint validthis:true */
        var vm = this;

        vm.taskorders = onlineTasks || [];
        vm.fullTaskOrder = {};

        var logger = Logger.getInstance('taskordersController');

        vm.select = function (taskorder) {

            logger.log('loading taskOrder details for id {0}', [taskorder.id]);

            vm.selectedTaskOrder = taskorder;
            vm.fullTaskOrder = { isLoading: true };

            TaskOrder.get({id: taskorder.id}).$promise
                .then(function (data) {
                    vm.fullTaskOrder = data;
                });
        };

        if (vm.taskorders.length > 0) {
            vm.select(vm.taskorders[0]);
        }
    }
})();