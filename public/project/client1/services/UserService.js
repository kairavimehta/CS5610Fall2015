'use strict';
(function () {
    angular
        .module("SocialApp")
        .factory("UserService", UserService);

    function UserService($http, $q) {

        var service = {
            findUserByUsernameAndPassword: findByUsernameAndPassword,
            createUser: createUser,
            findAllUsers: findAll,
            findUsers: findUsers,
            getusername: getusername,
            getUserByToken: getUserByToken
        };

        return service;

        function findByUsernameAndPassword(uname, pwd) {
            var deferred = $q.defer();
            $http.get("/api/project/user/" + uname + "/" + pwd)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function createUser(user) {
            var deferred = $q.defer();
            $http.post("/api/project/user", user)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function findAll() {
            var deferred = $q.defer();
            $http.get("/api/project/user")
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function findUsers(name) {
            var deferred = $q.defer();
            $http.get("/api/project/users/" + name)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function getusername(personid) {
            var deferred = $q.defer();
            $http.get("/api/project/user/" + personid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };

        function getUserByToken(token) {
            var deferred = $q.defer();
            $http.get("/api/project/user/" + token)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        };
    };
})();