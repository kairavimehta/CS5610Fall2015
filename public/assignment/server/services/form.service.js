var model = require('../models/form.model.js')();
module.exports = function (app) {
    app.post('/api/assignment/user/:userId/form', createForm);
    app.get('/api/assignment/form/:formId', findById);
    app.get('/api/assignment/user/:userId/form', findAll);
    app.put('/api/assignment/form/:formId', updateForm);
    app.delete('/api/assignment/form/:formId', deleteForm);
    function createForm(req, res) {
        var userId = req.params.userId;
        var newForm = req.body;
        res.json(model.createForm(userId, newForm));
    }
    function findById(req, res) {
        var id = req.params.formId;
        res.json(model.findById(id));
    }
    function findAll(req, res) {
        var response;
        var usedId = req.params.userId;
        res.json(model.findAll(usedId));
    }
    function updateForm(req, res) {
        var id = req.params.formId;
        var form = req.body;
        res.json(model.updateForm(id, form));
    }
    function deleteForm(req, res) {
        var id = req.params.formId;
        res.json(model.deleteForm(id));
    }

}