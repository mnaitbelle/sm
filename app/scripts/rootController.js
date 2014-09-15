/**
 * Created by vgrafe on 8/8/14.
 */
(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('rootController',
        [
            '$scope',
            '$state',
            '$stateParams',
            'sessionService',
            'localFiles',
            rootController
        ]);

    function rootController($scope, $state, $stateParams, sessionService, localFiles) {
        /*jshint validthis:true */
        var vm = this;

        vm.title = 'appController';

        vm.$state = $state;
        vm.$stateParams = $stateParams;

        vm.logout = function () {
            sessionService.destroy();
            $state.go('login');
        };

        $scope.$on('sessionExpired', function () {
            debugger;
            vm.logout();
        });

        vm.currentState = function () {
            return $state.current;
        };

        vm.currentSession = sessionService.getCurrent();

        //sidebar management

        var mobileView = 992;

        $scope.getWidth = function () {
            return window.innerWidth;
        };

        $scope.$watch($scope.getWidth, function (newValue) {
            if (newValue >= mobileView) {
                if (localStorage.getItem(localFiles.screenState) === false) {
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
            localStorage.setItem(localFiles.screenState, $scope.toggle);
        };

        window.onresize = function () {
            $scope.$apply();
        };
    }
})();