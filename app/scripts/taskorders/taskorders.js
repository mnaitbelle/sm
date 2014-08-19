(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('taskordersController', ['onlineTasks', taskorders]);

    function taskorders(onlineTasks) {
        /*jshint validthis:true */
        var vm = this;

        vm.taskorders = onlineTasks || [];
        vm.selectedTaskOrder = vm.taskorders[0];
    }
})();