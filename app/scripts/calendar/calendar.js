(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('calendarController', ['$scope', '$stateParams', 'CalendarItems',

            function ($scope, $stateParams, CalendarItems) {
                /*jshint validthis:true */
                var vm = this;

                vm.eventClick = function (event, jsEvent, view) {

                };

                vm.eventSources = [];

                vm.refresh = function (view, element) {
                    if (view) {
                        return CalendarItems.getTaskOrders(view.start.getFullYear(), view.start.getMonth() +1)
                            .success(function (items) {
                                vm.eventSources.push({
                                    events: items,
                                    allDayDefault: true
                                });
                            });
                    }
                };

                vm.calendar = {
                        editable: false,
                        header: {
                            right: 'prev,next'
                        },
                        eventClick: vm.eventClick,
                        viewRender: vm.refresh
                };

                vm.refresh();
            }]);
})();