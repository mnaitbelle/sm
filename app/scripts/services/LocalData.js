(function () {
    'use strict';
    /*global indexedDB, IDBKeyRange */
    angular
        .module('sm.main')
        .factory('LocalData', ['$rootScope', '$q', function ($rootScope, $q) {

            //init
            var sm = {};
            sm.indexedDb = {};
            sm.indexedDb.db = null;

            var dbName = 'smDb1';
            var version = 4;

            var openDb = function () {

                var deferred = $q.defer();

                var request = indexedDB.open(dbName, version);
                request.onupgradeneeded = function (e) {
                    var db = e.target.result;

                    e.target.transaction.onerror = sm.indexedDb.onerror;

                    if (db.objectStoreNames.contains(fac.stores.form)) {
                        db.deleteObjectStore(fac.stores.form);
                    }
                    db.createObjectStore(fac.stores.form, {keyPath: 'id'});

                    if (db.objectStoreNames.contains(fac.stores.question)) {
                        db.deleteObjectStore(fac.stores.question);
                    }
                    db.createObjectStore(fac.stores.question, {keyPath: 'id'});

                    if (db.objectStoreNames.contains(fac.stores.taskorder)) {
                        db.deleteObjectStore(fac.stores.taskorder);
                    }
                    db.createObjectStore(fac.stores.taskorder, {keyPath: 'id'});
                };

                request.onsuccess = function (e) {
                    sm.indexedDb.db = e.target.result;
                    deferred.resolve(sm.indexedDb.db);
                };

                request.onerror = sm.indexedDb.onerror;

                return deferred.promise;
            };

            //methods implementation

            var getItems = function (tableName, params) {
                var deferred = $q.defer();

                var db = sm.indexedDb.db;
                var trans = db.transaction([tableName]);
                var store = trans.objectStore(tableName);
                var keyRange = {};

                if (params) {

                }
                else {
                    // Get everything in the store;
                    keyRange = IDBKeyRange.lowerBound(0);
                }

                var cursorRequest = store.openCursor(keyRange);

                var result = [];

                cursorRequest.onsuccess = function (e) {
                    var cursor = e.target.result;
                    if (cursor) {
                        result.push(cursor.value);
                        cursor.continue();
                    }
                    else {
                        deferred.resolve(result);
                    }
                };

                cursorRequest.onerror = sm.indexedDb.onerror;
                return deferred.promise;
            };

            var getItem = function (tableName, id) {
                var deferred = $q.defer();

                var db = sm.indexedDb.db;
                var trans = db.transaction([tableName]);
                var store = trans.objectStore(tableName);

                var req = store.get(id);

                req.onsuccess = function (e) {
                    if (e.target.result) {
                        deferred.resolve(e.target.result);
                    }
                    else {
                        deferred.resolve(null);
                    }
                };

                req.onerror = function (err) {
                    deferred.reject(err);
                };

                return deferred.promise;
            };

            var insertItems = function (tableName, items) {
                var deferred = $q.defer();

                var db = sm.indexedDb.db;
                var trans = db.transaction([tableName], 'readwrite');
                var store = trans.objectStore(tableName);

                if (items.length === 0) {
                    deferred.resolve(null);
                }
                else {
                    for (var i in items) {
                        store.put(items[i]);
                    }

                    trans.oncomplete = function () {
                        $rootScope.$broadcast(tableName + '.update', {insertedItems: items});
                        deferred.resolve(null);
                    };
                }

                return deferred.promise;
            };

            var deleteItem = function (tableName, id) {
                var db = sm.indexedDb.db;
                var trans = db.transaction([tableName], 'readwrite');
                var store = trans.objectStore(tableName);

                var request = store.delete(id);

                trans.oncomplete = function (e) {
                    $rootScope.$broadcast(tableName + '.update', e);
                };

                request.onerror = function (e) {
                    console.log(e);
                };
            };

            var fac = {
                openDb: openDb,
                insertItems: insertItems,
                getItem: getItem,
                getItems: getItems,
                deleteItem: deleteItem,
                stores: {
                    taskorder: 'taskorder',
                    form: 'form',
                    question: 'question'
                }
            };

            return fac;
        }]);
})();