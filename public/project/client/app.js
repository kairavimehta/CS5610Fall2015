'use strict';
(function () {
    angular
        .module("SocialApp", ["ngRoute"])
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home/home.view.html"
            })
    }
})();