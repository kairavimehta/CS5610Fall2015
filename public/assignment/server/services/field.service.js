var model = require("../models/form.model.js")();
module.exports = function (app) {
    app.get("/api/assignment/form/:formId/field", findAllFieldsForAForm);
    app.get("/api/assignment/form/:formId/field/:fieldId", findFieldByIdForAForm);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldByIdForAForm);
    app.post("/api/assignment/form/:formId/field", createNewField);
    app.post("/api/assignment/form/:formId/field/:fieldId", updateField);
    function findAllFieldsForAForm(req, res) {
        var formId = req.params.formId;
        var form = model.findById(formId);
        var output;
        if (form == null) {
            output = null;
        }
        else {
            output = form.fields;
        }
        res.json(output);
    }
    function findFieldByIdForAForm(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var form = model.findById(formId);
        res.json(model.findFieldById(fieldId, form));
    }
    function deleteFieldByIdForAForm(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var form = model.findById(formId);
        res.json(model.deleteFieldById(fieldId, form));
    }
    function createNewField(req, res) {
        var formId = req.params.formId;
        var newField = req.body;
        var form = model.findById(formId);
        res.json(model.createField(newField, form));
    }
    function updateField(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var fieldFromBody = req.body;
        var form = model.findById(formId);
        res.json(model.updateField(fieldId, fieldFromBody, form));
    }
};