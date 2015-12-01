var model = require("../models/user.model.js")();
module.exports = function (app) {
    app.post("/api/project/user", createUser);
    app.get("/api/project/user", findAll);
    app.get("/api/project/user/:id", findById);
    app.put("/api/project/user/:id", updateUser);
    app.delete("/api/project/user:id", deleteUser);
    function createUser(req, res) {
        var newUser = req.body;
        res.json(model.createUser(newUser));
    }
    function findAll(req, res) {
        var modelResponse;
        var uname = req.query.username;
        var pwd = req.query.password;
        if (uname != undefined && pwd != undefined) {
            modelResponse = findUserByCredentials(uname, pwd);
        }
        else if (uname != undefined) {
            modelResponse = findUserByUsername(uname);
        }
        else {
            modelResponse = model.findAll();
        }
        res.json(modelResponse);
    }
    function findUserByUsername(uname) {
        return model.findUserByUsername;
    }
    function findUserByCredentials(uname, pwd) {
        var credentials = {
            "username": uname,
            "password": pwd
        };
        return model.findUserByCredentials(credentials);
    }
    function findById(req, res) {
        var id = req.params.id;
        res.json(model.findById(id));
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