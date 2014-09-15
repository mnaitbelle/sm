(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('copyToDiskController', ['$scope', 'LocalData', function ($scope, LocalData) {

            var vm = this;

            vm.wasInitialized = false;

            if ($scope.refreshOn) {
                $scope.$on($scope.refreshOn, function (e, a) {
                    for (var i in a.insertedItems) {
                        if (a.insertedItems[i].id === $scope.itemId) {
                            vm.init();
                        }
                    }
                });
            }

            vm.refresh = function() {
                LocalData.getItem($scope.table, $scope.itemId)
                    .then(function (item) {
                        vm.isOnDisk = item;
                        vm.wasInitialized = true;
                    });
            };

            $scope.$watch('itemId', function()
            {
                if ($scope.itemId) {
                    vm.refresh();
                }
            });
        }])
        .directive('copyToDisk',
        function () {
            var dir = {
                templateUrl: 'scripts/directives/copyToDisk.html',
                scope: {
                    table: '@',
                    itemId: '@',
                    refreshOn: '@',
                    clicked: '&'
                },
                restrict: 'E',
                controller: 'copyToDiskController',
                controllerAs: 'vm'
            };
            return dir;
        });
})();