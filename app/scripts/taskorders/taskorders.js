(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('taskordersController', ['onlineTasks',

            function (onlineTasks) {
                /*jshint validthis:true */
                var vm = this;
                vm.taskorders = onlineTasks;
            }]);
})();