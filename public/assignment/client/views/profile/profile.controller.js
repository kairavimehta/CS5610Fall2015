'use strict';
(function () {
    angular
        .module('FormBuilderApp')
        .controller('ProfileController', ProfileController);
    function ProfileController(UserService, $rootScope) {
        var model = this;
        model.update = update;
        var currUser = $rootScope.user;
        if (currUser != null) {
            model.usernameModel = currUser.username;
            model.passwordModel = currUser.password;
            model.emailModel = currUser.email;
            model.firstNameModel = currUser.firstName;
            model.lastNameModel = currUser.lastName;
        }
        function update (uname,pwd,fname,lname,email) {
            var updatedUser={"id": currUser.id,"username": uname,"password":pwd,"firstName":fname,"lastName":lname,"email":email};

            if (currUser != null) {
                UserService.updateUser(currUser.id, updatedUser)
                    .then(function (updateUser) {
                        $rootScope.user = updateUser;
                    });
            }
            alert("Update Successful");
        }
    }
})();
