'use strict';
(function () {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
        var users = [
            {uid:"1",uname:"alice",pwd:"abcd",email:"alice@wonderland.com",fname:"alice",lname:"wonderland"}];

        var service = {
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            Guid: Guid
        };
        return service;

        function findUserByUsernameAndPassword(uname, pwd, callback) {
            var selectedUser = null;
            for (var user in users) {
                var currUser = users[user];
                if(currUser.uname == uname && currUser.pwd == pwd){
                    selectedUser = currUser;
                }
            }
            callback(selectedUser);
        }

        function findAllUsers(callback) {
            callback(users);
        }

        function createUser(user, callback) {
            user.uid = Guid();
            users.push(user);
            callback(user);
        }

        function deleteUserById(uid, callback) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].uid == uid) {
                    users.splice(i, 1);
                }
            }
            callback(users);
        }

        function updateUser(uid, newUser, callback) {
            var editedUser = null;
            for (var user in users) {
                if (user.id == uid) {
                    user.uname = newUser.uname;
                    user.pwd = newUser.pwd;
                    user.email = newUser.email;
                    user.fname = newUser.fname;
                    user.lname = newUser.lname;
                    editedUser = user;
                }
            }
            callback(editedUser);
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