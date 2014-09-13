(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('calendarController', ['$scope', '$state', '$stateParams', 'events',

            function ($scope, $state, $stateParams, events) {
                /*jshint validthis:true */
                var vm = this;
                vm.events = events.data;

                vm.eventClick = function (event) {
                    $state.go('dashboard.taskorder', {id: event.id});
                };

                //defines dates for UI and routing
                vm.currentDate = new Date($stateParams.year, $stateParams.month, 1);
                vm.previousDate = new Date(vm.currentDate.getTime());
                vm.previousDate.setMonth(vm.previousDate.getMonth() - 1);
                vm.nextDate = new Date(vm.currentDate.getTime());
                vm.nextDate.setMonth(vm.nextDate.getMonth() + 1);

                //builds chronologic list
                vm.eventGroups = {};
                for (var i in vm.events) {
                    if (!vm.eventGroups[vm.events[i].start]) {
                        vm.eventGroups[vm.events[i].start] = {
                            date: vm.events[i].start,
                            events: []
                        };
                    }
                    vm.eventGroups[vm.events[i].start].events.push(vm.events[i]);
                }

                vm.eventSources = [];

                //builds calendar items
                vm.eventSources.push(
                    {
                        events: vm.events,
                        allDayDefault: true
                    });

                vm.calendarOptions = {
                    editable: false,
                    header: {
                        left: '',
                        right: ''
                    },
                    eventClick: vm.eventClick,
                    viewRender: vm.renderCalendar,

                    //sets displayed date for the calendar
                    year: vm.currentDate.getFullYear(),
                    month: vm.currentDate.getMonth(),
                    date: 1
                };
            }]);
})();