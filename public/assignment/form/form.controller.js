'use strict';
(function () {
    angular
        .module('FormBuilderApp')
        .controller('FormController', FormController);

    function FormController(FormService, $scope, $rootScope) {

        if ($rootScope.user != null) {
            FormService.findAllFormsForUser($rootScope.user.uid, function (userForms) {
                $scope.forms = userForms;
            });
        }

        $scope.addForm = function (formName) {
            var newForm = {
                uid: $rootScope.user.uid,
                formName: formName
            };
            if ($rootScope.user != null) {
                FormService.createFormForUser($rootScope.user.uid, newForm, function (newform) {
                    $scope.forms.push(newform);
                    $scope.formName = "";
                });
            }
        }

        var selectedForm = {};

        $scope.selectForm = function (index) {
            $scope.formName = $scope.forms[index].formName;
            selectedForm = $scope.forms[index];
        }

        $scope.deleteForm = function (index) {
            console.log(index);
            console.log($scope.forms[index]);
            FormService.deleteFormById($scope.forms[index].fid, function () {
                FormService.findAllFormsForUser($rootScope.user.uid, function (newforms) {
                    $scope.forms = newforms;
                });
            });
            
            console.log($scope.forms);
        }

        $scope.updateForm = function (index, name) {
            var newForm = {
                fid: selectedForm.fid,
                formName: name,
                uid: selectedForm.uid
            };
            FormService.updateFormById(selectedForm.fid, newForm, function (f) {
                if ($rootScope.user != null) {
                    FormService.findAllFormsForUser($rootScope.user.id, function (forms) {
                        $scope.forms[index] = f;
                    });
                    $scope.formName = "";
                }
            });
        }
    }
})();
