(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('loginController',
        [
            '$state',
            'authService',
            'localStorageFiles',
            login
        ]);

    function login($state, authService, localStorageFiles) {
        /*jshint validthis:true */
        var vm = this;

        vm.title = 'login';
        vm.isLoading = false;
        vm.errorMessage = '';

        vm.credentials = {
            login: localStorage.getItem(localStorageFiles.previousLogin) || '',
            password: '',
            remember: localStorage.getItem(localStorageFiles.previousLogin) !== null || false
        };

        vm.loginUser = function (credentials) {
            if (credentials.login === '') {
                vm.errorMessage = 'Please enter a valid login.';
            }
            else {
                if (credentials.password === '') {
                    vm.errorMessage = 'Please enter a password.';
                }
                else {
                    vm.isLoading = true;
                    authService.login(credentials)
                        .then(function () {
                            vm.activate();
                        }, function (err) {
                            vm.isLoading = false;
                            /*jshint camelcase: false */
                            vm.errorMessage = err.error_description;
                        });
                }
            }
        };

        vm.activate = function() {
            if (authService.isAuth()) {
//                if ($scope.online) {
                    $state.go('dashboard.taskorders');
//                }
//                else {
//                    $state.go('dashboard.forms');
//                }
            }
        };

        vm.activate();
    }
})();