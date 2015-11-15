'use strict';
(function () {
    angular
        .module('FormBuilderApp')
        .controller('RegisterController', RegisterController);

    function RegisterController(UserService, $scope, $rootScope, $location) {
        $scope.register = function () {
            if ($scope.pwd != $scope.vpwd) {
                return;
            }
            var createUser = {
                uname: $scope.uname,
                pwd: $scope.pwd,
                email: $scope.email
            }
            UserService.createUser(createUser, function (user) {
                $rootScope.user = user;
                $location.url('/profile');
            });
        }
    }
})();

