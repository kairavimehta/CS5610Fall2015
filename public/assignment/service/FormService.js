'use strict';
(function () {
    angular
        .module('FormBuilderApp')
        .factory('FormService', FormService);

    function FormService() {
        var forms = [];
        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
        }
        return service;

        function createFormForUser(uid, newForm, callback){
            newForm.id = guid();
            forms.push(newForm);
            callback(newForm);
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

        function findAllFormsForUser(uid,callback){
            var formsForUser = [];
            for(var form in forms){
                if(form.uid == uid){
                    formsForUser.push(form);
                }
            }
            callback(formsForUser);
        }

        function deleteFormById(fid, callback) {
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].fid == fid) {
                    forms.splice(i, 1);
                }
            }
            callback(forms);
        }

        function updateFormById(fid, newForm, callback){
            for (var i = 0; i < forms.length; i++){
                if(forms[i].fid == fid){
                    forms[i].formName = newForm.formName;
                }
            }
        }

    }
})();