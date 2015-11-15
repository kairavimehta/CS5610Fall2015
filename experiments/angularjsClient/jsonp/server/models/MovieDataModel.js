var mock = require("../data/mock/mock.json")
module.exports = function () {
    var api = {
        findAllUSers: findAllUSers,
        findUserById: findUserById,
        userLikesMovie: userLikesMovie
    };
    return api;

    function findAllUsers() {
        return mock;
    }

    function findUserById(id) {
        for (var i = 0; i < mock.length; i++) {
            if (mock[i].id === id) {
                return mock[i];
            }
        }
    }

    function userLikesMovie(userId, idIMDB) {
        var user = findUserById(userId);
        user.likes.push({ 'idIMDB': idIMDB });
    }
};
