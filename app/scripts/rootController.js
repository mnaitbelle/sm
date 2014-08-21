/**
 * Created by vgrafe on 8/8/14.
 */
(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('rootController',
        [
            '$scope',
            '$state',
            'sessionService',
            'localStorageService',
            'localStorageFiles',
            rootController
        ]);

    function rootController($scope, $state, sessionService, localStorageService, localStorageFiles) {
        /*jshint validthis:true */
        var vm = this;

        vm.title = 'appController';

        vm.logout = function () {
            sessionService.destroy();
            $state.go('login');
        };

        vm.online = window.navigator.onLine;

        $scope.$on('sessionExpired', function() {
            vm.logout();
        });

        vm.currentState = function() {
            return $state.current;
        };

        vm.currentSession = function() {
            return sessionService.current;
        };

        var mobileView = 992;

        $scope.getWidth = function () {
            return window.innerWidth;
        };

        $scope.$watch($scope.getWidth, function (newValue) {
            if (newValue >= mobileView) {
                if (localStorageService.get(localStorageFiles.screenState) === false) {
                    $scope.toggle = false;
                }
                else {
                    $scope.toggle = true;
                }
            }
            else {
                $scope.toggle = false;
            }
        });

        $scope.toggleSidebar = function () {
            $scope.toggle = !$scope.toggle;
            localStorageService.set(localStorageFiles.screenState, $scope.toggle);
        };

        window.onresize = function () {
            $scope.$apply();
        };
    }
})();