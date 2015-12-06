'use strict';
(function () {
    angular
        .module("SocialApp")
        .factory("FriendService", FriendService);

    function FriendService($http, $q) {
        var service = {
            getFriends: getFriends,
            checkFriends: checkFriends,
            addFriend: addFriend,
            removeFriend: removeFriend,
        };
        return service;

        function getFriends(uid) {
            var deferred = $q.defer();
            $http.get("/api/project/network/user/" + uid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function checkFriends(userid, personid) {
            var deferred = $q.defer();
            $http.get("/api/project/user/" + userid + "/person/" + personid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function addFriend(userid, personid) {
            var deferred = $q.defer();
            $http.post("/api/project/user/" + userid + "/add/" + personid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function removeFriend(userid, personid) {
            var deferred = $q.defer();
            $http.delete("/api/project/user/" + userid + "/remove/" + personid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
    };
})();