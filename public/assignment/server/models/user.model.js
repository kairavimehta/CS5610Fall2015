var q = require("q");
var mongoose = require("mongoose");
module.exports = function (db) {

    var UserSchema = require("./user.schema.js");
    var UserModel = mongoose.model("UserModel", UserSchema)

    var api = {
        findUserByCredentials: findByCredentials,
        findUserByUsername: findByUsername,
        findUserById: findById,
        createUser: createUser,
        findAllUsers: findAll,
        updateUser: updateUser,
        deleteUserById: deleteById
    }
    return api;

    function findByCredentials(credentials) {
        var deferred = q.defer();
        UserModel.findOne({ "userName": credentials.userName, "password": credentials.password }, function (err, user) {
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    function findByUsername(uname) {
        var deferred = q.defer();
        UserModel.findOne({ "userName": uname }, function (err, user) {
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    function findById(uid) {
        var deferred = q.defer();
        UserModel.findById(uid, function (err, user) {
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    function createUser(user) {
        var deferred = q.defer();
        UserModel.create(user, function (err, user) {
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    function findAll() {
        var deferred = q.defer();
        UserModel.find(function (err, users) {
            deferred.resolve(users);
        });
        return deferred.promise;
    }

    function updateUser(uid, updatedUser) {
        var deferred = q.defer();
        UserModel.findById(uid, function (err, user) {
            for (var prop in user) {
                if (!(typeof updatedUser[prop] == 'undefined')) {
                    user[prop] = updatedUser[prop];
                }
            }
            user.save(function (error) {
                deferred.resolve(user);
            });
        });
        return deferred.promise;
    }

    function deleteById(uid) {
        var deferred = q.defer();
        UserModel.remove({ _id: uid }, function (err) {
            findAll().then(function (users) {
                deferred.resolve(users);
            });
        });
        return deferred.promise;
    }
}