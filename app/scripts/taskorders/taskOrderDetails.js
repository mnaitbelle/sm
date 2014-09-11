(function () {
    'use strict';

    angular
        .module('sm.main')
        .controller('taskOrderDetailsController', ['taskDetails', 'LocalData', 'Question',
            function (taskDetails, LocalData, Question) {
                var vm = this;
                vm.taskOrder = taskDetails;
                vm.copyToDisk = function (taskorder) {

                    var dbTaskOrder =
                    {
                        id: taskorder.id,
                        number: taskorder.number,
                        assignmentDate: taskorder.assignmentDate,
                        taskOrderPriority: taskorder.taskOrderPriority,
                        taskOrderStatu: taskorder.taskOrderStatu,
                        comments: taskorder.comments

                    };

                    LocalData.insertItems(LocalData.stores.taskorder, [dbTaskOrder])
                        .then(function () {
                            LocalData.insertItems(LocalData.stores.form, taskorder.forms)
                                .then(function () {
                                    Question.get({id: taskorder.id}, function (questions) {
                                        LocalData.insertItems(LocalData.stores.question, questions);
                                    });
                                });
                        });
                };
            }]);
})();