'use strict';

describe('calendar module', function () {

    // load the controller's module
    beforeEach(module('sm.main'));

    var vm;
    var testYear = 2012, testMonth = 3;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($rootScope, $controller) {
        var scope = $rootScope.$new();
        var localData = {
            year: testYear,
            month: testMonth
        };

        vm = $controller('copyToDiskController', {
            $scope: scope, LocalData: localData
        });
    }));

    it('should process correct dates from urlparams', function () {
        expect(vm.nextDate).toEqual(new Date(testYear, testMonth+1, 1));
    });
});
