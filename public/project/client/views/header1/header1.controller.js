'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("Header1Controller", Header1Controller)
    function Header1Controller($scope, $location, $rootScope) {
        $scope.$location = $location;
        $scope.logout = function () {
            $rootScope.user = null;
            $location.path("/home");
        };
    }
})();