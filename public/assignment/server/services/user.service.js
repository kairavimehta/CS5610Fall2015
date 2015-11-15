//talk to the server listens to client request
module.exports = function (app) {
    app.get("/api/assignment", login);

    function login(req, res) {
        res.send("bjwrsgn");
    }
};