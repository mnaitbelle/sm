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

                vm.currentDate = new Date($stateParams.year, $stateParams.month, 1);

                vm.previousDate = new Date(vm.currentDate.getTime());
                vm.previousDate.setMonth(vm.previousDate.getMonth() - 1);
                vm.nextDate = new Date(vm.currentDate.getTime());
                vm.nextDate.setMonth(vm.nextDate.getMonth() + 1);

                vm.events = [];
                vm.eventSources = [];
                vm.query = {};

                vm.refresh = function (view) {
                    if (view) {
                        //todo implement last viewed month persistence
                        vm.query = CalendarItems.getTaskOrders(vm.currentDate.getFullYear(), vm.currentDate.getMonth() + 1)
                            .success(function (items) {
                                vm.events = items;
                                debugger;

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
                        left: '',
                        right: ''
                    },
                    eventClick: vm.eventClick,
                    viewRender: vm.refresh
                };
            }]);
})();