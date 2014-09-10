(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('calendarController', ['$scope', '$state', '$stateParams', 'CalendarItems',

            function ($scope, $state, $stateParams, CalendarItems) {
                /*jshint validthis:true */
                var vm = this;

                vm.eventClick = function (event) {
                    $state.go('dashboard.taskorder', {id: event.id});
                };

                vm.eventSources = [];
                vm.query = {};

                vm.refresh = function (view) {
                    if (view) {
                        localStorage.calendarYearStart = view.start.getFullYear();//todo to implement
                        localStorage.calendarMonthStart = view.start.getMonth() + 1;//todo to implement
                        vm.query = CalendarItems.getTaskOrders(view.start.getFullYear(), view.start.getMonth() + 1)
                            .success(function (items) {
                                vm.eventSources.length = 0;
                                vm.eventSources.push({
                                    events: items,
                                    allDayDefault: true
                                });
                            });
                    }
                };

                vm.calendarOptions = {
                    editable: false,
                    header: {
                        right: 'prev,next'
                    },
                    eventClick: vm.eventClick,
                    viewRender: vm.refresh
                };
            }]);
})();