(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('appController',
        [
            '$scope',
            '$rootScope',
            'sessionService',
            'authEvents',
            appController
        ]);

    function appController($scope, $rootScope, sessionService, authEvents) {
        /*jshint validthis:true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'appController';

        $scope.currentSession = null;

        $rootScope.$on(authEvents.loginSuccess, function (session) {
                $scope.currentSession = session;
            }
        );

        activate();

        function activate() {
        }
    }
})();