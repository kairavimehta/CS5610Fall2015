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
        function update (username,password,firstName,lastName,email) {
            if (currUser != null) {
                UserService.updateUser(currUser.id, currUser)
                    .then(function (updatedUser) {
                        $rootScope.user = updatedUser;
                    });
            }
        }
    }
})();
