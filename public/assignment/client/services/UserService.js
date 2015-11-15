'use strict';
(function () {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);
    function UserService($http,$q) {
        var service = {
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
        };
        return service;
        function findUserByUsernameAndPassword(uname, pwd) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user?username="+uname+"&password="+pwd)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function findAllUsers() {
            var deferred = $q.defer();
            $http.get("/api/assignment/user")
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function createUser(user, callback) {
            user.uid = Guid();
            var deferred = $q.defer();
            $http.post("/api/assignment/user", user)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function deleteUserById(uid) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/user/" + uid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function updateUser(uid, newUser) {
            var deferred = $q.defer();
            $http.put("/api/assignment/user/" + uid, newUser)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
        function Guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                  .toString(16)
                  .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
              s4() + '-' + s4() + s4() + s4();
        }
    }
})();