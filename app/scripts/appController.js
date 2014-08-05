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

        $scope.currentUser = null;
        $scope.userRoles = UserRoles;
        $scope.loggedRoleEquals = AuthService.loggedRoleEquals;

        vm.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };

        activate();

        function activate() {
        }
    }
})();