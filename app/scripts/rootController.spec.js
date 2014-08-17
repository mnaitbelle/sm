'use strict';

describe('rootController', function () {

    // load the controller's module
    beforeEach(module('scanprintMobile'));

    var vm, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        vm = $controller('rootController', {
            $scope: scope
        });
    }));

    it('should be defined', function () {
        expect(vm).toBeDefined();
    });

    it('should redirect to login when logout is called', function () {
        scope.logout()
    });
});
