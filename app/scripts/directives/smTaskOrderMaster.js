(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .directive('smTaskOrderMaster', [smTaskOrderMaster]);

    function smTaskOrderMaster() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/directives/smTaskOrderMaster.html',
            scope: {
                taskorder: '=taskorder',
                highlight: '=highlight',
                selectself: '&selectself'
            }
        };
        return directive;
    }
})();