(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .directive('smTaskOrderMaster', [smTaskOrderMaster]);

    function smTaskOrderMaster() {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'scripts/directives/smTaskOrderMaster.html',
            scope: {
                task: '=task'
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
})();