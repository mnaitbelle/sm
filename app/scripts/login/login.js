(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('loginController',
        [
            '$scope',
            'authService',
            'localStorageService',
            login
        ]);

    function login($scope, authService, localStorageService) {
        /*jshint validthis:true */
        var vm = this;

        vm.activate = activate;
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
                        .then(function (sessionData) {
                            vm.isLoading = false;
                            $scope.setCurrentSession(sessionData);
                        }, function (err) {
                            //code if error here
                            vm.isLoading = false;
                            /*jshint camelcase: false */
                            vm.errorMessage = err.error_description;
                        });
                }
            }
        };

        activate();

        function activate() {
        }
    }
})();