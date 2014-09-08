(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('taskOrderDetailsController', ['taskDetails', 'LocalData',
            function (taskDetails, LocalData) {
                var vm = this;
                vm.taskOrder = taskDetails;
                vm.copyToDisk = function(item) {
                    LocalData.insertItem(LocalData.stores.form, item);
                };
            }]);
})();