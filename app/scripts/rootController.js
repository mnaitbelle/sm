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
            '$stateParams',
            'sessionService',
            'localStorageService',
            'localStorageFiles',
            rootController
        ]);

    function rootController($scope, $state, $stateParams, sessionService, localStorageService, localStorageFiles) {
        /*jshint validthis:true */
        var vm = this;

        vm.title = 'appController';

        vm.$state = $state;
        vm.$stateParams = $stateParams;

        vm.logout = function () {
            sessionService.destroy();
            $state.go('login');
        };

        $scope.$on('sessionExpired', function() {
            vm.logout();
        });

        vm.currentState = function() {
            return $state.current;
        };

        vm.currentSession = sessionService.getCurrent();

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