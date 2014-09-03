(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('formsController', ['$rootScope', 'LocalData', function ($rootScope, LocalData) {
            /*jshint validthis:true */
            var vm = this;

            vm.clear = function () {
                LocalData.clearForms();
            };

            vm.init = function () {
                LocalData.initDummyForms();
            };

            $rootScope.$on('forms.update', function () {
                vm.formsOnDisk = LocalData.getForms(); //refreshes list
            });
        }
        ]);
})();