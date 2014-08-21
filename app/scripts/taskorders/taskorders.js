(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('taskordersController', ['onlineTasks',

            function (onlineTasks) {
                /*jshint validthis:true */
                var vm = this;
                vm.taskorders = onlineTasks;

                //$state.go('dashboard.taskorders.details', {id: vm.taskorders[0].id});
            }]);
})();