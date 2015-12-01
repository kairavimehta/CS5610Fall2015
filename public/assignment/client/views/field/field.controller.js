﻿'use strict';
(function () {
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);

    function FieldController($scope, $routeParams, FieldService, $location) {
        function findFieldForForms() {
            var fid = $routeParams.formId;
            FieldService.getFieldsForForm(fid)
                .then(function (fieldsForForm) {
                    $scope.fields = fieldsForForm;
                });
        }
        findFieldForForms();

        $scope.addField = function (fieldType) {
            var fid = $routeParams.formId;
            if (fid != undefined) {
                var newField;
                if (fieldType == "Single Line Text Field") {
                    newField = { "id": null, "label": "New Text Field", "type": "TEXT", "placeholder": "New Field" };
                }
                else if (fieldType == "Multi Line Text Field") {
                    newField = { "id": null, "label": "New Text Field", "type": "TEXTAREA", "placeholder": "New Field" };
                }
                else if (fieldType == "Date Field") {
                    newField = { "id": null, "label": "New Date Field", "type": "DATE" };
                }
                else if (fieldType == "Dropdown Field") {
                    newField = {
                        "id": null, "label": "New Dropdown", "type": "OPTIONS", "options": [
                            { "label": "Option 1", "value": "OPTION_1" },
                            { "label": "Option 2", "value": "OPTION_2" },
                            { "label": "Option 3", "value": "OPTION_3" }
                        ]};
                }
                else if (fieldType == "Checkboxes Field") {
                    newField = {
                        "id": null, "label": "New Checkboxes", "type": "CHECKBOXES", "options": [
                            { "label": "Option A", "value": "OPTION_A" },
                            { "label": "Option B", "value": "OPTION_B" },
                            { "label": "Option C", "value": "OPTION_C" }
                        ]};
                }
                else if (fieldType == "Radio Buttons Field") {
                    newField = {
                        "id": null, "label": "New Radio Buttons", "type": "RADIOS", "options": [
                            { "label": "Option X", "value": "OPTION_X" },
                            { "label": "Option Y", "value": "OPTION_Y" },
                            { "label": "Option Z", "value": "OPTION_Z" }
                        ]};
                }
                var allFields = [];
                if (newField != undefined) {
                    allFields.push(newField);
                }
                FieldService.createFieldForForm(fid, newField)
                    .then(function (form) {
                        $scope.fields = form.fields;
                    });
            }
        }

        $scope.removeField = function (fieldId) {
            var fid = $routeParams.formId;
            FieldService.deleteFieldForForm(fid, fieldId)
                .then(function (form) {
                    $scope.fields = form.fields;
                });
        }
    };
})();