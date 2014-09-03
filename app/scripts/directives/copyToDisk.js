(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .directive('copyToDisk', ['LocalData',
            function (LocalData) {
                var dir = {
                    link: function (scope, element, attrs) {
                        element.bind('click', function () {
                            LocalData.addForm(element);
                        });
                    },
                    restrict: 'A'
                };
                return dir;
            }]);
})();