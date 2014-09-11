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

                vm.events = [];
                vm.eventSources = [];
                vm.query = {};

                vm.refresh = function (view) {
                    if (view) {
                        //todo implement last viewed month persistence
                        localStorage.calendarYearStart = view.start.getFullYear();
                        localStorage.calendarMonthStart = view.start.getMonth() + 1;
                        vm.query = CalendarItems.getTaskOrders(view.start.getFullYear(), view.start.getMonth() + 1)
                            .success(function (items) {

                                vm.events = items;

                                //builds chronologic list
                                vm.eventGroups = {};
                                for (var i in items) {
                                    if (!vm.eventGroups[items[i].start]) {
                                        vm.eventGroups[items[i].start] = {
                                            date: items[i].start,
                                            events: []
                                        };
                                    }
                                    vm.eventGroups[items[i].start].events.push(items[i]);
                                }

                                //builds calendar items
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