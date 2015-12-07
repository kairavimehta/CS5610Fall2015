module.exports = function (app, User) {
    app.get("/api/project/user/:username/:password", findUser);
    app.post("/api/project/user", createUser);
    app.get("/api/project/user", findAll);
    app.get("/api/project/user/:id", findById);
    app.get("/api/project/users/:name", findUsers);

    function findUser(req, res) {
        var uname = req.params.username;
        var pwd = req.params.password;
        var credentials = { "userName": uname, "password": pwd }
        User.findUserByCredentials(credentials).then(function (user) {
            res.json(user);
        });
    };

    function findUserByUsername(req, res) {
        var uname = req.params.username;
        User.findUserByUsername(uname)
         .then(function (users) {
             res.json(users);
         });
    };

    function createUser(req, res) {
        var newUser = req.body;
        User.createUser(newUser)
            .then(function (user) {
                res.json(user);
            });
    };

    function findAll(req, res) {
        User.findAll()
            .then(function (users) {
                res.json(users);
            });
    };

    function findById(req, res) {
        var id = req.params.id;
        User.findById(id)
         .then(function (users) {
             res.json(users);
         });
    };

    function findUsers(req, res) {
        var name = req.params.name;
        if (name) {
            var options = {};
            var username = name.split(" ");
            if (username.length >= 2) {
                options.firstName = { $regex: new RegExp(username[0], "i") };
                options.lastName = { $regex: new RegExp(username[1], "i") };
            } else {
                options.firstName = { $regex: new RegExp(username[0], "i") };
            }

            User.searchUser(options)
                .then(function (user) {
                    res.json(user);
                });
        };
    };
};