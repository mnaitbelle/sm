'use strict';

describe('Controller: appController', function () {

    // load the controller's module
    beforeEach(module('scanprintMobile'));

    var vm, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        vm = $controller('appController', {
            $scope: scope
        });
    }));

    it('title should be "appController"', function () {
        expect(vm.title).toBe('appController');
    });

    it('currentSession should be null', function () {
        expect(scope.currentSession).toBeNull();
    });
});
