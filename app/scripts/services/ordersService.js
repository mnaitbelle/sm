/**
 * Created by vgrafe on 8/7/14.
 */
(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.factory('ordersService', ['$http', 'config', function ($http, config) {

        var ordersServiceFactory = {};

        var _getOrders = function () {
            return $http.get(config.apiRoot + '/orders');
        };

        ordersServiceFactory.getOrders = _getOrders;

        return ordersServiceFactory;
    }]);
})();