//talk to the server listens to client request
module.exports = function (app) {
    app.get("/login", login);
    app.get("/register", register);

    function login(req, res) { }

    function register(req, res) { }
};