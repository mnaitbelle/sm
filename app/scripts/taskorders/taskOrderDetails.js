(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('taskOrderDetailsController', ['taskDetails',
            function (taskDetails) {
                var vm = this;
                vm.taskOrder = taskDetails;
            }]);
})();