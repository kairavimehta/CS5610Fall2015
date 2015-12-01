module.exports = function (app, formModel) {
    app.get("/api/assignment/form/user/:id", findAllFormsForUser);
    app.post("/api/assignment/user/:userId/form", createFormForUser);
    app.delete("/api/assignment/form/:formId", deleteFormById);
    app.put("/api/assignment/form/:formId", updateFormById);

    function findAllFormsForUser(req, res) {
        var uid = req.params.id;
        formModel.findAllFormsForUser(uid)
            .then(function (forms) {
                res.json(forms);
            });
    }

    function createFormForUser(req, res) {
        var uid = req.params.userId;
        var form = req.body;
        formModel.createFormForUser(uid, form)
            .then(function (forms) {
                res.json(forms);
            });
    }

    function deleteFormById(req, res) {
        var fid = req.params.formId;
        formModel.deleteFormById(fid)
            .then(function (forms) {
                res.json(forms)
            });
    }

    function updateFormById(req, res) {
        var fid = req.params.formId;
        var newForm = req.body;
        formModel.updateFormField(fid, newForm)
            .then(function (forms) {
                res.json(forms);
            });
    }
}