(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .directive('taskOrderDetails',

        function taskOrderDetails() {
            var directive = {
                restrict: 'EA',
                templateUrl: 'scripts/directives/itemPillsList.html',
                scope: {
                    selectedItem: '=',
                    items: '=',
                    select: '&onSelect'
                },
                controller: ['$scope', function ($scope) {
                    $scope.selectItem = function(item) {
                        $scope.selectedItem = item;
                    }
                }]
            };
            return directive;
        });
})();