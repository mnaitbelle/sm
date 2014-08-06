(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('loginController',
        [
            '$scope',
            'AuthService',
            login
        ]);

    function login($scope, AuthService) {
        /*jshint validthis:true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'login';
        vm.isLoading = false;
        vm.errorMessage = '';

        vm.credentials = {
            login: '',
            password: ''
        };

        vm.loginUser = function (credentials) {
            vm.isLoading = true;
            AuthService.login(credentials)
                .then(function () {
                    vm.isLoading = false;
                    $scope.setCurrentSession(AuthService.session);
                }, function (err) {
                    //code if error here
                    vm.isLoading = false;
                    /*jshint camelcase: false */
                    vm.errorMessage = err.error_description;
                });
        };

        activate();

        function activate() {
        }
    }
})();