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

        var mockedEvents =
        {
            data: [
                {
                    id: '7b47011d-6573-438f-9d2b-0b2c554ffd43',
                    start: '2014-06-27T00:00:00',
                    title: '911 - ICC - EOF fiber trunk cut over for contract D-E',
                    type: 'taskOrder'
                }
            ]
        };

        vm = $controller('calendarController', {
            $scope: scope, $state: {}, $stateParams: stateparams, events: mockedEvents
        });
    }));

    it('should process correct dates from urlparams', function () {
        expect(vm.currentDate).toEqual(new Date(testYear, testMonth, 1));
        expect(vm.previousDate).toEqual(new Date(testYear, testMonth - 1, 1));
        expect(vm.nextDate).toEqual(new Date(testYear, testMonth + 1, 1));
    });

    it('should init the calendar as read only', function () {
        expect(vm.calendarOptions.editable).toBeFalsy();
    });

    it('should start the calendar at the diven date', function () {
        expect(vm.calendarOptions.year).toEqual(testYear);
        expect(vm.calendarOptions.month).toEqual(testMonth);
        expect(vm.calendarOptions.date).toEqual(1);
    });
});
