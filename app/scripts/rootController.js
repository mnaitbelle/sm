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
            'sessionService',
            rootController
        ]);

    function rootController($scope, $state, sessionService) {
        /*jshint validthis:true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'appController';

        $scope.viewLoading = false;

        $scope.currentSession = sessionService.getCurrent();

        $scope.setCurrentSession = function (session) {
            $scope.currentSession = session;
        };

        $scope.logout = function () {
            sessionService.destroy();
            $state.go('login');
        };

        activate();

        function activate() {
        }
    }
})();