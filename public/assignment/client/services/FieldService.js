(function () {
    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService);

    function FieldService($http, $q) {
        var api = {
            createFieldForForm: createFieldForForm,
            getFieldsForForm: getFieldsForForm,
            getFieldForForm: getFieldForForm,
            deleteFieldFromForm: deleteFieldFromForm,
            updateField: updateField
        };
        return api;

        function createFieldForForm(fid,field){
            var deferred = $q.defer();
            $http.post("/api/assignment/form/"+fid+"/field",field)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getFieldsForForm(fid){
            var deferred = $q.defer();
            $http.get("/api/assignment/form/"+fid+"/field")
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getFieldForForm(fid, fieldId){
            var deferred = $q.defer();
            $http.get("/api/assignment/form"+fid+"/field/"+fieldId)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function deleteFieldFromForm(fid, fieldId) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/form/" + fid + "/field/" + fieldId)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function updateField(fid,fieldId,field){
            var deferred = $q.defer();
            $http.put("/api/assignment/form"+fid+"/field/"+fieldId,field)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
    }
})();