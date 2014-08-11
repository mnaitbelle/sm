/**
 * Created by vgrafe on 8/7/14.
 */
(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.factory('taskOrdersService', ['$http', 'config', function ($http, config) {

        var taskOrdersServiceFactory = {
            taskorders: []
        };

        var _getTaskOrders = function () {
            return $http.get(config.apiRoot + '/taskorders')
                .success(function(data) {
                    taskOrdersServiceFactory.taskorders = data;
                });
        };

        var _getTaskOrder = function (toId) {
            return $http.get(config.apiRoot + '/taskorders/'+toId);
        };

        taskOrdersServiceFactory.getTaskOrders = _getTaskOrders;
        taskOrdersServiceFactory.getTaskOrder = _getTaskOrder;

        return taskOrdersServiceFactory;
    }]);
})();