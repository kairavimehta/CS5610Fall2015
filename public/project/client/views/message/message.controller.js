(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("MessageController", MessageController);

    function MessageController($scope, $location) {
        $scope.chat = function () {
            $location.path("/chat");
        };
        console.log("Messages");
    }

})();