(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .directive('taskOrderDetails',

        function taskOrderDetails() {
            var directive = {
                restrict: 'EA',
                templateUrl: 'scripts/directives/taskOrderDetails.html',
                scope: {
                    taskOrderProjection: '='
                },
                controller: ['$scope', 'TaskOrder', 'Logger', function($scope, TaskOrder, Logger) {
                    $scope.$watch('taskOrderProjection', function () {
                            var logger = Logger.getInstance('taskordersController');
                            logger.log('loading taskOrder details for id {0}', [$scope.taskOrderProjection.id]);
                            $scope.taskOrder = {
                                assignmentDate: $scope.taskOrderProjection.assignmentDate,
                                number: $scope.taskOrderProjection.number,
                                isLoading: true
                            };
                            TaskOrder.get({id: $scope.taskOrderProjection.id}).$promise
                                .then(function (data) {
                                    $scope.taskOrder = data;
                                });
                        }
                    );
                }]
            };
            return directive;
        });
})();