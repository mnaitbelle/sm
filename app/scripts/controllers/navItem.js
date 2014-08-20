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
                var currentUrl = $state.current.url;

                if ($state.params && $state.params.id) {
                    currentUrl = currentUrl.replace(':id', $state.params.id);
                }
                return state === currentUrl;
            };
        }]);
})();