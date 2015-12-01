(function () {
    'use strict';
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($http, $q) {
        var service = {
            createFormForUser: createForm,
            findAllFormsForUser: findAll,
            deleteFormById: deleteById,
            updateFormById: updateById
        };

        return service;

        function createForm(uid, form) {
            var deferred = $q.defer();
            $http.post("/api/assignment/user/" + uid + "/form", form)
                .success(function (allForms) {
                    deferred.resolve(allForms);
                });
            return deferred.promise;
        }

        function findAll(uid) {
            var deferred = $q.defer();
            $http.get("/api/assignment/form/user/" + uid)
                .success(function (forms) {
                    deferred.resolve(forms);
                });
            return deferred.promise;
        }

        function deleteById(fid) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/form/" + fid)
                .success(function (forms) {
                    deferred.resolve(forms)
                });
            return deferred.promise;
        }

        function updateById(fid, updatedForm) {
            var deferred = $q.defer();
            $http.put("/api/assignment/form/" + fid, updatedForm)
                .success(function (forms) {
                    deferred.resolve(forms);
                });
            return deferred.promise;
        }
    }
})();