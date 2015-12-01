'use strict';
(function () {
    angular
    .module("FormBuilderApp")
    .controller("FormController", FormController);

    function FormController(FormService, $rootScope, $location) {
        var model = this;
        model.user = $rootScope.user;
        model.addForm = addForm;
        model.selectForm = selectForm;
        model.removeForm = removeFrom;
        model.updateForm = updateForm;

        var user = null;
        var selectedForm;

        if ($rootScope.user != null) {
            user = $rootScope.user;
            FormService.findAllFormsForUser($rootScope.user._id)
                .then(function (userForms) {
                    model.forms = userForms;
                });
        }

        function addForm(name) {
            if (user != null && name) {
                var newForm = {
                    "idForUser": user._id,
                    "title": name
                }
                FormService.createFormForUser(user._id, newForm)
                    .then(function (forms) {
                        model.forms = forms;
                        model.title = "";
                    });
            }
        }

        function selectForm(index) {
            selectedForm = model.forms[index];
            model.title = selectedForm.title;
        }

        function removeFrom(index) {
            FormService.deleteFormById(model.forms[index]._id)
            .then(function (forms) {
                model.forms = forms;
            });
        }

        function updateForm(index, name) {
            if (user != null) {
                var updatedForm = {
                    "id": selectedForm._id,
                    "idForUser": selectedForm.idForUser,
                    "title": name
                };
                FormService.updateFormById(selectedForm._id, updatedForm)
                    .then(function (allForms) {
                        model.forms = allForms
                    });
                model.title = "";
            }
        }
    }
})();