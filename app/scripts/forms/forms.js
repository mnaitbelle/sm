(function () {
    'use strict';

    angular
        .module('scanprintMobile')
        .controller('formsController', forms);

    function forms() {
        /*jshint validthis:true */
        var vm = this;
        vm.formsOnDisk = [];
    }
})();