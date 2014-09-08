(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('formsController', ['$rootScope', 'LocalData', function ($rootScope, LocalData) {
            /*jshint validthis:true */
            var vm = this;

            vm.refresh = function () {
                LocalData.getItems(LocalData.stores.form)
                    .then(function(forms) {
                        vm.formsOnDisk = forms;
                });
            };

            vm.refresh();
        }
        ]);
})();