var q = require('q');
var mongoose = require('mongoose');

module.exports = function (db) {
    var FriendsSchema = require("./friends.schema.js");
    var FriendsModel = mongoose.model("FriendsModel", FriendsSchema);
    var UserSchema = require("./user.schema.js");
    var User = mongoose.model("User", UserSchema);

    var api = {
        getFriendsForUser: getFriendsForUser,
        checkFriends: checkFriends,
        addFriend: addFriend,
        removeFriend: removeFriend
    };

    return api;

    function getFriendsForUser(uid) {
        var deferred = q.defer();
        FriendsModel.find({ "friendOf": uid }, function (err, friends) {
            deferred.resolve(friends);
        });
        return deferred.promise;
    };

    function checkFriends(uid, pid) {
        var deferred = q.defer();
        FriendsModel.find({ "friendOf": uid, "person": pid }, function (err, friend) {
            deferred.resolve(friend);
        });
        return deferred.promise;
    };

    function addFriend(uid, pid) {
        var deferred = q.defer();
        User.find({ "_id": pid }, function (err, user) {
            if (user) {
                var newFriend = {
                    "person": user[0]._id,
                    "firstName": user[0].firstName,
                    "lastName": user[0].lastName,
                    "friendOf": uid
                };

                FriendsModel.create(newFriend, function (err, friends) {
                    deferred.resolve(friends);
                });
            };
        });
        return deferred.promise
    };

    function removeFriend(uid, pid) {
        var deferred = q.defer();
        FriendsModel.remove({ "friendOf": uid, "person": pid }, function (err, friend) {
            deferred.resolve(friend);
        });
        return deferred.promise;
    };
};