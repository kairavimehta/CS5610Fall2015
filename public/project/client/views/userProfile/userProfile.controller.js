(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("UserProfileController", UserProfileController);


    function UserProfileController($scope, $location) {
        console.log("UserProfile");
    }

})();