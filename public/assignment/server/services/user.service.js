module.exports = function (app, userModel) {
    app.get("/api/assignment/user/:username/:password", findUser);
    app.get("/api/assignment/user", findAllUsers);
    app.get("/api/assignment/user/:username", findUserByUsername);
    app.post("/api/assignment/user", createUser)
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUserById);

    function findUser(req, res) {
        var uname = req.params.username;
        var pwd = req.params.password;
        var credentials = { "userName": uname, "password": pwd }
        userModel.findUserByCredentials(credentials).then(function (user) {
            res.json(user);
        });
    }

    function findAllUsers(req, res) {
        userModel.findAllUsers()
            .then(function (users) {
                res.json(users);
            });
    }

    function findUserByUsername(req, res) {
        var uname = req.params.username;
        userModel.findUserByUsername(uname)
         .then(function (users) {
             res.json(users);
         });
    }

    function findUserById(req, res) {
        var id = req.params.id;
        userModel.findUserById(id)
         .then(function (users) {
             res.json(users);
         });
    }

    function createUser(req, res) {
        var user = req.body;
        userModel.createUser(user)
            .then(function (user) {
                res.json(user);
            });
    }

    function updateUser(req, res) {
        var uid = req.params.id;
        var user = req.body;
        userModel.updateUser(uid, user)
            .then(function (user) {
                res.json(user);
            });
    }

    function deleteUserById(req, res) {
        var uid = req.params.id;
        userModel.deleteUserById(uid)
              .then(function (users) {
                  res.json(users);
              });
    }
}