var users = require("./user.mock.json");
module.exports = function () {
    var api = {
        createUser: createUser,
        findAll: findAll,
        findById: findById,
        updateUser: updateUser,
        deleteUser: deleteUser,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials
    };
    return api;
    function createUser(user) {
        users.push(user);
        return(user);
    }
    function findAll() {
        return users;
    }
    function findById(id) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                return users[i];
            }
        }
        return null;
    }
    function updateUser(id, user) {
        for (var u in users) {
            if (users[u].id == id) {
                users[u] = user;
                return users[u];
            }
        }
        return null;
    }
    function deleteUser(id) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users.splice(i, 1);
            }
        }
        return users;
    }
    function findUserByUsername(username) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == username) {
                return users[i];
            }
        }
        return null;
    }
    function findUserByCredentials(credentials) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == credentials["username"] && users[i].password == credentials["password"]) {
                return users[i];
            }
        }
        return null;
    }
};