'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService, $rootScope) {
        var model = this;
        model.login = login;
        model.user = $rootScope.user;

        function login(uname, pwd) {
            UserService.findUserByUsernameAndPassword(uname, pwd)
                .then(function (user) {
                    if (user) {
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