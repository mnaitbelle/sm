/**
 * Created by vgrafe on 8/8/14.
 */
(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('rootController',
        [
            '$scope',
            '$state',
            '$rootScope',
            'sessionService',
            rootController
        ]);

    function rootController($scope, $state, $rootScope, sessionService) {
        /*jshint validthis:true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'appController';

        $rootScope.logout = function () {
            sessionService.destroy();
            $state.go('login');
        };

        activate();

        function activate() {
//            sessionService.destroy();
//            $state.go('login');
        }
    }
})();