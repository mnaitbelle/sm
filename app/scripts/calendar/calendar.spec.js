'use strict';

describe('calendar module', function () {

    // load the controller's module
    beforeEach(module('sm.main'));

    var vm;
    var testYear = 2012, testMonth = 3;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($rootScope, $controller) {
        var scope = $rootScope.$new();
        var stateparams = {
            year: testYear,
            month: testMonth
        };

        vm = $controller('calendarController', {
            $scope: scope, $state:{}, $stateParams: stateparams, calendarItems:{}
        });
    }));

    it('should process correct dates from urlparams', function () {
        expect(vm.currentDate).toEqual(new Date(testYear, testMonth, 1));
        expect(vm.previousDate).toEqual(new Date(testYear, testMonth-1, 1));
        expect(vm.nextDate).toEqual(new Date(testYear, testMonth+1, 1));
    });

    it('should init the calendar as read only', function () {
        expect(vm.calendarOptions.editable).toBeFalsy();
    });

    it('should start the calendar at the diven date', function () {
        expect(vm.calendarOptions.year).toEqual(testYear);
        expect(vm.calendarOptions.month).toEqual(testMonth);
        expect(vm.calendarOptions.date).toEqual(1);
    });

    it('should init empty event lists', function () {
        expect(vm.events.length).toBe(0);
        expect(vm.eventSources.length).toBe(0);
    });
});
