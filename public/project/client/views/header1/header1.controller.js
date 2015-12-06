'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("Header1Controller", Header1Controller)

    function Header1Controller($scope, $location, $rootScope, AuthService, UserService) {
        $scope.$location = $location;

        $scope.logout = function () {
            $rootScope.user = null;
            AuthService.setUser(null);
            $location.path("/home");
        };

        var init = function () {
            if (AuthService.isAuth()) {
                var userId = AuthService.getUser();
                if (userId) {
                    UserService.getUserByToken(userId)
                    .then(function (user) {
                        $rootScope.user = user;
                        $rootScope.$broadcast('auth', user);
                    });
                };
            };
        };

        init();
    };
})();