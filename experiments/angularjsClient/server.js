module.exports = function (app) {
    var users = [
        { first: "Alice", last: "Wonderland", username: "alice", email: "alice@wonderland.com" },
        { first: "Bob", last: "Marley", username: "bob", email: "bob@marley.com" },
        { first: "Charlie", last: "Garica", username: "charlie", email: "charlie@garcia.com" },
        { first: "Dan", last: "Craig", username: "dan", email: "dan@craig.com" }
    ];

    app.get('/api/user', function (req, res) {
        res.json(users);
    });

    app.get('/api/user/:id', function (req, res) {
        var index = req.params.id;
        console.log(index);
        res.json(users[index]);
    });

    app.delete('/api/user/:id', function (req, res) {
        var index = req.params.id;
        users.splice(index, 1);
        res.json(users);
    });

    app.post('/api/user', function (req, res) {
        var newUser = req.body;
        console.log(newUser);
        users.push(newUser);
        res.json(users);
    });

    app.put('/api/user/:id', function (req, res) {
        var index = req.params.id;
        users[index] = req.body;
        res.json(users);
    });
};