'use strict';
(function () {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService)

    function FormService(UserService) {
        var forms = [
        {fid:"12", formName:"njsdf",uid:"1"}];

        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
            getforms: getforms
        };
        return service;

        function getforms() {
            return forms;
        }

        function createFormForUser(uid, form, callback) {
            var createdForm = {
                fid: UserService.Guid(),
                formName: form.formName,
                uid: uid
            };
            forms.push(createdForm);
            callback(createdForm);
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
            for (form in forms) {
                if (form.fid == fid) {
                    forms.splice(form, 1);
                }
            }
            callback(forms);
        }

        function updateFormById(fid, newForm, callback) {
            var updatedForm = null;
            for (form in forms) {
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