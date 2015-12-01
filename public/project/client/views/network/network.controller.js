(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("NetworkController", NetworkController);

    function NetworkController($scope, $location) {
        console.log("Network");
    }

})();