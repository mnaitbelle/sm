(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('appController',
        [
            '$scope',
            'UserRoles',
            'AuthService',
            appController
        ]);

    function appController($scope, UserRoles, AuthService) {
        /*jshint validthis:true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'appController';

        $scope.currentSession = null;
        $scope.userRoles = UserRoles;
        $scope.loggedRoleEquals = AuthService.loggedRoleEquals;

        $scope.setCurrentSession = function (session) {
            $scope.currentSession = session;
        };

        activate();

        function activate() {
        }
    }
})();