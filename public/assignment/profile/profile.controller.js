'use strict';
(function () {
    angular
        .module('FormBuilderApp')
        .controller('ProfileController', ProfileController);

    function ProfileController(UserService, $scope, $rootScope) {
        var currUser = null;
        if ($rootScope.user != null) {
            currUser = $rootScope.user;
            $scope.uname = currUser.uname;
            $scope.pwd = currUser.pwd;
            $scope.email = currUser.email;
            $scope.fname = currUser.fname;
            $scope.lname = currUser.lname;
        }
        $scope.update = function () {
            if (currUser != null) {
                UserService.updateUser(currUser.uid, currUser, function (user) {
                });
            }
        }
    }
})();
