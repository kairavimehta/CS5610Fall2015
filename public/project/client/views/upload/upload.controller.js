(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("UploadController", UploadController);

    function UploadController($scope, $location) {
        $scope.add = function () {
            $location.path("/myprofile");
        };
        console.log("Upload");
    }

})();