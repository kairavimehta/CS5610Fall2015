'use strict';
(function () {
    angular
        .module('FormBuilderApp')
        .controller('FormController', FormController);

    function FormController(FormService, $scope, $rootScope) {
        $scope.selectedForm = null;
        if ($rootScope.user != null) {
            FormService.findAllFormsForUser($rootScope.user.uid, function (userForms) {
                $scope.forms = userForms;
            });
        }
        $scope.addForm = function (formName) {
            var newForm = {
                uid: $rootScope.user.id,
                formName: formName
            };
            if ($rootScope.user != null) {
                FormService.createFormForUser($rootScope.user.uid, newForm, function (newform) {
                    $scope.forms.push(newform);
                });
            }
        }

        var selectedForm = {};

        $scope.selectForm = function (index) {
            $scope.formName = $scope.forms[index].formName;
            selectedForm = $scope.forms[index];
        }

        $scope.deleteForm = function (index) {
            var formid = $scope.forms[index].fid;
            FormService.deleteFormById(formid, function (newforms) {
                $scope.forms = newforms;
            });
        }

        $scope.updateForm = function (name) {
            var newForm = {
                fid: selectedForm.fid,
                formName: name,
                uid: selectedForm.uid
            };
            FormService.updateFormById(selectedForm.fid, newForm, function (f) {
                if ($rootScope.user != null) {
                    FormService.findAllFormsForUser($rootScope.user.id, function (forms) {
                        $scope.forms = forms;
                    });
                }
            });
        }
    }
})();
