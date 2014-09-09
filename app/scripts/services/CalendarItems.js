(function () {
    'use strict';

    angular
        .module('sm.main')
        .factory('CalendarItems', CalendarItems);

    CalendarItems.$inject = ['$http', 'config'];

    function CalendarItems($http, config) {
        var service = {
            getTaskOrders: getTaskOrders
        };

        return service;

        function getTaskOrders(year, month) {
            return $http.get(config.apiRoot + '/calendar/' + year + '/' + month);
        }
    }
})();