(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('formsController', ['$rootScope', 'LocalData', function ($rootScope, LocalData) {
            /*jshint validthis:true */
            var vm = this;

            vm.refresh = function () {
                LocalData.getItems(LocalData.stores.form)
                    .then(function (forms) {
                        vm.formsOnDisk = forms;
                    });

                LocalData.getItems(LocalData.stores.question)
                    .then(function (questions) {
                        for (var j in vm.formsOnDisk) {
                            vm.formsOnDisk[j].questions = [];
                            for (var i in questions) {
                                if (questions[i].formId === vm.formsOnDisk[j].id) {
                                    vm.formsOnDisk[j].questions.push(questions[i]);
                                }
                            }
                        }
                    });
            };

            vm.refresh();
        }
        ]);
})();