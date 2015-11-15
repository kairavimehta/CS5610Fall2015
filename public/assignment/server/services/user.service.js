var model = require("../models/user.model.js")();
module.exports = function (app) {
    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", findAll);
    app.get("/api/assignment/user/:id", findById);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user:id", deleteUser);
    function createUser(req, res) {
        var newUser = req.body;
        res.json(model.createUser(newUser));
    }
    function findAll(req, res) {
        var id = req.params.id;
        res.json(model.findById(id));
    }
    function findAll(req, res) {
        var modelResponse;
        var username = req.query.username;
        var password = req.query.password;
        if (username != undefined && password != undefined) {
            modelResponse = findUserByCredentials(username, password);
        }
        else if (username != undefined) {
            modelResponse = findUserByUsername(username);
        }
        else {
            modelResponse = model.findAll();
        }
        res.json(modelResponse);
    }
    function findUserByUsername(username) {
        return model.findUserByUsername;
    }
    function findUserByCredentials(username, password) {
        var credentials = {
            "username": username,
            "password": password
        };
        return model.findUserByCredentials(credentials);
    }
    function updateUser(req, res) {
        var id = req.params.id;
        var user = req.body;
        res.json(model.updateUser(id, user));
    }
    function deleteUser(req, res) {
        var id = req.params.id;
        res.json(model.deleteUser(id));
    }
};