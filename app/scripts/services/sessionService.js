/**
 * Created by vgrafe on 8/7/14.
 */
(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.factory('sessionService', ['localFiles',
        function (localFiles) {

        var sessionService = {
            getCurrent: _current,
            setSession: _setSession,
            destroy: _destroy
        };

        return sessionService;

        function _current() {
            return JSON.parse(localStorage.getItem(localFiles.sessionData));
        }

        function _setSession(data) {
            debugger;
            localStorage.setItem(localFiles.sessionData, JSON.stringify(data));
        }

        function _destroy() {
            localStorage.removeItem(localFiles.sessionData);
        }
    }]);
})();
