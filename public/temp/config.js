'use strict';
(function () {
    angular
        .module("SocialApp")
        .config(Configure);
    function Configure($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "home.view.html"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();