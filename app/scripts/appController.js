(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('appController',
        [
            '$scope',
            appController
        ]);

    function appController($scope) {
        /*jshint validthis:true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'appController';

        $scope.currentSession = null;

        $scope.setCurrentSession = function (session) {
            $scope.currentSession = session;
        };

        activate();

        function activate() {
        }
    }
})();