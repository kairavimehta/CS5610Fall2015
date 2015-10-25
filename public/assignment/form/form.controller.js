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
        $scope.addForm = function () {
            if ($rootScope.user != null) {
                FormService.createFormForUser($rootScope.user.uid, $scope.form, function (newForm) {
                    $scope.forms.push(newForm);
                });
            }
        }

        $scope.selectedForm = function (index) {
            $scope.selectedForm = $scope.forms[index];
            $scope.form.formName = $scope.selectedForm.formName;
        }

        $scope.deleteForm = function (index) {
            var formToDelete = $scope.forms[index];
            FormService.deleteFormById(formToDelete.fid, function (forms) {
                $scope.forms = forms;
            });
        }

        $scope.updateForm = function () {
            if ($scope.selectedForm != null) {
                var formToEdit = {
                    fid: $scope.selectedForm.fid,
                    formName: $scope.selectedForm.formName,
                    uid: $scope.selectedForm.uid
                };
                FormService.updateFormById($scope.selectedForm.fid, formToEdit, function (f) { 
                    if($rootScope.user != null){ 
                        FormService.findAllFormsForUser($rootScope.user.uid, function (forms){
                            $scope.forms = forms;
                        });
                    }
                });
            }
        }
    }
})();
