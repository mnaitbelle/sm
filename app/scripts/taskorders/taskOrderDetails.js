(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('taskOrderDetailsController', ['taskDetails', 'LocalData', 'Question',
            function (taskDetails, LocalData, Question) {
                var vm = this;
                vm.taskOrder = taskDetails;
                vm.copyToDisk = function (form) {

                    LocalData.insertItems(LocalData.stores.form, [form]);

                    Question.get({id: form.id}, function (data) {
                        var questions = data;

                        for (var i in questions) {
                            questions[i].formId = form.id;
                        }

                        LocalData.insertItems(LocalData.stores.question, questions);
                    });
                };
            }]);
})();