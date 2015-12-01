'use strict';
(function () {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, UserService, $rootScope) {
        var model = this;
        model.update = update;

        if ($rootScope.user != null) {
            var currUser = $rootScope.user;
            model.uname = currUser.userName;
            model.pwd = currUser.password;
            model.fname = currUser.firstName;
            model.lname = currUser.lastName;
            model.email = currUser.email;
        }
        function update(uname, pwd, fname, lname, email) {
            if ($rootScope.user != null) {
                var currUser = $rootScope.user;
                var updatedUser = {
                    userName: uname,
                    password: pwd,
                    firstName: fname,
                    lastName: lname,
                    email: email
                }
                UserService.updateUser(currUser._id, updatedUser)
                    .then(function (newUser) {
                        uname = updatedUser.userName;
                        pwd = updatedUser.password;
                        email = updatedUser.email;
                        fname = updatedUser.firstName;
                        lname = updatedUser.lastName;
                        alert("Profile Updated");
                    });
            }
        }
    }
})();