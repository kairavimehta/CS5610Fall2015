'use strict';
(function () {
    angular
        .module('FormBuilderApp')
        .factory('FormService', FormService);

    function FormService($http,$q) {
        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
        }
        return service;

        function createFormForUser(uid, newForm){
            newForm.fid = guid();
            var deferred = $q.defer();
            $http.post("/api/assignment/user"+uid+"/form",newForm)
                .success(function(response){
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

        function findAllFormsForUser(uid) {
            var deferred = $q.defer();
            $http.get("/api/assignemnt/user"+uid+"/form")
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        //    var formsForUser = [];
        //    for(var f in forms){
        //        if(forms[f].uid == uid){
        //            formsForUser.push(forms[f]);
        //        }
        //    }
        //    callback(formsForUser);
        //}

        function deleteFormById(fid) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/form/" + fid)
                .success(function (response) {
                    deferred.resolve(response);
                });

            return deferred.promise;

            //for (var i = 0; i < forms.length; i++) {
            //    if (forms[i].fid == fid) {
            //        forms.splice(i, 1);
            //        break;
            //    }
            //}
            //callback(forms);
        }

        function updateFormById(fid, newForm) {
            var deferred = $q.defer();
            $http.put("/api/assignment/form/" + fid, newForm)
                .success(function (response) {
                    deferred.resolve(response);
                });

            return deferred.promise;

            //for (var i = 0; i < forms.length; i++) {

            //    if(forms[i].fid == fid){
            //        forms[i].formName = newForm.formName;
            //        callback(forms[i]);
            //    }
            //}
        }

    }
})();