(function () {
    'use strict';

    angular
        .module('sm.main')
        .directive('widgetsList',

        function widgetsList() {
            var directive = {
                restrict: 'EA',
                templateUrl: 'scripts/directives/widgetsList.html',
                scope: {
                    items: '='
                }
            };
            return directive;
        });
})();