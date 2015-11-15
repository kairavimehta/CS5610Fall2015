'use strict';
(function () {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $location, UserService) {
        var model = this;
        model.login = login;

        function login(uname, pwd) {
            UserService.findUserByUsernameAndPassword(uname, pwd)
                .then(function (user) {
                    if (user != null) {
                        $rootScope.user = user;
                        $location.path("/profile");
                    }
                });
        }
    }
})();