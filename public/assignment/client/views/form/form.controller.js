'use strict';
(function () {
    angular
        .module('FormBuilderApp')
        .controller('FormController', FormController);

    function FormController(FormService, $rootScope) {
        var model = this;
        model.addForm = addForm;
        model.selectForm = selectForm;
        model.removeForm = removeFrom;
        model.updateForm = updateForm;

        if ($rootScope.user != null) {
            FormService.findAllFormsForUser($rootScope.user.id)
                .then(function (userForms) {
                    model.forms = userForms;
                });
        }

        function addForm (formName) {
            if ($rootScope.user != null) {
                var newForm = {
                    id: "",
                    userId: "",
                    title: formName,
                    fields: []
                };
                FormService.createFormForUser($rootScope.user.id, newForm)
                    .then(function (allForms) {
                        model.forms.push(allForms);
                        model.title = "";
                    });
            }
        }

        var selectedForm = {};

        function selectForm (index) {
            model.title = model.forms[index].title;
            selectedForm = model.forms[index];
        }

        function deleteForm (index) {
            FormService.deleteFormById(model.forms[index].id)
                .then(function (restForms) {
                    model.forms = restForms
                });
        }

        function updateForm(index, name) {
            if ($rootscope.user != null) {
                var newForm = {
                    id: selectedForm.id,
                    userId: selectedForm.userId,
                    title: name
                };
                FormService.updateFormById(selectedForm.id, newForm)
                    .then(function (allForms) {
                        model.forms = allForms
                    });
                model.title = "";
            }
        }
    }
})();
