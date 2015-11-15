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

            //var selectedUser = null;
            //for (var user in users) {
            //    var currUser = users[user];
            //    if(currUser.uname == uname && currUser.pwd == pwd){
            //        selectedUser = currUser;
            //    }
            //}
            //callback(selectedUser);
        }

        function findAllUsers() {
            var deferred = $q.defer();
            $http.get("/api/assignment/user")
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;

            //callback(users);
        }

        function createUser(user, callback) {
            user.uid = Guid();
            var deferred = $q.defer();
            $http.post("/api/assignment/user", user)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
            //user.uid = Guid();
            //users.push(user);
            //callback(user);
        }

        function deleteUserById(uid) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/user/" + uid)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;

            //for (var i = 0; i < users.length; i++) {
            //    if (users[i].uid == uid) {
            //        users.splice(i, 1);
            //    }
            //}
            //callback(users);
        }

        function updateUser(uid, newUser) {
            var deferred = $q.defer();
            $http.put("/api/assignment/user/" + uid, newUser)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;

            //var editedUser = null;
            //for (var user in users) {
            //    if (user.id == uid) {
            //        user.uname = newUser.uname;
            //        user.pwd = newUser.pwd;
            //        user.email = newUser.email;
            //        user.fname = newUser.fname;
            //        user.lname = newUser.lname;
            //        editedUser = user;
            //    }
            //}
            //callback(editedUser);
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