/**
 * Created by vgrafe on 8/20/14.
 */
(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('navItem', [
            '$scope',
            '$state',
            function ($scope, $state) {
            $scope.isActive = function (state) {
                return state === $state.current.name;
            };
        }])
})();