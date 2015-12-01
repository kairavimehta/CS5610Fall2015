(function () {
    'use strict';

    angular
    .module("SocialApp")
    .controller("HeaderController", HeaderController)

    function HeaderController($scope, $location, $rootScope) {
        $scope.$location = $location;
    }


})()