module.exports = function (app, Friends) {
    app.get("/api/project/network/user/:uid", getFriends);
    app.get("/api/project/user/:userId/person/:personId", checkFriends);
    app.post("/api/project/user/:userId/add/:personId", addFriend);
    app.delete("/api/project/user/:userId/remove/:personId", removeFriend);

    function getFriends(req, res) {
        var uid = req.params.uid;
        Friends.getFriendsForUser(uid)
            .then(function (friends) {
                res.json(friends);
            });
    };

    function checkFriends(req, res) {
        var userId = req.params.userId;
        var personId = req.params.personId;
        Friends.checkFriends(userId, personId)
            .then(function (friend) {
                res.json(friend);
            });
    };

    function addFriend(req, res) {
        var userId = req.params.userId;
        var personId = req.params.personId;
        Friends.addFriend(userId, personId)
            .then(function (friend) {
                res.json(friend);
            });
    };

    function removeFriend(req, res) {
        var userId = req.params.userId;
        var personId = req.params.personId;
        Friends.removeFriend(userId, personId)
            .then(function (friend) {
                res.json(friend);
            });
    };
};