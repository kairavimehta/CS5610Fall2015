var model = require('../models/form.model.js')();
module.exports = function (app) {
    app.post('/api/assignment/user/:userId/form', createForm);
    app.get('/api/assignment/form/:formId', findById);
    app.get('/api/assignment/user/:userId/form', findAll);
    app.put('/api/assignment/form/:formId', updateForm);
    app.delete('/api/assignment/form/:formId', deleteForm);
    function createForm(req, res) {
        var uid = req.params.userId;
        var newForm = req.body;
        res.json(model.createForm(uid, newForm));
    }
    function findById(req, res) {
        var fid = req.params.formId;
        res.json(model.findById(fid));
    }
    function findAll(req, res) {
        var response;
        var uid = req.params.userId;
        res.json(model.findAll(uid));
    }
    function updateForm(req, res) {
        var fid = req.params.formId;
        var form = req.body;
        res.json(model.updateForm(fid, form));
    }
    function deleteForm(req, res) {
        var fid = req.params.formId;
        res.json(model.deleteForm(fid));
    }

}