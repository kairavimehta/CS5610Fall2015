﻿var q = require('q');
var mongoose = require('mongoose');

module.exports = function (db) {
    var AdsSchema = require("./ads.schema.js");
    var AdsModel = mongoose.model("AdsModel", AdsSchema);

    var api = {
        getAllAds: getAllAds,
        postAd: postAd,
        removeAd: removeAd
    };

    return api;

    function getAllAds() {
        var deferred = q.defer();
        AdsModel.find(function (err, ads) {
            deferred.resolve(ads);
        }).sort({ "postedOn": -1 });
        return deferred.promise;
    };

    function postAd(ad) {
        var deferred = q.defer();
        AdsModel.create(ad, function (err, ad) {
            deferred.resolve(ad);
        });
        return deferred.promise;
    };

    function removeAd(aid) {
        var deferred = q.defer();
        AdsModel.remove({ "_id": aid }, function (err, msg) {
            getAllAds()
                .then(function (ads) {
                    deferred.resolve(ads);
                });
        });
        return deferred.promise;
    };
    
};