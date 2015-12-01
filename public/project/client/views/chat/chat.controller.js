'use strict';
(function () {
    angular
        .module("SocialApp")
        .controller("ChatController", ChatController);

    function ChatController($scope, $location) {
        console.log("Chat");
        $scope.send = function () {
            $location.path("/myprofile")
        }
    }

})();