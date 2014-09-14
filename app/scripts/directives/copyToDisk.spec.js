'use strict';

describe('copyToDisk directive controller', function () {

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

    it('should exist', function () {
        expect(vm).toBeDefined();
    });
});
