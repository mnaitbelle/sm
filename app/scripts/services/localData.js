(function () {
    'use strict';

    angular
        .module('sm.main')
        .factory('LocalData', ['$rootScope', 'localFiles', function ($rootScope, localFiles) {

            var dummyForms = [
                {
                    title: 'form 1',
                    downloaded: '9/3/2014',
                    questions: [
                        'question 1',
                        'question 2',
                        'question 3'
                    ]
                },
                {
                    title: 'form 2a',
                    downloaded: '9/2/2014',
                    questions: [
                        'question 1a',
                        'question 2a',
                        'question 3a',
                        'question 4a',
                        'question 5a'
                    ]
                },
                {
                    title: 'form 3',
                    downloaded: '9/2/2014',
                    questions: [
                        'question 1',
                        'question 2'
                    ]
                }
            ];

            var getForms = function() {
                if (!localStorage.getItem(localFiles.forms)) {
                    return [];
                }
                else {
                    return JSON.parse(localStorage.getItem(localFiles.forms));
                }
            };

            var addNewForm = function (newForm) {
                localStorage.setItem(localFiles.forms, JSON.stringify(getForms()).push(newForm));
                $rootScope.$broadcast('forms.update');
            };

            var clearForms = function () {
                localStorage.removeItem(localFiles.forms);
                $rootScope.$broadcast('forms.update');
            };

            var initDummyForms = function () {
                localStorage.setItem(localFiles.forms, JSON.stringify(dummyForms));
                $rootScope.$broadcast('forms.update');
            };

            var fac = {
                getForms: getForms,
                addForm: addNewForm,
                clearForms: clearForms,
                initDummyForms: initDummyForms
            };

            return fac;

        }]);
})();