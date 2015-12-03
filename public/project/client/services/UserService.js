'use strict';
(function () {
    angular
        .module("SocialApp")
        .factory("UserService", UserService);
    function UserService($http, $q) {
        var service = {
            findUserByUsernameAndPassword: findByUsernameAndPassword,
            findAllUsers: findAll,
            createUser: createUser,
            deleteUserById: deleteById,
            updateUser: updateUser,
            addPost: addPost,
            getAllPosts: getAllPosts,
            getFriends: getFriends,
            findUsers: findUsers,
            checkFriends: checkFriends,
            addFriend: addFriend,
            removePost: removePost,
            getusername: getusername,
            removeFriend: removeFriend,
            postAd: postAd,
            getAds: getAds
        };
        return service;

        function getAds() {
            var deferred = $q.defer();
            $http.get("/api/project/ads")
                .success(function (response) {
                    deferred.resolve(response);
                    //console.log(response);
                });
            return deferred.promise;
        }

        function postAd(ad) {
            var deferred = $q.defer();
            $http.post("/api/project/user/ad", ad)
                .success(function (response) {
                    deferred.resolve(response);
                })
            return deferred.promise;
        }

        function removeFriend(userid, personid) {
            var deferred = $q.defer();
            $http.delete("/api/project/user/" + userid + "/remove/" + personid)
                .success(function (response) {
                    deferred.resolve(response);
                })
            return deferred.promise;
        }

        function getusername(personid) {
            var deferred = $q.defer();
            $http.get("/api/project/user/" + personid)
                .success(function (response) {
                    deferred.resolve(response);
                })
            return deferred.promise;
        }

        function removePost(userid,postid) {
            var deferred = $q.defer();
            $http.delete("/api/project/user/" + userid + "/post/" + postid)
                .success(function (response) {
                    deferred.resolve(response);
                })
            return deferred.promise;
        }

        function addFriend(userid, personid) {
            var deferred = $q.defer();
            $http.post("/api/project/user/" + userid + "/add/" + personid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function checkFriends(userid,personid) {
            var deferred = $q.defer();
            $http.get("/api/project/user/" + userid + "/person/" + personid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function findUsers(name) {
            var deferred = $q.defer();
            $http.get("/api/project/users/" + name)
                .success(function (response) {
                    deferred.resolve(response);
                });
           return deferred.promise;
        }

        function getFriends(uid) {
            var deferred = $q.defer();
            $http.get("/api/project/network/user/" + uid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function getAllPosts(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/post/user/" + userId)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function addPost(curruser, post) {
            var deferred = $q.defer();
            $http.post("/api/project/user/"+curruser+"/post", post)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function findByUsernameAndPassword(uname, pwd) {
            var deferred = $q.defer();
            $http.get("/api/project/user/" + uname + "/" + pwd)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function findAll() {
            var deferred = $q.defer();
            $http.get("/api/project/user")
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function createUser(user, callback) {
            var deferred = $q.defer();
            $http.post("/api/project/user", user)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        
        function deleteById(uid) {
            var deferred = $q.defer();
            $http.delete("/api/project/user/" + uid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function updateUser(uid, newUser) {
            var deferred = $q.defer();
            $http.put("/api/project/user/" + uid, newUser)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
    }
})();