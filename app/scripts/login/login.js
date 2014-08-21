(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('loginController',
        [
            '$scope',
            '$state',
            'authService',
            'localStorageService',
            login
        ]);

    function login($scope, $state, authService, localStorageService) {
        /*jshint validthis:true */
        var vm = this;

        vm.title = 'login';
        vm.isLoading = false;
        vm.errorMessage = '';

        if (localStorageService.get('previouslogin')) {
            vm.credentials = {
                login: localStorageService.get('previouslogin'),
                password: '',
                remember: true
            };
        }
        else {
            vm.credentials = {
                login: '',
                password: '',
                remember: false
            };
        }

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
                        .then(function (data) {
                            vm.activate();
                        }, function (err) {
                            vm.isLoading = false;
                            debugger;
                            /*jshint camelcase: false */
                            vm.errorMessage = err.error_description;
                        });
                }
            }
        };

        vm.activate = function() {
            if (authService.isAuth()) {
                if ($scope.online) {
                    $state.go('dashboard.taskorders');
                }
                else {
                    $state.go('dashboard.forms');
                }
            }
        };

        vm.activate();
    }
})();