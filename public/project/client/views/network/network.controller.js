(function () {
    'use strict';

    angular
        .module("SocialApp")
        .controller("NetworkController", NetworkController);

    function NetworkController($rootScope, $location, UserService) {
        var model = this;
        model.user = $rootScope.user;

        function init() {
            if ($rootScope.user) {
                var uid = $rootScope.user._id;
                UserService.getFriends(uid)
                    .then(function (friends) {
                        model.friends = friends;
                    });
            }
            else {
                alert("login to access this page");
                $location.path("/login");
            }
        }
        init();
    }

})();