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
            '$location',
            'sessionService',
            rootController
        ]);

    function rootController($scope, $location, sessionService) {
        /*jshint validthis:true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'appController';

        $scope.currentSession = sessionService.getCurrent();

        $scope.setCurrentSession = function (session) {
            $scope.currentSession = session;
        };

        $scope.logout = function () {
            sessionService.destroy();
            $location.path('/login');
        };

        activate();

        function activate() {
        }
    }
})();