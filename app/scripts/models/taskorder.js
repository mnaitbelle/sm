/**
 * Created by vgrafe on 8/12/14.
 * Projection factory is intended to be use for initial loading (query) only.
 */
(function () {
    'use strict';

    angular
        .module('scanprintMobile')
//        .factory('TaskOrderProjection', ['$resource', 'config', function ($resource, config) {
//            return $resource(config.apiRoot + '/taskorders/:id',
//                {
//                    id: '@id'
//                });
//        }])
        .factory('TaskOrder', ['$resource', 'config', function ($resource, config) {
            return $resource(config.apiRoot + '/taskorders/:id',
                {
                    id: '@id'
                });
        }]);
})();
