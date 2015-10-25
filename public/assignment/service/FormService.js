'use strict';
(function () {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService)

    function FormService() {
        var forms = [];

        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
            guid: guid
        };
        return service;

        function createFormForUser(uid, form, callback) {
            form.fid = guid();
            forms.push(form);
            callback(form);
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

        function findAllFormsForUser(uid, callback) {
            var userForms = [];
            for (var form in forms) {
                if (form.uid == uid) {
                    userForms.push(form);
                }
            }
            callback(userForms);
        }

        function deleteFormById(fid, callback) {
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].fid == fid) {
                    forms.splice(i, 1);
                }
            }
            callback(forms);
        }

        function updateFormById(fid, newForm, callback) {
            var updatedForm = null;
            for (var form in forms) {
                if (form.fid == fid) {
                    form.uid = newForm.uid;
                    form.formName = newForm.formName;
                    updatedForm = form;
                }
            }
            callback(updatedForm);
        }
    }
})();