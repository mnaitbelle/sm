(function () {
    'use strict';

    angular
        .module('sm.main')
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
                controller: ['$scope', 'LocalData', function ($scope, LocalData) {

                    var vm = this;

                    if ($scope.refreshOn) {
                        $scope.$on($scope.refreshOn, function (e, a) {
                            for (var i in a.insertedItems) {
                                if (a.insertedItems[i].id === $scope.itemId) {
                                    vm.init();
                                }
                            }
                        });
                    }

                    vm.init = function() {
                        LocalData.getItem($scope.table, $scope.itemId)
                            .then(function (item) {
                                vm.isOnDisk = item;
                            });
                    };

                    vm.init();
                }],
                controllerAs: 'vm'
            };
            return dir;
        });
})();