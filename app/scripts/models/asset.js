/**
 * Created by vgrafe on 8/8/14.
 */
(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.factory('Asset', ['$resource', function ($resource) {
        $resource.url('/path/to/model/controller/:id', {
            id: '@id' //this binds the ID of the model to the URL param
        }, {
            query: { method: 'GET', isArray: true }, //this can also be called index or all
            save: { method: 'PUT' }, //this is the update method
            create: { method: 'POST' },
            destroy: { method: 'DELETE' }
        });
    }]);

    app.factory('Order', ['$resource', function ($resource, config) {
        $resource.url(config.apiRoot + '/orders/:id', {
            id: '@orderID' //this binds the ID of the model to the URL param
        }, {
            query: { method: 'GET', isArray: true }, //this can also be called index or all
            save: { method: 'PUT' }, //this is the update method
            create: { method: 'POST' },
            destroy: { method: 'DELETE' }
        });
    }]);
})();