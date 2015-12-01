'use strict';
(function () {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController(UserService, $rootScope, $location) {
        var model = this;
        model.register = register;

        function register (uname,pwd,vpwd,email) {
            var newUser = {
                userName: uname,
                password: pwd,
                email: email
            }
            UserService.createUser(newUser)
                .then(function (user) {
                    $rootScope.user = user;
                    $location.path("/profile");
                });
        }
    }
})();