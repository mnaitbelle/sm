(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('loginController',
        [
            '$rootScope',
            'AuthService',
            'AuthEvents',
            login
        ]);

    function login($rootScope, AuthService, AuthEvents) {
        /*jshint validthis:true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'login';

        vm.credentials = {
            login: '',
            password: ''
        };

        vm.loginUser = function (credentials) {
            AuthService.login(credentials).then(function (user) {
                $rootScope.$broadcast(AuthEvents.loginSuccess);
                vm.setCurrentUser(user);
            }, function () {
                $rootScope.$broadcast(AuthEvents.loginFailed);
            });
        };

        activate();

        function activate() {
        }
    }
})();