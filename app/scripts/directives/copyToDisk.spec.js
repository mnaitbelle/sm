'use strict';

describe('copyToDisk directive controller', function () {

    // load the controller's module
    beforeEach(module('sm.main'));

    var vm;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($rootScope, $controller) {
        var scope = $rootScope.$new();

        scope.table = 'taskorder';
        scope.itemId = '123';
        scope.refreshOn = 'taskorder.update';

        var localDataMock = {
            getItem: function (table, itemId) {
                return table === 'taskorder' && itemId === '123';
            }
        };

        vm = $controller('copyToDiskController', {
            $scope: scope, LocalData: localDataMock
        });
    }));

    it('should display the current item as on disk when its id is 123 and type is taskorder', function () {
        vm.refresh();
        expect(vm.isOnDisk).toBeTruthy();
        expect(vm.wasInitialized).toBeTruthy();
    });
});
