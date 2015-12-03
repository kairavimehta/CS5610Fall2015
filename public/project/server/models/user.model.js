﻿var q = require('q');
var mongoose = require('mongoose');

module.exports = function (db) {
    var UserSchema = require("./user.schema.js");
    var PostSchema = require("./post.schema.js");
    var FriendsSchema = require("./friends.schema.js");
    var AdsSchema = require("./ads.schema.js");
    var AdsModel = mongoose.model("AdsModel", AdsSchema);
    var FriendsModel = mongoose.model("FriendsModel", FriendsSchema);
    var PostModel = mongoose.model("PostModel", PostSchema);
    var User = mongoose.model("User", UserSchema);

    var api = {
        createUser: createUser,
        findAll: findAll,
        findById: findById,
        updateUser: updateUser,
        deleteUser: deleteUser,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        addFriend: addFriend,
        addPost: addPost,
        getPostsForUser: getPostsForUser,
        getFriendsForUser: getFriendsForUser,
        searchUser: searchUser,
        checkFriends: checkFriends,
        removePost: removePost,
        removeFriend: removeFriend,
        postAd: postAd,
        getAllAds: getAllAds
    };

    return api;

    function getAllAds() {
        var deferred = q.defer();
        AdsModel.find(function (err, ads) {
            deferred.resolve(ads);
            //console.log(ads);
        });
        return deferred.promise;
    }

    function postAd(ad) {
        var deferred = q.defer();
        AdsModel.create(ad, function (err, ad) {
            deferred.resolve(ad);
        })
        return deferred.promise;
    }

    function removeFriend(uid, pid) {
        var deferred = q.defer();
        FriendsModel.remove({ "friendOf": uid, "person": pid }, function (err, friend) {
            deferred.resolve(friend);
        })
        return deferred.promise;
    }

    function removePost(uid, pid) {
        var deferred = q.defer();
        PostModel.remove({ "_id": pid }, function (err, post) {
            getPostsForUser(uid)
                .then(function (posts) {
                    deferred.resolve(posts);
                })
        })
        return deferred.promise;
    }

    function checkFriends(uid, pid) {
        var deferred = q.defer();
        FriendsModel.find({ "friendOf": uid, "person": pid }, function (err, friend) {
            deferred.resolve(friend);
        });
        return deferred.promise;
    }

    function searchUser(options) {
        if (options && !options.lastName) {
            options = { '$or': [{ "firstName": options.firstName }, { "lastName": options.firstName }] };
        }
        var deferred = q.defer();
        User.find(options, function (err, user) {
            deferred.resolve(user);
        })
        return deferred.promise;
    }

    function addFriend(uid, pid) {
        var deferred = q.defer();
        User.find({ "_id": pid }, function (err, user) {
            if (user) {
                var newFriend = {
                    "person": user[0]._id,
                    "firstName": user[0].firstName,
                    "lastName": user[0].lastName,
                    "friendOf": uid
                }
                FriendsModel.create(newFriend, function (err, friends) {
                    deferred.resolve(friends);
                });
            }
        });
        return deferred.promise
    }

    function getFriendsForUser(uid) {
        var deferred = q.defer();
        FriendsModel.find({ "friendOf": uid }, function (err, friends) {
            deferred.resolve(friends);
        });
        return deferred.promise;
    }

    function addPost(uid, post) {
        var deferred = q.defer();
        PostModel.create(post, function (err, user) {
            deferred.resolve(post);
        });
        return deferred.promise;
    }

    function getPostsForUser(uid) {
        var deferred = q.defer();
        PostModel.find({ "userId": uid }, function (err, posts) {
            deferred.resolve(posts);
        });
        return deferred.promise;
    }

    function createUser(user) {
        var deferred = q.defer();
        User.create(user, function (err, user) {
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    function findAll() {
        var deferred = q.defer();
        User.find(function (err, users) {
            deferred.resolve(users);
        });
        return deferred.promise;
    }

    function findById(uid) {
        var deferred = q.defer();
        User.findById(uid, function (err, user) {
            deferred.resolve(user);
        });
        return deferred.promise;
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
    function deleteUser(uid) {
        var deferred = q.defer();
        User.remove({ _id: uid }, function (err) {
            findAll().then(function (users) {
                deferred.resolve(users);
            });
        });
        return deferred.promise;
    }

    function findUserByUsername(uname) {
        var deferred = q.defer();
        User.findOne({ "userName": uname }, function (err, user) {
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    function findUserByCredentials(credentials) {
        var deferred = q.defer();
        User.findOne({ "userName": credentials.userName, "password": credentials.password }, function (err, user) {

            deferred.resolve(user);
        });
        return deferred.promise;
    }
};