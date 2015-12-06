'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService, $rootScope, AuthService) {
        var model = this;
        model.login = login;
        model.user = $rootScope.user;

        function login(uname, pwd) {
            UserService.findUserByUsernameAndPassword(uname, pwd)
                .then(function (user) {
                    if (user) {
                        $rootScope.user = user;
                        AuthService.setUser(user._id);
                        $rootScope.$broadcast('auth', user);
                        $location.path("/myprofile");
                    } else {
                        alert("Please register");
                    };
                });
        };
    };
})();