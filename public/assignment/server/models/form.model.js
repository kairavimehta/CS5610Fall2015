var q = require('q');
var mongoose = require('mongoose');

module.exports = function (db) {
    var FormSchema = require("./form.schema.js");
    var FormModel = mongoose.model("FormModel", FormSchema)

    var api = {
        findAllFormsForUser: findAllForUser,
        createFormForUser: createForUser,
        findFormById: findById,
        findFormByTitle: findByTitle,
        deleteFormById: deleteById,
        updateFormById: updateById,
        updateFormField: updateField
    }
    return api;

    function findAllForUser(uid) {
        var deferred = q.defer();
        FormModel.find({ "idForUser": uid }, function (err, forms) {
            deferred.resolve(forms);
        });
        return deferred.promise;
    }

    function createForUser(uid, form) {
        var deferred = q.defer();
        FormModel.create(form, function (err, form) {
            FormModel.find({ "idForUser": uid }, function (err, forms) {
                deferred.resolve(forms);
            });
        });
        return deferred.promise;
    }

    function findById(fid) {
        var deferred = q.defer();
        FormModel.findById(fid, function (err, form) {
            deferred.resolve(form);
        });
        return deferred.promise;
    }

    function findByTitle(title) {
        var deferred = q.defer();
        FormModel.find({ "title": title }, function (err, form) {
            deferred.resolve(form);
        })
        return deferred.promise;
    }

    function deleteById(fid) {
        var deferred = q.defer();
        var uid;
        findById(fid)
            .then(function (form) {
                uid = form.idForUser;
                FormModel.remove({ "_id": formId }, function (err, form) {
                    findAllForUser(uid).then(function (forms) {
                        deferred.resolve(forms);
                    });
                });
                console.log("deleted");
            });
        return deferred.promise;
    }

    function updateById(fid, newForm) {
        var deferred = q.defer();
        FormModel.findById(fid, function (err, form) {
            for (var prop in form) {
                if (!(typeof newForm[prop] == 'undefined')) {
                    form[prop] = newForm[prop];
                }
            }
            form.save(function (err) {
                FormModel.findById(fid, function (err, form) {
                    deferred.resolve(form);
                });
            });
        });
        return deferred.promise;
    }

    function updateField(fid,form) {
        var uid = form.idForUser;
            var deferred = q.defer();
            FormModel.find({ "_id": fid }, function (err, forms) {
                var formToBeUpdated = forms[0];
                formToBeUpdated.title = form.title;
                formToBeUpdated.save(function (err, form) {
                    FormModel.find({ "idForUser": uid }, function (err, forms) {
                        deferred.resolve(forms);
                    });
                });
            });
            return deferred.promise;
    }
}