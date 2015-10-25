'use strict';
(function () {
    angular
        .module('FormBuilderApp')
        .controller('LoginController', LoginController);

    function LoginController(UserService, $scope, $rootScope, $location) {
        $scope.login = function () {
            UserService.findUserByUsernameAndPassword($scope.uname, $scope.pwd, function (user) {
                if (user != null) {
                    $rootScope.user = user;
                    $location.url('/profile');
                }
            });
        }
    }
})();