(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .directive('loading', function () {
        return {
            restrict: 'E',
            replace: 'false',
            templateUrl: 'scripts/directives/loading.html',
            scope: {
                color: '=color'
            },
            controller: ['$scope', function($scope) {
                //this is just to inject scope. won't work without
            }]
        };
    });
})();