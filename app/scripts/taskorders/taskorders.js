(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('taskordersController', ['onlineTasks', 'TaskOrder', 'Logger', '$scope', taskorders]);

    function taskorders(onlineTasks, TaskOrder, Logger, $scope) {
        /*jshint validthis:true */
        var vm = this;

        vm.taskorders = onlineTasks || [];
        vm.selectedTaskOrder = vm.taskorders[0];

        var logger = Logger.getInstance('taskordersController');

        $scope.$watch('vm.selectedTaskOrder', function () {
                logger.log('loading taskOrder details for id {0}', [vm.selectedTaskOrder.id]);
                vm.fullTaskOrder = { isLoading: true };
                TaskOrder.get({id: vm.selectedTaskOrder.id}).$promise
                    .then(function (data) {
                        vm.fullTaskOrder = data;
                    });
            }
        );
    }
})();