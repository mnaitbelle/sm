(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .directive('itemPillsList',

        function itemPillsList() {
            var directive = {
                restrict: 'EA',
                templateUrl: 'scripts/directives/itemPillsList.html',
                scope: {
                    items: '='
                }
            };
            return directive;
        });
})();