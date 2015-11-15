"use strict";
(function () {
    angular
    .module("FormBuilderApp")
    .factory("FormService", FormServiceFunction);
    function FormServiceFunction($http, $q) {
        var service = {
            createFormForUser: createForm,
            findAllFormsForUser: findForUser,
            deleteFormById: deleteById,
            updateFormById: updateById
        };
        return service;
        function createForm(uid, newForm) {
            newForm.id = guid();
            var deferred = $q.defer();
            $http.post('/api/assignment/user/'+uid+'/form', newForm)
            .success(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
        function findForUser(uid) {
            var deferred = $q.defer();
            $http.get('/api/assignment/user/'+uid+'/form')
            .success(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        function deleteById(fid) {
            var deferred = $q.defer();
            $http.delete('/api/assignment/form/'+fid)
            .success(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        function updateById(fid, newForm) {
            var deferred = $q.defer();
            $http.put('/api/assignment/form/'+fid, newForm)
            .success(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
    }
})();