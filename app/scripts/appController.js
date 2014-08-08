(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('appController',
        [
            '$scope',
            'sessionService',
            appController
        ]);

    function appController($scope, sessionService) {
        /*jshint validthis:true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'appController';

        $scope.currentSession = sessionService.getCurrent();

        $scope.setCurrentSession = function (session) {
            $scope.currentSession = session;
        };

        activate();

        function activate() {
        }
    }
})();