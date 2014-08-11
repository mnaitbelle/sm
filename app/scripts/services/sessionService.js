/**
 * Created by vgrafe on 8/7/14.
 */
(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.factory('sessionService', ['localStorageService', 'localStorageFiles',
        function (localStorageService, localStorageFiles) {

        var sessionService = {
            getCurrent: _current,
            setSession: _setSession,
            destroy: _destroy
        };

        return sessionService;

        function _current() {
            return localStorageService.get(localStorageFiles.sessionData);
        }

        function _setSession(data) {
            localStorageService.set(localStorageFiles.sessionData, data);
        }

        function _destroy() {
            localStorageService.remove(localStorageFiles.sessionData);
        }
    }]);
})();
