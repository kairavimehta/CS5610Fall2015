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
    };
    return api;
    function createForm(userId, newForm) {
        newForm.userId = userId;
        forms.push(newForm);
        return findAll(userId);
    }
    function findById(formId) {
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].id == formId) {
                return forms[i];
            }
        }
        return null;
    }
    function findAll(userId) {
        var formsForUser = [];
        for(var f in forms){
            if (forms[f].userId == userId) {
                formsForUser.push(forms[f]);
            }
        }
        return formsForUser;
    }
    function findFormByTitle(title) {
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].title == title) {
                return forms[i];
            }
        }
        return null;
    }
    function updateForm(id, form) {
        var uid = form.userId;
        for (var i = 0; i < forms.length; i++) {
            if(forms[i].id == id){
                forms[i].title = form.title;
            }
        }
        return findAll(uid);
    }
    function deleteForm(formId) {
        var uid;
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].id == formId) {
                userId = forms[i].userId;
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
        forms.fields.push(newField);
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
    function updateField(fieldId, fieldFromBody, from) {
        for (var i = 0; i < form.fields.length; i++) {
            if (form.fields[i].id == fieldId) {
                form.fields[i] = fieldFromBody;
            }
        }
        return form.fields;
    }

};