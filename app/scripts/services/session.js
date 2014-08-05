(function () {
    'use strict';

    var app = angular.module('scanprintMobile');

    app.service('Session', function () {
        this.create = function (user, token) {
            this.user = user;
            this.token = token;
        };
        this.destroy = function () {
            this.user = null;
            this.token = null;
        };
        return this;
    });
})();