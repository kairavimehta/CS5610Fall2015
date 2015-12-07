'use strict';
(function () {
    angular
        .module("SocialApp")
        .factory("AdsService", AdsService);

    function AdsService($http, $q) {

        var service = {
            getAds: getAds,
            postAd: postAd,
            removeAd: removeAd,
        };
        return service;

        function getAds() {
            var deferred = $q.defer();
            $http.get("/api/project/ads")
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function postAd(ad) {
            var deferred = $q.defer();
            $http.post("/api/project/user/ad", ad)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function removeAd(aid) {
            var deferred = $q.defer();
            $http.delete("/api/project/ad/" + aid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
    };
})();