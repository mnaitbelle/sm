(function () {
    'use strict';

    angular
        .module('sm.main')
        .filter('syncInfo', function () {
            return function (form) {
                if (!form.needsSync) {
                    if (!form.lastSync) {
                        return 'no changes made yet.';
                    }
                    else {
                        return 'last synced on ' + form.lastSync;
                    }
                }
                else {
                    return 'syncing soon...';
                }
            };
        });
})();