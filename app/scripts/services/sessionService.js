/**
 * Created by vgrafe on 8/7/14.
 */
(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.factory('sessionService', ['localStorageFiles',
        function (localStorageFiles) {

        var sessionService = {
            getCurrent: _current,
            setSession: _setSession,
            destroy: _destroy
        };

        return sessionService;

        function _current() {
            return JSON.parse(localStorage.getItem(localStorageFiles.sessionData));
        }

        function _setSession(data) {
            debugger;
            localStorage.setItem(localStorageFiles.sessionData, JSON.stringify(data));
        }

        function _destroy() {
            localStorage.removeItem(localStorageFiles.sessionData);
        }
    }]);
})();
