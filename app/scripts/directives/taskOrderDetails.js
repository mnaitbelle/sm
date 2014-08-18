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
                    taskOrder: '='
                }
            };
            return directive;
        });
})();