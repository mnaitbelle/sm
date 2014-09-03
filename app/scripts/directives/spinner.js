(function () {
    'use strict';

    angular
        .module('sm.main')
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