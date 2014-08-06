'use strict';

describe('Controller: loginController', function () {

    // load the controller's module
    beforeEach(module('scanprintMobile'));

    var vm, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        vm = $controller('loginController', {
            $scope: scope
        });
    }));

    it('title should be "login"', function () {
        expect(vm.title).toBe('login');
    });

    it('should not be loading stuff', function () {
        expect(vm.isLoading).toBeFalsy();
    });

    it('should have no error message set', function () {
        expect(vm.errorMessage).toBe('');
    });
});
