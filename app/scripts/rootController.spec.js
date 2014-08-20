'use strict';

describe('rootController', function () {

    // load the controller's module
    beforeEach(module('scanprintMobile'));

    var vm, scope, sessionServiceMock;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        vm = $controller('rootController', {
            $scope: scope,
            sessionService: sessionServiceMock
        });

        vm.wasDestroyed = false;

        sessionServiceMock = {
            destroy: function() {
                vm.wasDestroyed = true;
            }
        };
    }));

    it('should be defined', function () {
        expect(vm).toBeDefined();
    });

    it('should destroy session data when log out', function () {
        vm.logout();
        expect(vm.wasDestroyed).toBe(true);
    });
});
