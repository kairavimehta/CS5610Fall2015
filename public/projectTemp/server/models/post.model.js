var q = require('q');
var mongoose = require('mongoose');

module.exports = function (db) {
    var PostSchema = require("./post.schema.js");
    var PostModel = mongoose.model("PostModel", PostSchema);

    var api = {
        getPostsForUser: getPostsForUser,
        addPost: addPost,
        removePost: removePost
    };

    return api;

    function getPostsForUser(uid) {
        var deferred = q.defer();
        PostModel.find({ "userId": uid }, function (err, posts) {
            deferred.resolve(posts);
        });
        return deferred.promise;
    };

    function addPost(uid, post) {
        var deferred = q.defer();
        PostModel.create(post, function (err, user) {
            deferred.resolve(post);
        });
        return deferred.promise;
    };

    function removePost(uid, pid) {
        var deferred = q.defer();
        PostModel.remove({ "_id": pid }, function (err, post) {
            getPostsForUser(uid)
                .then(function (posts) {
                    deferred.resolve(posts);
                });
        });
        return deferred.promise;
    };
};