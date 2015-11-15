//crud
var users = require("./user.mock.json")
module.exports = function () {
    var api = {
        create: create,
        findAll: findAll,
        findById: findById,
        findByCredentials: findByCredentials,
        update: update,
        remove: remove
    };

    return api;

    function create(user) {
        users.push(user);
        return users;
    }
};