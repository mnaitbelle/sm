(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('formsController', ['$rootScope', 'LocalData', function ($rootScope, LocalData) {
            /*jshint validthis:true */
            var vm = this;
            vm.formsOnDisk = LocalData.getForms();

            vm.clear = function() {
                LocalData.clearForms();
            };

            vm.init = function() {
                LocalData.initDummyForms();
            };

            $rootScope.$on('forms.update', function() {
                vm.formsOnDisk = LocalData.getForms(); //refreshes list
            });
        }
        ]);
})();