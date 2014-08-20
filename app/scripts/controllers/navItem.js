/**
 * Created by vgrafe on 8/20/14.
 */
(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('navItem', [
            '$scope',
            function ($scope) {
            $scope.isActive = function (itemState) {
                return document.URL.indexOf(itemState) > -1;
            };
        }]);
})();