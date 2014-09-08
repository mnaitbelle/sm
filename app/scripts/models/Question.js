/**
 * Created by vgrafe on 8/12/14.
 * Projection factory is intended to be use for initial loading (query) only.
 */
(function () {
    'use strict';

    angular
        .module('sm.main')
        .factory('Question', ['$resource', 'config', function ($resource, config) {
            return $resource(config.apiRoot + '/items/:id',
                {
                    id: '@id'
                },
                {
                    get: {
                        isArray: true
                    }
                }
            );
        }]);
})();
