(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('taskOrderDetailsController', ['taskDetails',
            function (taskDetails) {
                var vm = this;
                vm.taskOrder = taskDetails;
            }]);
})();