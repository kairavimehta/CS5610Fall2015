'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("LoginController", LoginController);
    function LoginController($location, UserService, $rootScope) {
        var model = this;
        model.login = login;
        function login(uname, pwd) {
            UserService.findUserByUsernameAndPassword(uname, pwd)
                .then(function (user) {
                    if (user != null) {
                        $rootScope.user = user;
                        $location.path("/myprofile");
                    }
                    else
                    {
                        alert("Please register");
                    }
                });
        }
    }
})();