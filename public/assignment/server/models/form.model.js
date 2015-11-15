var forms = require("./form.mock.json");
module.exports = function () {
    var api = {
        createForm: createForm,
        findById: findById,
        findAll: findAll,
        updateForm: updateForm,
        deleteForm: deleteForm,
        findFormByTitle: findFormByTitle,
        findFieldById: findFieldById,
        deleteFieldById: deleteFieldById,
        createField: createField,
        updateField: updateField
    }
    return api;
    function createForm(uid, newForm) {
        newForm.userId = uid;
        forms.push(newForm);
        return findAll(uid);
    }
    function findById(fid) {
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].id == fid) {
                return forms[i];
            }
        }
        return null;
    }
    function findAll(uid) {
        var userForms = [];
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].userId == uid) {
                userForms.push(forms[i]);
            }
        }
        return userForms;
    }
    function findFormByTitle(name) {
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].title == name) {
                return forms[i];
            }
        }
        return null;
    }
    function updateForm(id, form) {
        var uid = form.userId;
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].id == id) {
                forms[i].title = form.title;
            }
        }
        return findAll(uid);
    }
    function deleteForm(fid) {
        var uid;
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].id == fid) {
                uid = forms[i].userId;
                forms.splice(i, 1);
            }
        }
        return findAll(uid);
    }
    function findFieldById(fieldId, form) {
        for (var i = 0; i < form.fields.length; i++) {
            if (form.fields[i].id == fieldId) {
                return form.fields[i];
            }
        }
        return null;
    }
    function deleteFieldById(fieldId, form) {
        for (var i = 0; i < form.fields.length; i++) {
            if (form.fields[i].id == fieldId) {
                form.fields.splice(i, 1);
            }
        }
        return form.fields;
    }
    function createField(newField, form) {
        newField.id = guid();
        form.fields.push(newField);
        return form.fields;
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
    function updateField(fieldId, formFields, form) {
        for (var i = 0; i < form.fields.length; i++) {
            if (form.fields[i].id == fieldId) {
                form.fields[i] = formFields;
            }
        }
        return form.fields;
    }
}