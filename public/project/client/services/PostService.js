'use strict';
(function () {
    angular
        .module("SocialApp")
        .factory("PostService", PostService);

    function PostService($http, $q) {

        var service = {
            getAllPosts: getAllPosts,
            addPost: addPost,
            removePost: removePost,
        };

        return service;

        function getAllPosts(userId) {
            var deferred = $q.defer();
            $http.get("/api/project/post/user/" + userId)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function addPost(curruser, post) {
            var deferred = $q.defer();
            $http.post("/api/project/user/" + curruser + "/post", post)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function removePost(userid, postid) {
            var deferred = $q.defer();
            $http.delete("/api/project/user/" + userid + "/post/" + postid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
    };
})();