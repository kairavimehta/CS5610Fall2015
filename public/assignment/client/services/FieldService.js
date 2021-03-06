﻿(function () {
    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService);

    function FieldService($http, $q) {
        var api = {
            createFieldForForm: createField,
            getFieldsForForm: getFields,
            getFieldForFormbyId: getFieldByFieldId,
            deleteFieldForForm: deleteFieldForForm,
            updateField: updateField
        };
        return api;

        function createField(fid, field) {
            var deferred = $q.defer();
            $http.post("/api/assignment/form/" + fid + "/field", field)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getFields(fid) {
            var deferred = $q.defer();
            $http.get("/api/assignment/form/" + fid + "/field")
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getFieldByFieldId(fid, fieldId) {
            var deferred = $q.defer();
            $http.get("/api/assignment/form" + fid + "/field/" + fieldId)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function deleteFieldForForm(fid, fieldId) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/form/" + fid + "/field/" + fieldId)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function updateField(fid, fieldId, field) {
            var deferred = $q.defer();
            $http.put("/api/assignment/form" + fid + "/field/" + fieldId, field)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
    }
})();