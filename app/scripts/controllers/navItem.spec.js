/**
 * Created by vgrafe on 8/20/14.
 */
'use strict';

describe('navItem controller', function () {
    var scope, $state, controller, state;

    beforeEach(function () {
        module('scanprintMobile');
    });

    beforeEach(module(function ($stateProvider) {
        $stateProvider.state('dashboard.testState', { url: '/test' });
    }));

    beforeEach(inject(function ($rootScope, $controller, _$state_, $injector) {

            scope = $rootScope.$new();
            $state = _$state_;

            state = $injector.get('$state');

            controller = $controller('navItem', {
                '$scope': scope,
                '$state': state
            });
        })
    );

    it('should be defined', function () {
        expect(controller).toBeDefined();
    });
//
//    it('should have a method to check if the path is active', function () {
//        $state.go('dashboard.testState');
//        expect($state.current.name).toBe('dashboard.taskorders');
//        expect(scope.isActive('dashboard.taskorders')).toBe(true);
//        expect(scope.isActive('')).toBe(false);
//    });
})
;