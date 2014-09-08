(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('formsController', ['$rootScope', 'LocalData', function ($rootScope, LocalData) {
            /*jshint validthis:true */
            var vm = this;

            vm.init = function () {
                LocalData.getItems(LocalData.stores.form);
            };

            $rootScope.$on('form.update', function () {
                vm.formsOnDisk = LocalData.getForms(); //refreshes list
            });

            vm.init();
        }
        ]);
})();