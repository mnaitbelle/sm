(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .directive('spinner', function () {
        return {
            restrict: 'E',
            replace: 'false',
            templateUrl: 'scripts/directives/spinner.html',
            scope: {
                color: '=',
                size: '='
            }
        };
    });
})();