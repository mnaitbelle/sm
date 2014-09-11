'use strict';

describe('login form', function () {

    // load the controller's module
    beforeEach(module('sm.main'));

    var vm;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($rootScope, $controller) {
        var scope = $rootScope.$new();

        var localStorageSrv = {
            get: function () {
                return null;
            }
        };

        spyOn(localStorageSrv, "get");

        vm = $controller('loginController', {
            localStorageService: localStorageSrv, $scope: scope
        });
    }));

    it('should have a controller', function () {
        expect(vm).toBeDefined();
    });

    it('should have no error message set', function () {
        expect(vm.errorMessage).toBe('');
    });

    it('should tell when user forgot to input login', function () {
        vm.loginUser({ login: ''});
        expect(vm.errorMessage).toBe('Please enter a valid login.');
    });

    it('should tell when user forgot to input password', function () {
        vm.loginUser({login: 'aaa', password: ''});
        expect(vm.errorMessage).toBe('Please enter a password.');
    });
});
