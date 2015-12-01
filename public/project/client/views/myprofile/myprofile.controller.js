(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("MyProfileController", MyProfileController);


    function MyProfileController($scope,$location) {
        console.log("MyProfile");
    }

})();