var q = require('q');
var mongoose = require('mongoose');

module.exports = function (db) {
    var MessageSchema = require("./message.schema.js");
    var MessageModel = mongoose.model("MessageModel", MessageSchema);

    var api = {
        getMessages: getMessages,
        sendMsg: sendMsg,
        removeMsg: removeMsg,
        getmsgforperson: getmsgforperson
    };

    return api;

    function getMessages(uid) {
        var deferred = q.defer();
        MessageModel.find({ "to": uid }, function (err, msgs) {
            deferred.resolve(msgs);
        }).sort({ "date": -1 });
        return deferred.promise;
    };

    function sendMsg(msg) {
        var deferred = q.defer();
        MessageModel.create(msg, function (err, msg) {
            deferred.resolve(msg);
        });
        return deferred.promise;
    };

    function removeMsg(uid, mid) {
        var deferred = q.defer();
        MessageModel.remove({ "_id": mid }, function (err, msg) {
            getMessages(uid)
                .then(function (msg) {
                    deferred.resolve(msg);
                });
        });
        return deferred.promise;
    };

    //function getmsgforperson(uid, pid) {
    //    var deferred = q.defer();
    //    //var msgs = [];
    //    MessageModel.find({ "from": pid, "to": uid }, function (err, msgs) {
    //       // msgs.push(msg);
    //        MessageModel.find({ "from": uid, "to": pid }, function (err, msg) {
    //            //msgs.push(msg)
    //            deferred.resolve(msgs,msg);
    //        }).sort({ "date" : -1 })
    //    }).sort({ "date" : -1})
    //    return deferred.promise;
    //}

    function getmsgforperson(uid, pid) {
        var deferred = q.defer();
        MessageModel.find({ $or: [{ "from": pid, "to": uid }, { "from": uid, "to": pid }] }
            , function (err, msgs) {
                deferred.resolve(msgs);
            }).sort({ "date": 1 });
        return deferred.promise;
    };
};