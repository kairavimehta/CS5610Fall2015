(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("FindController", FindController);


    function FindController($scope, $location) {
        $scope.back = function () {
            $location.path("/myprofile");
        };
        console.log("find");
    }

})();